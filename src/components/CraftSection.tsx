import SectionHeader from "./SectionHeader";
import Img1 from "../assets/Craft.png";
import Img2 from "../assets/Craft1.jpg";
import Img3 from "../assets/Craft2.jpg";
import Img4 from "../assets/Craft3.jpg";
import Img5 from "../assets/Craft4.jpg";
import Img6 from "../assets/Craft5.jpg";

const CraftSection: React.FC = () => {
  return (
    <section id="craft" className="py-36 bg-[#f6f4ef]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <SectionHeader
          title="Our Story & Craft"
          subtitle="Italian cuisine, approached with discipline and intention."
        />
        {/* Manifesto Text */}
        <div className="mt-16 max-w-3xl mx-auto space-y-8 text-neutral-700 text-[17px] leading-relaxed font-light text-center">
          <p>
            Tomatello was born from a simple belief — Italian food is not a
            trend. It is a craft.
          </p>

          <p>
            Every sauce begins at its base. Every pasta is shaped by hand. Every
            preparation honours the technique it comes from — not adapted, not
            rushed, not simplified.
          </p>

          <p>
            Technique matters. Temperature matters. Timing matters. The details
            define the dish.
          </p>

          <div className="pt-6 border-t border-neutral-300 max-w-sm mx-auto" />

          <p className="italic text-neutral-600">
            This is not commercial Italian. This is cucina — as it is meant to
            be.
          </p>
        </div>
        {/* Gallery */}
        {/* Gallery */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={Img6}
              alt=""
              className="w-full h-[420px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>

          <div className="overflow-hidden rounded-2xl mt-6 md:mt-12">
            <img
              src={Img2}
              alt=""
              className="w-full h-[300px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={Img3}
              alt=""
              className="w-full h-[460px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>

          <div className="overflow-hidden rounded-2xl mt-6">
            <img
              src={Img4}
              alt=""
              className="w-full h-[340px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>

          <div className="overflow-hidden rounded-2xl md:col-span-2">
            <img
              src={Img5}
              alt=""
              className="w-full h-[400px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
        </div>
        v
      </div>
    </section>
  );
};

export default CraftSection;
