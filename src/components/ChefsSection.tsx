import SectionHeader from "./SectionHeader";

interface Chef {
  id: number;
  name: string;
  title: string;
  bio: string;
  specialty: string;
  imageUrl: string;
}

const CHEFS_DATA: Chef[] = [
  {
    id: 1,
    name: "Chef Alessandro Rossi",
    title: "Executive Chef",
    specialty: "Northern Italian Pasta",
    bio: "Hailing from Bologna, Chef Rossi brings over 30 years of expertise in classic Italian cooking, focusing on handmade pasta techniques.",
    imageUrl: "https://placehold.co/200x200/edc84b/252525?text=ROSSI",
  },
  {
    id: 2,
    name: "Chef Sofia Gallo",
    title: "Head Baker & Pizzaiola",
    specialty: "Neapolitan Pizza & Bread",
    bio: "Sofia mastered the art of sourdough and wood-fired ovens in Naples. Her crusts are legendary for their light, airy structure.",
    imageUrl: "https://placehold.co/200x200/f7f2e9/edc84b?text=GALLO",
  },
  {
    id: 3,
    name: "Chef Marco Conti",
    title: "Pastry Chef",
    specialty: "Classic Italian Desserts",
    bio: "Marco is responsible for our decadent desserts, combining modern artistry with timeless recipes passed down from his grandmother.",
    imageUrl: "https://placehold.co/200x200/edc84b/252525?text=CONTI",
  },
  {
    id: 4,
    name: "Chef Isabella Ricci",
    title: "Sous Chef & Sourcing",
    specialty: "Local & Seasonal Ingredients",
    bio: "Isabella manages our supply chain, ensuring every vegetable and herb is sourced sustainably and locally, maintaining peak freshness.",
    imageUrl: "https://placehold.co/200x200/f7f2e9/edc84b?text=RICCI",
  },
];

const ChefsSection: React.FC = () => {
  const ChefCard: React.FC<{ chef: Chef }> = ({ chef }) => (
    <div
      className="
        flex flex-col items-center p-6 rounded-lg
        bg-white border border-gray-200/70 
        hover:border-[#edc84b] transition-all duration-300
      "
    >
      <img
        src={chef.imageUrl}
        alt={chef.name}
        className="
          w-32 h-32 object-cover rounded-full 
          border border-gray-300/70 mb-4
        "
        loading="lazy"
      />

      <h3 className="text-lg font-semibold text-[#252525] tracking-wide text-center">
        {chef.name}
      </h3>

      <p className="text-sm italic text-[#edc84b] mt-1 text-center">
        {chef.title}
      </p>

      <p className="text-xs text-gray-600 mt-2 mb-3 text-center">
        Specialty: {chef.specialty}
      </p>

      <p className="text-sm text-gray-700 font-light leading-relaxed text-center">
        {chef.bio}
      </p>
    </div>
  );

  return (
    <section id="chefs" className="py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Meet Our Culinary Team"
          subtitle="Masters of Italian cuisine, blending tradition with modern precision."
        />

        <div
          className="
            mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-10
          "
        >
          {CHEFS_DATA.map((chef) => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
