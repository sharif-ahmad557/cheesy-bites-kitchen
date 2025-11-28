"use client";
import Image from "next/image";
import Link from "next/link";
import { Utensils, ChefHat } from "lucide-react";

export default function WelcomeSection() {
  const images = [
    "/wellcome-img/well-1.jpg",
    "/wellcome-img/well-2.jpg",
    "/wellcome-img/well-3.jpg",
    "/wellcome-img/well-4.jpg",
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={images[0]}
                  alt="Restaurant Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="relative w-full h-32 md:h-48 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={images[1]}
                  alt="Delicious Dish"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative w-full h-32 md:h-48 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={images[2]}
                  alt="Master Chef"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={images[3]}
                  alt="Dining Table"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Since 2009
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-10 bg-amber-500"></span>
              <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">
                About Us
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Welcome to <span className="text-amber-500 italic">Restoran</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Experience the ultimate comfort food journey! At Cheesy Bites
              Kitchen, we master the art of bringing joy through meticulously
              crafted, cheesy delicacies. From gourmet grilled cheese to
              signature mac 'n' cheese, every bite is a celebration of flavor
              and nostalgia.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10 border-l-4 border-amber-500 pl-4">
              We are dedicated to using the freshest local ingredients and
              premium cheeses to create dishes that warm the soul. Join us for a
              truly unforgettable dining experience where quality meets comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-colors">
                <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                  <Utensils size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">15</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Years of <br />{" "}
                    <span className="font-semibold text-gray-300">
                      Experience
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-colors">
                <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                  <ChefHat size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">50</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Popular <br />{" "}
                    <span className="font-semibold text-gray-300">
                      Master Chefs
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <Link href="/signup">
              <button
                className="
                  rounded-full
                  relative
                  px-10 py-4
                  text-sm font-bold tracking-widest uppercase
                  text-amber-500 border border-amber-600
                  bg-transparent
                  overflow-hidden
                  transition-all duration-300
                  group
                  hover:text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]
                  focus:outline-none
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    w-full h-full
                    bg-amber-500
                    transform origin-left scale-x-0
                    group-hover:scale-x-100
                    transition-transform duration-500 ease-out
                  "
                  aria-hidden="true"
                ></span>

                <span className="relative z-20 flex items-center gap-2">
                  Book a Table
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
