export default function Section({ children, className }) {
  return (
    <>
      <section
        className={
          "max-w-2xl min-h-screen mx-auto bg-white text-black p-4 " + className
        }
      >
        {children}
      </section>
    </>
  );
}
