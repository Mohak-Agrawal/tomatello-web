import SectionHeader from "./SectionHeader";
import Chef from "../assets/chef.png";

const AboutSection: React.FC = () => (
  <section id="about" className="py-28 lg:py-36 bg-[#f7f5f1] relative">
    {" "}
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        title="Our Story & Philosophy"
        subtitle="Where Italian heritage meets modern craftsmanship."
      />

      <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        {/* IMAGE LEFT */}
        <div className="w-full">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={Chef}
              alt="Tomatello Italian dining"
              className="w-full h-[360px] sm:h-[480px] lg:h-[680px] object-cover"
            />
          </div>
        </div>

        {/* TEXT RIGHT */}
        {/* TEXT RIGHT */}
        <div className="space-y-8 max-w-md">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4a536] font-medium mb-[-16px]">
              Chef
            </p>
          </div>

          <h3 className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900">
            Davide D’Ignazio
          </h3>

          <p className="text-neutral-600 leading-relaxed text-[17px]">
            With more than two decades of international experience — including
            leadership in a Michelin-starred kitchen in Rome — Chef Davide
            brings quiet precision and depth to Tomatello.
          </p>

          <p className="text-neutral-600 leading-relaxed text-[17px]">
            For him, this kitchen is a return to authentic Italian roots: fewer
            ingredients, stronger character, and absolute respect for craft.
            Each dish is guided by balance, seasonality, and intention.
          </p>

          <div className="pt-10 border-l border-[#d4a536]/30 pl-8">
            {" "}
            <p className="italic text-neutral-500 text-lg leading-relaxed">
              “Simplicity is the highest form of refinement. Let the ingredients
              speak.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
