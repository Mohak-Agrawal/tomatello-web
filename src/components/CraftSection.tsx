import { useEffect, useState } from "react";

import Craft1 from "../assets/craft.png";
import Craft2 from "../assets/craft.png";
import Craft3 from "../assets/craft.png";
import SectionHeader from "./SectionHeader";

const slides = [
  {
    image: Craft1,
    label: "01 — Selection",
    text: "Seasonal produce sourced from trusted farms. Ingredients chosen for character, not volume.",
  },
  {
    image: Craft2,
    label: "02 — Preparation",
    text: "Hand-shaped pasta. Slow reductions. Measured technique refined through repetition.",
  },
  {
    image: Craft3,
    label: "03 — Balance",
    text: "Texture, acidity, and richness adjusted with restraint. Harmony over excess.",
  },
];

const CraftSection: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="craft" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <SectionHeader title="Our Craft" subtitle="How we do things" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image Carousel */}
          <div className="relative overflow-hidden">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt=""
                className={`absolute inset-0 w-full object-cover transition-opacity duration-1000 ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="relative w-full aspect-[4/5]" />
          </div>

          {/* Text Carousel */}
          <div className="relative min-h-[200px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4">
                  {slide.label}
                </p>

                <p className="text-base text-gray-700 font-light leading-relaxed max-w-md">
                  {slide.text}
                </p>
              </div>
            ))}

            {/* Minimal Indicators */}
            <div className="flex gap-3 mt-24">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-[2px] transition-all duration-300 ${
                    active === index ? "w-8 bg-[#9c8978]" : "w-4 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;
