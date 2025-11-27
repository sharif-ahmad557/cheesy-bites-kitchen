"use client";
import Image from "next/image";
import logoImage from "../assets/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const hoverColorClass = "bg-amber-700";
  const borderColor = "border-amber-700";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  const handleProtectedClick = (e, path) => {
    if (!user) {
      e.preventDefault();
      toast.error("You need to login first to access this page!");
      router.push("/login");
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) =>
    pathname === path
      ? "text-amber-500 border-b-2 border-amber-500 pb-1"
      : "text-gray-300 hover:text-amber-500 transition pb-1";

  const mobileLinkClass = (path) =>
    pathname === path
      ? "block px-4 py-2 text-amber-500 bg-gray-900 border-l-4 border-amber-500 font-semibold"
      : "block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-amber-500 transition";

  return (
    <div className="w-full bg-gray-950 p-2 border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-amber-500 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>

            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src={logoImage}
                alt="CheesyBites Logo"
                width={100}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center font-medium text-sm tracking-wide">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/menu" className={isActive("/menu")}>
              Menu
            </Link>

            <Link href="/about" className={isActive("/about")}>
              About Us
            </Link>
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>

            <div className="border-l-2 border-r-2 border-amber-700 p-2 rounded-2xl hover:text-black">
              <Link
              href="/manage-products"
              onClick={(e) => handleProtectedClick(e, "/manage-products")}
              className={isActive("/manage-products")}
            >
              Manage Items
            </Link>
            </div>
          </div>

          <div className="flex space-x-4 items-center">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none border-2 border-amber-600 rounded-full p-0.5 transition hover:shadow-lg hover:shadow-amber-900/50"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User Profile"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-9 h-9 text-gray-400" />
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl py-2 overflow-hidden animate-fade-in-down z-50">
                    <div className="px-4 py-3 border-b border-gray-700 bg-gray-800/50">
                      <p className="text-sm text-white font-semibold truncate">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 hover:text-red-300 transition font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-3">
                <Link href="/login">
                  <button
                    className={`
                      rounded-lg relative px-3 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs font-bold tracking-widest 
                      text-amber-600 border border-amber-700 bg-transparent overflow-hidden 
                      transition-colors duration-300 group hover:text-black focus:outline-none
                    `}
                  >
                    <span
                      className={`
                        absolute inset-0 w-full h-full bg-amber-600 
                        transform origin-top scale-y-0 group-hover:scale-y-100 
                        transition-transform duration-500 ease-out
                      `}
                      aria-hidden="true"
                    ></span>
                    <span className="relative z-20">LOGIN</span>
                  </button>
                </Link>

                <Link href="/signup">
                  <button
                    className={`
                      rounded-lg relative px-3 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs font-bold tracking-widest  
                      text-black bg-amber-600 overflow-hidden 
                      transition-colors duration-300 group hover:text-white border border-amber-600 focus:outline-none
                    `}
                  >
                    <span
                      className={`
                        absolute inset-0 w-full h-full bg-black 
                        transform origin-bottom scale-y-0 group-hover:scale-y-100 
                        transition-transform duration-500 ease-out
                      `}
                      aria-hidden="true"
                    ></span>
                    <span className="relative z-20">SIGN UP</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 border-t border-gray-800 shadow-xl z-40 animate-fade-in-down">
            <div className="flex flex-col py-4 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass("/")}
              >
                Home
              </Link>
              <Link
                href="/menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass("/menu")}
              >
                Menu
              </Link>

              <Link
                href="/manage-products"
                onClick={(e) => handleProtectedClick(e, "/manage-products")}
                className={mobileLinkClass("/manage-products")}
              >
                Manage Items
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass("/about")}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileLinkClass("/contact")}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
