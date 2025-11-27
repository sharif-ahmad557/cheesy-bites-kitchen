"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ReviewCard from "@/components/ReviewCard";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    quote:
      "The flavors were absolutely incredible! The pizza crust was perfect, and the toppings were fresh. Delivery was super fast too.",
    name: "Sarah Jenkins",
    role: "Food Blogger",
    product: "Pepperoni Pizza",
  },
  {
    id: 2,
    quote:
      "I was skeptical about ordering online, but the packaging kept everything hot and fresh. The cheesy burger is a must-try!",
    name: "Mark Thompson",
    role: "Regular Customer",
    product: "Cheesy Burger",
  },
  {
    id: 3,
    quote:
      "Great ambiance and even better food. The staff was polite and the service was quick. Highly recommended for family dinners.",
    name: "Emily White",
    role: "Food Critic",
    product: "Dining Experience",
  },
  {
    id: 4,
    quote:
      "Best pasta in town! Authentic Italian taste. Good value for money considering the portion size and quality.",
    name: "David Brown",
    role: "Chef",
    product: "Pasta Carbonara",
  },
  {
    id: 5,
    quote:
      "Simply delicious. I love their variety of sauces. It has become my go-to place for weekend cravings.",
    name: "Jessica Lee",
    role: "Marketing Manager",
    product: "Fried Chicken",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-amber-500"></span>
            <p className="text-amber-500 tracking-[0.2em] text-sm font-bold uppercase">
              Testimonial
            </p>
            <span className="h-0.5 w-8 bg-amber-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We value our customers' feedback. Here is what they have to say
            about our delicious meals and service.
          </p>
        </div>

        <div className="relative w-full">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="mySwiper pb-14 px-4"
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="transition-all duration-300 py-10"
              >
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-slide-active .ReviewCard {
          transform: scale(1.1);
          background-color: #1f2937;
          border-color: #f59e0b;
          box-shadow: 0 20px 40px -10px rgba(245, 158, 11, 0.2);
          opacity: 1;
        }

        .mySwiper .swiper-slide {
          opacity: 0.4;
          transition: all 0.5s ease-in-out;
          transform: scale(0.9);
        }

        .mySwiper .swiper-slide-active {
          opacity: 1;
          z-index: 10;
        }

        .swiper-pagination-bullet-active {
          background: #f59e0b !important;
        }
        .swiper-pagination-bullet {
          background: #9ca3af;
        }
      `}</style>
    </section>
  );
}
