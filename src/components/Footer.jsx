"use client";
import logoImage from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { Facebook, Twitter, Instagram, Pin } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Add Product", href: "/add-product" },
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-300 mt-20 overflow-hidden font-sans border-t-4 border-amber-600">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/footer-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-black opacity-95"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={logoImage}
                alt="CheesyBites Logo"
                width={180}
                height={80}
                className="brightness-110"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience the authentic taste of premium fast food. Crafted with
              passion, served with love. The best dining experience awaits you.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Pin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 text-amber-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-600 rounded-full"></span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-gray-800 text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Location</p>
                  <p className="text-sm text-gray-400">
                    157 White Oak Drive, Kansas City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-gray-800 text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Phone</p>
                  <p className="text-sm text-gray-400 hover:text-amber-500 cursor-pointer transition">
                    (617)-276-8031
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-gray-800 text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <EnvelopeIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Email</p>
                  <p className="text-sm text-gray-400 hover:text-amber-500 cursor-pointer transition">
                    admin@foodday.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-gray-900 border border-gray-800 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-600/10 rounded-full blur-xl"></div>

              <h3 className="text-xl font-bold text-center text-white mb-6 border-b border-gray-800 pb-4">
                Opening Hours
              </h3>

              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center text-gray-300">
                  <span className="font-medium">Mon - Fri:</span>
                  <span className="text-amber-500 font-bold bg-amber-500/10 px-2 py-1 rounded">
                    7AM - 9PM
                  </span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-amber-500 font-bold bg-amber-500/10 px-2 py-1 rounded">
                    9AM - 10PM
                  </span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-red-400 font-bold bg-red-500/10 px-2 py-1 rounded">
                    Closed
                  </span>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                  Reservation
                </p>
                <p className="text-2xl font-bold text-white hover:text-amber-500 transition-colors cursor-pointer">
                  (617)-276-8031
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 <span className="text-white font-semibold">Restoran</span>.
            All rights reserved.
          </p>

          <a
            href="https://www.linkedin.com/in/shariful-islam-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-500 transition-colors"
          >
            <span>Design by</span>
            <span className="font-medium text-white px-3 py-1 bg-gray-800 rounded-full border border-gray-700 hover:border-amber-600 transition-all">
              Shariful Islam
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
