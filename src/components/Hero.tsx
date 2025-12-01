interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollTo }) => (
  <section
    id="hero"
    className="
      relative min-h-[55vh] md:min-h-screen pt-24 md:pt-0
      flex items-center justify-center text-center
      overflow-hidden
    "
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/traditional-italian-food-frame-background_439094-36.jpg')",
      }}
    >
      {/* Soft cinematic overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Top & bottom gradient fades */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 p-6 max-w-3xl mx-auto flex flex-col items-center">
      {/* Logo Image */}
      <img
        src="https://tomatello.it/wp-content/uploads/2025/01/Tomatello-e1737803471299.jpg"
        alt="Tomatello Logo"
        className="
          w-80
          drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]
          mb-8
        "
      />

      {/* <p
        className="
          text-white text-base md:text-xl font-light italic 
          mb-10 leading-relaxed tracking-wide
          drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]
        "
      >
        A True Taste of Italy, Crafted with Simplicity, Served with Passion.
      </p> */}

      <button
        onClick={() => scrollTo("contact")}
        className="
          bg-[#edc84b] text-[#252525]
          py-3 px-12 text-sm md:text-base
          uppercase tracking-widest font-semibold
          transition-all duration-300
          hover:bg-[#e5b424] hover:scale-[1.03]
        "
      >
        Order Now!
      </button>
    </div>
  </section>
);

export default HeroSection;
