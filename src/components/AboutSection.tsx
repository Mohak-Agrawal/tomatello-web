import SectionHeader from "./SectionHeader";
import Chef from "../assets/chef.png";

const AboutSection: React.FC = () => (
  <section id="about" className="py-32 lg:py-40 bg-[#f7f5f1] relative">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        title="Our Story & Philosophy"
        subtitle="Where Italian heritage meets modern craftsmanship."
      />

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
        {/* IMAGE LEFT */}
        <div className="w-full">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={Chef}
              alt="Chef Davide D’Ignazio"
              className="w-full h-[380px] sm:h-[500px] lg:h-[700px] object-cover"
            />
          </div>
        </div>

        {/* TEXT RIGHT */}
        <div className="space-y-10 max-w-sm">
          <p className="text-[12px] uppercase tracking-[0.5em] text-neutral-400 mb-[-18px]">
            CHEF
          </p>

          <h3 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight">
            Davide D’Ignazio
          </h3>

          <div className="space-y-6">
            <p className="text-[16px] text-neutral-600 leading-relaxed font-light">
              With more than two decades of international experience — including
              leading a Michelin-starred kitchen in Rome — Chef Davide brings
              quiet precision and depth to Tomatello.
            </p>

            <p className="text-[16px] text-neutral-600 leading-relaxed font-light">
              For him, this kitchen is a return to authentic Italian roots:
              fewer ingredients, stronger character, and absolute respect for
              craft. Each dish is guided by balance, seasonality, and intention.
            </p>
          </div>

          <div className="pt-8 border-l border-neutral-300 pl-6">
            <p className="italic text-neutral-500 text-[17px] leading-relaxed font-light">
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
