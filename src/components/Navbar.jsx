import Image from "next/image";
import logoImage from "../assets/logo-1.png";
export default function Navbar() {
      const hoverColorClass = 'bg-amber-700'; 
  const borderColor = 'border-amber-700';

  return (
    <div className="w-full bg-gray-950 p-2 border-b border-gray-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Image src={logoImage} alt="CheesyBites Logo" width={100} height={50} />
        <div className="flex space-x-4 items-center">
          <p>Home</p>
          <p>About Us</p>
          <p>Menu</p>
          <p>Contact</p>
        </div>
        <div className=" space-x-4">
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
      
      
      <span className="relative z-20">
        SIGN UP
      </span>
    </button>
        </div>
      </div>
    </div>
  );
}
