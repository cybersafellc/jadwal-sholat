export default function Section({ children }) {
  return (
    <>
      <section className="max-w-2xl min-h-screen mx-auto bg-white text-black p-4">
        {children}
      </section>
    </>
  );
}
