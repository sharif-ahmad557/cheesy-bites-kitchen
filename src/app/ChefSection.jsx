"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const chefData = [
  {
    id: 1,
    name: "Teresa Doe",
    title: "Head Chef",
    imagePath: "/Chef/team-1.png",
  },
  {
    id: 2,
    name: "Jhonathon Doe",
    title: "Sous Chef",
    imagePath: "/Chef/team-2.png",
  },
  {
    id: 3,
    name: "Marta White",
    title: "Pastry Chef",
    imagePath: "/Chef/team-3.png",
  },
  {
    id: 4,
    name: "Mahbub Alom",
    title: "Assistant Chef",
    imagePath: "/Chef/team-4.png",
  },
];

export default function ChefSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-amber-500"></span>
            <p className="text-amber-500 tracking-[0.2em] text-sm font-bold uppercase">
              Team Members
            </p>
            <span className="h-0.5 w-8 bg-amber-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Our Master Chefs
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="chef-swiper pb-16"
        >
          {chefData.map((chef) => (
            <SwiperSlide key={chef.id} className="py-10">
              <div className="chef-card group relative bg-gray-800 rounded-3xl p-6 text-center transition-all duration-500 border border-gray-700 hover:border-amber-500/50">
                <div className="relative mx-auto w-56 h-56 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-600 group-hover:border-amber-500 group-hover:animate-spin-slow transition-colors duration-500"></div>

                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-amber-500 transition-colors duration-500">
                    <Image
                      src={chef.imagePath}
                      alt={chef.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
                  {chef.name}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
                  {chef.title}
                </p>

                <div className="flex justify-center gap-3">
                  <SocialIcon Icon={FaFacebookF} />
                  <SocialIcon Icon={FaTwitter} />
                  <SocialIcon Icon={FaInstagram} />
                  <SocialIcon Icon={FaLinkedinIn} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-slide-active .chef-card {
          transform: scale(1.05);
          background: #1f2937; /* Gray-800 darker */
          box-shadow: 0 20px 40px -10px rgba(245, 158, 11, 0.15); /* Amber shadow */
          border-color: #f59e0b; /* Amber border */
        }

        .swiper-pagination-bullet-active {
          background: #f59e0b !important;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a
      href="#"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md"
    >
      <Icon size={14} />
    </a>
  );
}
