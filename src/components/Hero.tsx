interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

import Hero from "../assets/hero.png";

const HeroSection: React.FC<HeroSectionProps> = ({ scrollTo }) => (
  <section
    id="hero"
    aria-labelledby="hero-heading"
    className="
      relative w-full min-h-[80vh] md:min-h-[100vh]
      overflow-hidden
    "
  >
    {/* SEO: Main heading for the page (visually hidden, present for crawlers) */}
    <h1 id="hero-heading" className="sr-only">
      Tomatello Ristorante — Authentic Italian Restaurant
    </h1>
    {/* Background Image */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    />

    {/* Call-to-Action Button */}
    <div
      className="
        absolute z-10
        bottom-16 left-1/2 -translate-x-1/2
        px-4
        md:bottom-24 md:left-16 md:translate-x-0
      "
    >
      <button
        onClick={() => scrollTo("contact")}
        className="
          bg-[#9c8978] text-[#252525]
          py-3 px-10 text-sm md:text-base
          uppercase tracking-widest font-semibold
          transition-all duration-300
          hover:bg-[#e5b424] hover:scale-[1.03]
        "
      >
        Order Now
      </button>
    </div>
  </section>
);

export default HeroSection;
