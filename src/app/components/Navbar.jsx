import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <>
      <nav className="fixed bottom-0 right-0 left-0 transition duration-500">
        <div className="max-w-2xl mx-auto p-5 text-gray-700">{children}</div>
      </nav>
    </>
  );
}
