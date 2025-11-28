"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [
    {
      img: "/hero_img-1.jpg",
      title: "Enjoy Our Delicious Meal",
      subtitle:
        "Fresh ingredients, handcrafted recipes — taste the magic in every bite.",
      badge: "Authentic Taste",
    },
    {
      img: "/hero_img-2.jpg",
      title: "Taste The Flavour of Happiness",
      subtitle:
        "A perfect blend of spices and love to make every meal unforgettable.",
      badge: "Best Seller",
    },
  ];

  const hoverColorClass = "bg-amber-500";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          className="h-[550px] md:h-[650px] w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                  <span className="hero-badge mb-6 inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 text-sm font-bold tracking-widest uppercase shadow-lg">
                    ✨ {slide.badge}
                  </span>

                  <h1 className="hero-title text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>

                  <p className="hero-subtitle text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  <div className="hero-btn">
                    <Link href="/contact" passHref>
                      <button className="relative px-10 py-4 rounded-full text-lg font-bold tracking-wide text-amber-500 bg-black/80 backdrop-blur-sm border border-amber-500/50 overflow-hidden transition-all duration-300 group hover:text-black hover:border-transparent hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                        <span
                          className={`absolute inset-0 w-full h-full ${hoverColorClass} transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out`}
                        ></span>

                        <span className="relative z-10 flex items-center gap-2">
                          Book a Table
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #f59e0b !important; /* Amber-500 */
          width: 30px;
          border-radius: 5px;
        }

        .swiper-slide-active .hero-badge {
          animation: slideDown 0.8s ease-out forwards;
        }
        .swiper-slide-active .hero-title {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .swiper-slide-active .hero-subtitle {
          animation: slideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .swiper-slide-active .hero-btn {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
