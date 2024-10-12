import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex items-center justify-center px-10 py-4 lg:justify-between">
      <div className="cursor-pointer">
        {/* logo */}
        <Image
          src="/logo-4.svg"
          width={180}
          height={180}
          alt="logo.png"
          className="transition duration-300 transform hover:scale-110"
        />
      </div>
      <div className="hidden gap-8 lg:pr-10 xl:gap-20 lg:flex">
        <Link
          href="#"
          className=" font-bold uppercase text-sm hover:text-[#38B6FF] transition duration-300"
        >
          Home
        </Link>

        <Link
          href="#"
          className=" font-bold uppercase text-sm hover:text-[#38B6FF] transition duration-300"
        >
          About
        </Link>

        <Link
          href="#"
          className=" font-bold uppercase text-sm hover:text-[#38B6FF] transition duration-300"
        >
          Services
        </Link>

        <Link
          href="#"
          className=" font-bold uppercase text-sm hover:text-[#38B6FF] transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
