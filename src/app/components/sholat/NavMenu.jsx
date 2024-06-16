import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <ul className="grid grid-cols-3 border-gray-100 border rounded-2xl overflow-hidden shadow-lg">
        <Link href="/home" className="flex justify-center items-center ">
          <div className="flex gap-1 py-4">
            <i class="bx bxs-home-alt-2"></i>
            <span className="text-sm hidden md:block">Home</span>
          </div>
        </Link>
        <Link
          href="/sholat"
          className="flex justify-center items-center border-b-4 border-blue-500 bg-blue-50 text-blue-500"
        >
          <div className="flex gap-1 py-4">
            <i class="bx bxs-time-five"></i>
            <span span className="text-sm hidden md:block">
              Sholat
            </span>
          </div>
        </Link>
        <Link href="/account" className="flex justify-center items-center ">
          <div className="flex gap-1 py-4">
            <i class="bx bxs-cog "></i>
            <span span className="text-sm hidden md:block">
              Account
            </span>
          </div>
        </Link>
      </ul>
    </>
  );
}
