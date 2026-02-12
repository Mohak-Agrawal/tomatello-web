import { useState } from "react";
import Craft1 from "../assets/craft.png";
import Craft2 from "../assets/craft.png";
import Craft3 from "../assets/craft.png";
import SectionHeader from "./SectionHeader";

const slides = [
  {
    image: Craft1,
    label: "01 — SELECTION",
    text: "Seasonal produce sourced from trusted farms. Chosen for character, never for volume.",
  },
  {
    image: Craft2,
    label: "02 — PREPARATION",
    text: "Hand-shaped pasta. Slow reductions. Technique refined through discipline.",
  },
  {
    image: Craft3,
    label: "03 — BALANCE",
    text: "Texture, acidity, and richness adjusted with restraint. Harmony before indulgence.",
  },
];

const CraftSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="craft" className="py-32 bg-[#f6f4ef]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader title="Our Craft" subtitle="How we do things" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center mt-20">
          {/* Image Crossfade */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative w-full aspect-[4/5]">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${
                    active === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="relative min-h-[220px] flex flex-col justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-[10px] tracking-[0.5em] uppercase text-neutral-400 mb-6">
                  {slide.label}
                </p>

                <p className="text-[18px] font-light text-neutral-700 leading-relaxed max-w-sm">
                  {slide.text}
                </p>
              </div>
            ))}

            {/* Minimal Indicators */}
            <div className="flex gap-4 mt-28">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-[1px] transition-all duration-300 ${
                    active === index
                      ? "w-10 bg-[#9c8978]"
                      : "w-6 bg-neutral-300"
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
