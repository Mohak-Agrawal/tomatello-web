import SectionHeader from "./SectionHeader";
import Chef from "../assets/chef.png";

const AboutSection: React.FC = () => (
  <section id="about" className="py-20 lg:py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        title="Our Story & Philosophy"
        subtitle="Where Italian heritage meets modern craftsmanship."
      />

      <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* IMAGE LEFT */}
        <div className="w-full">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={Chef}
              alt="Tomatello Italian dining"
              className="w-full h-[360px] sm:h-[480px] lg:h-[680px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* TEXT RIGHT */}
        {/* TEXT RIGHT */}
        <div className="space-y-8 max-w-xl">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4a536] font-medium">
              Our Philosophy
            </p>
          </div>

          <h3 className="text-3xl lg:text-4xl font-light leading-tight text-neutral-900">
            Italian tradition,
            <br />
            refined with restraint.
          </h3>

          <p className="text-neutral-600 leading-relaxed text-[17px]">
            At Tomatello, we honour regional Italian craft with precision and
            discipline. Every plate reflects balance — flavour without excess,
            technique without noise.
          </p>

          <p className="text-neutral-600 leading-relaxed text-[17px]">
            We work with carefully sourced ingredients and time-tested methods,
            allowing simplicity to speak with confidence.
          </p>

          <div className="pt-4">
            <p className="italic text-neutral-500 text-lg">
              “The fewer the elements, the stronger the expression.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
