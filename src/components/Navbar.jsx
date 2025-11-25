import Image from "next/image";
import logoImage from "../assets/logo.png";
import Link from "next/link";
export default function Navbar() {
  const hoverColorClass = "bg-amber-700";
  const borderColor = "border-amber-700";

  return (
    <div className="w-full bg-gray-950 p-2 border-b border-gray-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={logoImage}
            alt="CheesyBites Logo"
            width={100}
            height={50}
          />
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About Us</p>
          </Link>
          <Link href="/menu">
            <p>Menu</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className=" space-x-4">
          <Link href="/login">
            <button
              className={`
                rounded-xl
        relative 
        px-6 py-3 
        text-sm font-medium tracking-widest 
        text-amber-700 ${borderColor} border 
        bg-black 
        overflow-hidden 
        transition-colors duration-300 
        group 
        hover:text-black 
        focus:outline-none
      `}
            >
              <span
                className={`
          absolute 
          inset-0 
          w-full h-full 
          ${hoverColorClass} 
          transform origin-top scale-y-0 
          group-hover:scale-y-100 
          transition-transform duration-500 
          ease-out
        `}
                aria-hidden="true"
              ></span>

              <span className="relative z-20">LOGIN</span>
            </button>
          </Link>

          <Link href="/signup">
            <button
              className={`
        rounded-xl
        relative 
        px-6 py-3 
        text-sm font-medium tracking-widest  
        text-amber-700 ${borderColor} border 
        bg-black 
        overflow-hidden 
        transition-colors duration-300 
        group 
        hover:text-black 
        focus:outline-none
      `}
            >
              <span
                className={`
          absolute 
          inset-0 
          w-full h-full 
          ${hoverColorClass} 
          transform origin-top scale-y-0 
          group-hover:scale-y-100 
          transition-transform duration-500 
          ease-out
        `}
                aria-hidden="true"
              ></span>

              <span className="relative z-20">SIGN UP</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Home, About, Menu, Contact, Order History, Reservations, Specials
