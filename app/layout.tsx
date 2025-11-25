import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Ziaul Hasan | Portfolio",
  description: "My personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto px-5">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
