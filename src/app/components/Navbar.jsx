import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <>
      <nav className="fixed bottom-0 right-0 left-0 transition duration-500">
        <div className="max-w-2xl mx-auto py-5 px-4 text-gray-700">
          {children}
        </div>
      </nav>
    </>
  );
}
