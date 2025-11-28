"use client";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function UpcomingEvent() {
  const items = [
    {
      img: "/recent/recent-1.jpg",
      date: "15",
      month: "AUG",
      year: "2022",
      cat: "FOOD • FLAVOUR",
      title: "Flavor Journey: Taste the Magic",
      desc: "Delicious recipes and flavours that excite your taste buds.",
    },
    {
      img: "/recent/recent-2.jpg",
      date: "08",
      month: "SEP",
      year: "2022",
      cat: "HEALTHY • LIFESTYLE",
      title: "The Art of Healthy Eating",
      desc: "Tips and tricks to maintain a healthy diet and lifestyle.",
    },
    {
      img: "/recent/recent-3.png",
      date: "03",
      month: "SEP",
      year: "2022",
      cat: "RECIPE • COOKING",
      title: "Master Chef at Home",
      desc: "Step-by-step guides for easy-to-cook dishes at home.",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-amber-500"></span>
            <p className="text-amber-500 tracking-[0.2em] text-sm font-bold uppercase">
              Recent Updates
            </p>
            <span className="h-0.5 w-8 bg-amber-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Upcoming Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center min-w-[70px] shadow-lg group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors duration-300">
                <span className="block text-2xl font-bold text-white leading-none">
                  {item.date}
                </span>
                <span className="block text-xs font-semibold text-gray-200 uppercase mt-1 group-hover:text-black">
                  {item.month}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {item.cat}
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-amber-100 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-2 mb-4 group-hover:text-gray-300">
                  {item.desc}
                </p>

                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-amber-500 font-bold text-sm tracking-wide hover:text-white transition-colors"
                  >
                    READ MORE <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/blog">
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
                  transform origin-bottom scale-y-0
                  group-hover:scale-y-100
                  transition-transform duration-500 ease-out
                "
                aria-hidden="true"
              ></span>

              <span className="relative z-20 flex items-center gap-2">
                View All Posts
                <CalendarDays className="w-4 h-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
