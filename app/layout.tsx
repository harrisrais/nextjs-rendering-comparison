import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js Rendering Demo",
  description: "CSR, SSR, SSG, and ISR demonstration in App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        {/* 🔗 Navbar */}
        <nav className="flex gap-6 items-center justify-center p-4 bg-gray-900 text-white shadow-md">
          <Link href="/csr" className="hover:text-yellow-400 transition">
            CSR
          </Link>
          <Link href="/ssr" className="hover:text-yellow-400 transition">
            SSR
          </Link>
          <Link href="/ssg" className="hover:text-yellow-400 transition">
            SSG
          </Link>
          <Link href="/isr" className="hover:text-yellow-400 transition">
            ISR
          </Link>
        </nav>

        {/* 📦 Page Content */}
        <main className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg text-center">
          {children}
        </main>

        {/* 🔹 Footer */}
        <footer className="text-center py-40 text-sm text-red-600">
          Next.js Rendering Demo — CSR | SSR | SSG | ISR
        </footer>
      </body>
    </html>
  );
}
