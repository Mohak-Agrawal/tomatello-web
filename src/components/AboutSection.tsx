import SectionHeader from "./SectionHeader";

const AboutSection: React.FC = () => (
  <section id="about" className="py-20 lg:py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        title="Our Story & Philosophy"
        subtitle="Where Italian heritage meets modern craftsmanship."
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* IMAGE LEFT */}
        <div className="w-full">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://www.nw.de/_em_daten/_cache/image/1xQ3A2V3ZZcUlDa3ZQcGowOTVHZ2FNOE9nNDROZVJxRFdSQ24vY09iYzJ0NDZUT3JwSUp4SlBrMUxxMnExeHplNHFmcGtib0RvVXdkRU9pZ0xmRkR0V2NhdW04cW5ibHIwVVpjMksrVGorcWM9/250429-2011-534469137.jpg"
              alt="Tomatello Italian dining"
              className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* TEXT RIGHT */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold uppercase text-[#d4a536] tracking-widest">
            A Legacy Born in Bologna
          </h3>

          <p className="text-gray-700 leading-relaxed text-[17px]">
            Tomatello began in 1998 when the Rossi family moved from Bologna to
            bring authentic Italian flavors to a new home. Each recipe, each
            technique, and each moment in our kitchen is rooted in generations
            of tradition.
          </p>

          <p className="text-gray-700 leading-relaxed text-[17px]">
            Our philosophy is built on{" "}
            <span className="font-medium">
              simplicity, craftsmanship, and respect
            </span>
            for ingredients. We believe great Italian cooking is not
            complicated—it's honest.
          </p>

          <div className="border-l-4 border-[#d4a536] pl-5 italic text-gray-600 text-lg">
            “The fewer the ingredients, the more soul each dish must have.”
          </div>

          <ul className="space-y-3 text-gray-700 text-[17px]">
            <li className="flex gap-3">
              <span className="text-[#d4a536]">•</span> San Marzano tomatoes
              from Campania
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4a536]">•</span> DOP-certified Parmigiano
              & Pecorino
            </li>
            <li className="flex gap-3">
              <span className="text-[#d4a536]">•</span> Cold-pressed Tuscan
              olive oils
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
