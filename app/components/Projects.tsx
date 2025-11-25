export default function Projects() {
  const projects = [
    { title: "Project One", desc: "Description here…" },
    { title: "Project Two", desc: "Description here…" },
    { title: "Project Three", desc: "Description here…" },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-5 border rounded-lg shadow">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
