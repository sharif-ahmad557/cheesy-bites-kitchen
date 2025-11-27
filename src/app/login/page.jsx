"use client";
import { useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // এই ভেরিয়েবলগুলো আপনার মিসিং ছিল
  const hoverColorClass = "bg-amber-700";
  const borderColor = "border-amber-700";

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in successfully!");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome back!");
      router.push("/");
    } catch (error) {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-3xl font-bold text-amber-500 text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="email@example.com"
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="******"
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-400 hover:text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`
              w-full rounded-xl relative px-6 py-3 
              text-sm font-medium tracking-widest text-amber-500 
              ${borderColor} border bg-black overflow-hidden 
              transition-colors duration-300 group hover:text-black 
              focus:outline-none
            `}
          >
            <span
              className={`
                absolute inset-0 w-full h-full ${hoverColorClass} 
                transform origin-top scale-y-0 group-hover:scale-y-100 
                transition-transform duration-500 ease-out
              `}
              aria-hidden="true"
            ></span>
            <span className="relative z-20 font-bold">LOGIN</span>
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className={`
            w-full rounded-xl relative px-6 py-3 
            text-sm font-medium tracking-widest text-amber-500 
            ${borderColor} border bg-black overflow-hidden 
            transition-colors duration-300 group hover:text-black 
            focus:outline-none
          `}
        >
          <span
            className={`
              absolute inset-0 w-full h-full ${hoverColorClass} 
              transform origin-top scale-y-0 group-hover:scale-y-100 
              transition-transform duration-500 ease-out
            `}
            aria-hidden="true"
          ></span>
          <span className="relative z-20 flex items-center justify-center gap-2 font-bold">
            <FaGoogle /> Login with Google
          </span>
        </button>

        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-amber-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
