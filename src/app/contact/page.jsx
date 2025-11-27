"use client";
import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"; 

export default function ContactUsPage() {
  const borderColor = "border-amber-600";
  const hoverColorClass = "bg-amber-600";

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-hidden">
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/footer-bg.jpg" 
            alt="Contact Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase animate-fade-in-down mb-2 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            We love hearing from our guests. Whether it's a reservation or
            feedback, reach out to us.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700"></div>

            <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-amber-500 pl-4">
              Contact Information
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Have a question about our menu or want to book a private event?
              Our team is here to help you with anything you need.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group/item">
                <div className="p-3 bg-gray-800 rounded-lg text-amber-500 group-hover/item:bg-amber-600 group-hover/item:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Our Location
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Plot 123, Street 45, Gulshan, Dhaka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="p-3 bg-gray-800 rounded-lg text-amber-500 group-hover/item:bg-amber-600 group-hover/item:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Phone Number
                  </h3>
                  <p className="text-gray-400 text-sm hover:text-amber-500 cursor-pointer transition">
                    +880 1234 567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="p-3 bg-gray-800 rounded-lg text-amber-500 group-hover/item:bg-amber-600 group-hover/item:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Email Address
                  </h3>
                  <p className="text-gray-400 text-sm hover:text-amber-500 cursor-pointer transition">
                    info@restoran.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="p-3 bg-gray-800 rounded-lg text-amber-500 group-hover/item:bg-amber-600 group-hover/item:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Mon - Sun: 10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-2xl relative">
            <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-amber-500 pl-4">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-950 border border-gray-800 p-4 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-950 border border-gray-800 p-4 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Reservation / Feedback"
                  className="w-full bg-gray-950 border border-gray-800 p-4 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-gray-950 border border-gray-800 p-4 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-gray-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`
                  w-full rounded-xl relative px-6 py-4 
                  text-sm font-bold tracking-widest uppercase
                  text-amber-500 ${borderColor} border bg-black 
                  overflow-hidden transition-all duration-300 
                  group hover:text-black hover:shadow-lg hover:shadow-amber-900/20
                  focus:outline-none
                `}
              >
                <span
                  className={`
                    absolute inset-0 w-full h-full ${hoverColorClass} 
                    transform origin-left scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-500 ease-out
                  `}
                  aria-hidden="true"
                ></span>
                <span className="relative z-20 flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>

      
    </div>
  );
}
