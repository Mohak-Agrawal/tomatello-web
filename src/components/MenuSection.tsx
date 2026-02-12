import { useState } from "react";
import SectionHeader from "./SectionHeader";
import MenuItemCard from "./MenuItemCard";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuItems";

interface MenuSectionProps {
  addToCart: (item: MenuItem) => void;
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category:
    | "Chef’s Table"
    | "Soups"
    | "Antipasti & Small Plates"
    | "Neapolitan Pizza"
    | "Signature Alla Pala Pizza"
    | "Pastas"
    | "Chef’s Signature Pasta & Risotti"
    | "Mains"
    | "Salads"
    | "Sides"
    | "Dessert";
  isSignature: boolean;
  isSoldOut: boolean;
  imageUrl: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ addToCart }) => {
  const [filter, setFilter] = useState<string>("All");

  const filteredMenu = MENU_ITEMS.filter(
    (item) => filter === "All" || item.category === filter,
  );

  return (
    <section id="menu" className="pb-4 md:pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title=" Menu"
          // subtitle="A seasonal selection of pizzas, pastas, and traditional Italian classics. Click 'Add to Cart' to begin your order."
        />

        {/* Category Filter */}
        <div className=" mb-14">
          <div className="flex flex-wrap gap-x-10 gap-y-6 justify-center">
            {/* All */}
            <button
              onClick={() => setFilter("All")}
              className={`relative text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                filter === "All"
                  ? "text-[#252525]"
                  : "text-gray-400 hover:text-[#252525]"
              }`}
            >
              All
              {filter === "All" && (
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#9c8978]" />
              )}
            </button>

            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  filter === cat
                    ? "text-[#252525]"
                    : "text-gray-400 hover:text-[#252525]"
                }`}
              >
                {cat}
                {filter === cat && (
                  <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#9c8978]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 lg:gap-x-16 w-full mt-10 md:mt-12">
          {" "}
          {filteredMenu.map((item) => (
            <MenuItemCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </ul>

        {filteredMenu.length === 0 && (
          <p className="text-center text-base italic text-gray-500 mt-8">
            No items in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
