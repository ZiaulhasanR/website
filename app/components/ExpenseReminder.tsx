"use client";

import { useState } from "react";

interface Expense {
  id: string;
  name: string;
  amount: number;
  status: "initial" | "added" | "cancelled";
}

export default function ExpenseReminder() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", name: "Rent", amount: 1500, status: "initial" },
    { id: "2", name: "Utilities", amount: 200, status: "initial" },
    { id: "3", name: "Groceries", amount: 400, status: "initial" },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAmount, setEditAmount] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  const handleEditClick = (expense: Expense) => {
    setEditingId(expense.id);
    setEditAmount(expense.amount);
  };

  const handleSaveEdit = (id: string) => {
    setExpenses(expenses.map(exp => 
      exp.id === id ? { ...exp, amount: editAmount } : exp
    ));
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditAmount(0);
  };

  const handleAddExpense = (expense: Expense) => {
    if (expense.status === "initial") {
      setSelectedExpense(expense);
      setShowModal(true);
    }
  };

  const handleConfirmAdd = () => {
    if (selectedExpense) {
      setExpenses(expenses.map(exp =>
        exp.id === selectedExpense.id ? { ...exp, status: "added" } : exp
      ));
      setShowModal(false);
      setSelectedExpense(null);
    }
  };

  const handleCancelExpense = () => {
    if (selectedExpense) {
      setExpenses(expenses.map(exp =>
        exp.id === selectedExpense.id ? { ...exp, status: "cancelled" } : exp
      ));
      setShowModal(false);
      setSelectedExpense(null);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExpense(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Expense Reminder</h1>
      
      {/* Budget Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Expense Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{expense.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {editingId === expense.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={editAmount}
                        onChange={(e) => setEditAmount(Number(e.target.value))}
                        className="w-24 px-2 py-1 border border-gray-300 rounded"
                      />
                      <button
                        onClick={() => handleSaveEdit(expense.id)}
                        className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      ${expense.amount}
                      <button
                        onClick={() => handleEditClick(expense)}
                        className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    expense.status === "added" 
                      ? "bg-green-100 text-green-800" 
                      : expense.status === "cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {expense.status.charAt(0).toUpperCase() + expense.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {expense.status === "initial" && (
                    <button
                      onClick={() => handleAddExpense(expense)}
                      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                    >
                      Add to Expense
                    </button>
                  )}
                  {expense.status === "added" && (
                    <span className="text-green-600 font-medium">✓ Added</span>
                  )}
                  {expense.status === "cancelled" && (
                    <span className="text-red-600 font-medium">✗ Cancelled</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedExpense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Confirm Expense</h2>
            <p className="mb-2">
              <strong>Expense:</strong> {selectedExpense.name}
            </p>
            <p className="mb-6">
              <strong>Amount:</strong> ${selectedExpense.amount}
            </p>
            <p className="mb-6 text-gray-600">
              Do you want to add this expense to your budget?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleCancelExpense}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel Expense
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={handleConfirmAdd}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Confirm Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
