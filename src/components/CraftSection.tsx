import SectionHeader from "./SectionHeader";
import CraftHero from "../assets/Craft.png";

const CraftSection: React.FC = () => {
  return (
    <section id="craft" className="py-40 bg-[#f6f4ef]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Our Story & Craft"
          subtitle="Italian cuisine, approached with discipline and intention."
        />

        {/* Elegant Panel */}
        <div className="mt-28 relative bg-[#efeae2] rounded-3xl px-16 py-24 border border-neutral-300/40">
          {/* Subtle Inner Frame */}
          <div className="absolute inset-6 border border-neutral-300/30 rounded-3xl pointer-events-none" />

          {/* Decorative Header */}
          <div className="relative text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="h-px w-16 bg-neutral-400/60" />
              <span className="tracking-[0.35em] text-xs text-neutral-500 uppercase">
                Tradition
              </span>
              <div className="h-px w-16 bg-neutral-400/60" />
            </div>

            <h2 className="text-5xl font-serif text-neutral-900 tracking-wide">
              Our Craft
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 items-center relative">
            {/* Left Column */}
            <div className="space-y-12 text-neutral-700 text-sm leading-relaxed">
              <div>
                <h4 className="font-medium text-neutral-900 mb-3 tracking-wide">
                  Handmade Daily
                </h4>
                <p>
                  Dough rolled fresh each morning. Shaped by hand. Texture
                  formed through pressure and patience.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-neutral-900 mb-3 tracking-wide">
                  Measured Filling
                </h4>
                <p>
                  Pecorino folded with balance. Richness controlled. Structure
                  preserved.
                </p>
              </div>
            </div>

            {/* Center Image (Arched) */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-t-[200px] rounded-b-[28px] shadow-lg">
                <img
                  src={CraftHero}
                  alt="Artisanal raviolo preparation"
                  className="w-[380px] h-[460px] object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12 text-neutral-700 text-sm leading-relaxed">
              <div>
                <h4 className="font-medium text-neutral-900 mb-3 tracking-wide">
                  Slow Rendering
                </h4>
                <p>
                  Guanciale cooked gradually. Fat becomes flavour. Heat is
                  controlled.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-neutral-900 mb-3 tracking-wide">
                  Cultural Integrity
                </h4>
                <p>
                  Regional technique preserved. No dilution. No unnecessary
                  reinvention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;
