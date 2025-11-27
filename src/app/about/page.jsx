"use client";
import Image from "next/image";
import { Utensils, Award, Users, Heart } from "lucide-react";

import heroImg from "../../../public/hero_img.jpg";
import heroImg1 from "../../../public/hero_img-1.jpg";
import heroImg2 from "../../../public/hero_img-2.jpg";
import recent1 from "../../../public/RECENT/recent-1.jpg";
import recent2 from "../../../public/RECENT/recent-2.jpg";

const TeamMemberCard = ({ name, title, imgSrc }) => (
  <div className="group bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-amber-900/20 hover:border-amber-500/50 transition-all duration-500 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-amber-500 transition-colors duration-500">
      <Image
        src={imgSrc}
        alt={name}
        fill
        style={{ objectFit: "cover" }}
        className="group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    <div className="relative z-10 text-center">
      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
        {name}
      </h3>
      <p className="text-gray-400 text-sm tracking-widest uppercase">{title}</p>
    </div>
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden font-sans">
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Restaurant Interior"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-amber-500 font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-down">
            Since 2009
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            Our Culinary{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              Journey
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            More than just food, it's an experience. Discover the passion,
            tradition, and innovation behind every dish we serve.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-2xl relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Utensils size={100} className="text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-amber-500 rounded-full"></span>
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              To delight every guest with a unique dining experience that blends
              authentic flavors with modern culinary art. We strive to source
              the freshest ingredients and create memories that last a lifetime.
            </p>
          </div>

          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-2xl relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Heart size={100} className="text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-amber-500 rounded-full"></span>
              Our Vision
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              To be recognized globally as a sanctuary for food lovers, where
              passion meets plate. We envision a world where good food brings
              people together and creates a community of flavor enthusiasts.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Inside Our Kitchen
            </h2>
            <p className="text-gray-400">
              Where the magic happens every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[heroImg1, heroImg2, recent1].map((img, idx) => (
              <div
                key={idx}
                className="relative h-80 overflow-hidden rounded-2xl shadow-lg group cursor-pointer border border-gray-800"
              >
                <Image
                  src={img}
                  alt={`Ambiance ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition duration-700 ease-in-out transform group-hover:scale-110 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center backdrop-blur-sm">
                  <p className="text-amber-500 font-bold text-xl uppercase tracking-widest border border-amber-500 px-6 py-2 rounded-full">
                    View Gallery
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-bold tracking-widest uppercase mb-2">
              The Masterminds
            </p>
            <h2 className="text-4xl font-extrabold text-white">
              Meet Our Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMemberCard
              name="John Doe"
              title="Founder & Head Chef"
              imgSrc={heroImg}
            />
            <TeamMemberCard
              name="Jane Smith"
              title="Restaurant Manager"
              imgSrc={heroImg1}
            />
            <TeamMemberCard
              name="Alex Johnson"
              title="Lead Pastry Chef"
              imgSrc={heroImg2}
            />
          </div>
        </div>

        <div className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-16">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-amber-500 w-8 h-8" />
                <span className="text-amber-500 font-bold tracking-widest">
                  AWARDS & RECOGNITION
                </span>
              </div>
              <h2 className="text-4xl font-extrabold mb-6 text-white leading-tight">
                Voted Best Restaurant <br /> in the City
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Our commitment to quality has been recognized by top food
                critics. We recently celebrated serving our 100,000th happy
                customer and received the "Golden Spoon Award" for excellence.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-amber-500">15+</h3>
                  <p className="text-gray-500 text-sm">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-amber-500">50+</h3>
                  <p className="text-gray-500 text-sm">Awards Won</p>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] w-full">
              <Image
                src={recent2}
                alt="Award Winning Dish"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUsPage;
