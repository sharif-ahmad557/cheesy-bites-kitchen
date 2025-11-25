"use client";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Facebook, Twitter, Instagram, Pin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 text-white"
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Logo + Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🍽️</span>
              <h2 className="text-3xl font-bold">Restoran</h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <Facebook className="w-8 h-8 p-2 rounded-full bg-white/10 hover:bg-white/20 transition" />
              <Twitter className="w-8 h-8 p-2 rounded-full bg-white/10 hover:bg-white/20 transition" />
              <Instagram className="w-8 h-8 p-2 rounded-full bg-white/10 hover:bg-white/20 transition" />
              <Pin className="w-8 h-8 p-2 rounded-full bg-white/10 hover:bg-white/20 transition" />
            </div>
          </div>

          {/* Address + Contact */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPinIcon className="w-6 h-6 text-orange-400" />
              <p>
                157 White Oak Drive Kansas City <br />
                689 Lynn Street South Boston
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <PhoneIcon className="w-6 h-6 text-orange-400" />
              <p>(617)-276-8031</p>
            </div>

            <div className="flex gap-4 items-center">
              <EnvelopeIcon className="w-6 h-6 text-orange-400" />
              <p>admin@foodday.com</p>
            </div>
          </div>

          {/* Right Orange Box */}
          <div className="absolute -top-30 right-20 bg-orange-500 p-6 rounded-2xl border border-white/20 animate-slide-left shadow-lg ">
            <div className="border-2 border-white/30 rounded-xl p-6">
              <h3 className="text-3xl text-center font-semibold mb-4 text-white">
                Open Hour
              </h3>

              <ul className="px-8 space-y-2 text-white/90">
                <li className="flex justify-between">
                  <span>Tuesday:</span> <span>7AM - 9PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Wednesday:</span> <span>7AM - 9PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Thursday:</span> <span>7AM - 9PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday:</span> <span>7AM - 9PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span> <span>7AM - 9PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span> <span>7AM - 9PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Monday:</span> <span>Close</span>
                </li>
              </ul>

              <h3 className="text-3xl font-bold mt-8 text-center">
                Reservation
                <br />
                Numbers
              </h3>

              <p className="text-center text-2xl mt-2 font-bold">
                (617)-276-8031
              </p>
            </div>
          </div>
        </div>
        
      </div>

      <a href="https://www.linkedin.com/in/shariful-islam-web-developer/">
        <h2 className="text-center mt-40 mb-6 text-white border-t border-white/30 pt-6">
          © 2025 Restoran. All rights reserved. Design by{" "}
          <span className="text-xl font-medium hover:underline hover:text-blue-500">
            Shariful Islam
          </span>{" "}
        </h2>
      </a>
    </footer>
  );
}
