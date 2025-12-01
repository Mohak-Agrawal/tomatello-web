import { useState } from "react";
import SectionHeader from "./SectionHeader";
import MenuItemCard from "./MenuItemCard";

interface MenuSectionProps {
  addToCart: (item: MenuItem) => void;
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: "Pizza" | "Pasta" | "Appetizer" | "Dessert" | "Drinks";
  isSignature: boolean;
  isSoldOut: boolean;
  imageUrl: string;
}

// --- MOCK DATA (Price converted to string for display, but converted to number in cart logic) ---
const MENU_DATA: MenuItem[] = [
  {
    id: 1,
    name: "Cappellacci di Burrata e Nocciole",
    description:
      "Our signature pasta: delicate cappellacci filled with creamy burrata, served with a hazelnut-infused brown butter sauce. A perfect balance of rich and savory.",
    price: "799",
    category: "Pasta",
    isSignature: true,
    isSoldOut: false,
    imageUrl:
      typeof __uploaded_files !== "undefined" &&
      __uploaded_files.find(
        (f) => f.fileName === "Cappellacci Burrata and Hazelnut.jpg"
      )
        ? `data:image/jpeg;base64,${
            __uploaded_files.find(
              (f) => f.fileName === "Cappellacci Burrata and Hazelnut.jpg"
            )?.contentBase64
          }`
        : "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 2,
    name: "Margherita D.O.P.",
    description:
      "San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil.",
    price: "499",
    category: "Pizza",
    isSignature: false,
    isSoldOut: false,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 3,
    name: "Spaghetti Carbonara",
    description:
      "Guanciale, egg yolks, Pecorino Romano cheese, and black pepper. Authentic Roman style.",
    price: "649",
    category: "Pasta",
    isSignature: false,
    isSoldOut: false,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 4,
    name: "Arancini Siciliani",
    description:
      "Crispy fried rice balls filled with rich ragù, peas, and mozzarella.",
    price: "399",
    category: "Appetizer",
    isSignature: false,
    isSoldOut: true,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 5,
    name: "Pappardelle al Ragu",
    description:
      "Wide flat pasta with a rich, slow-cooked beef ragu, simmered for eight hours.",
    price: "799",
    category: "Pasta",
    isSignature: true,
    isSoldOut: false,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 6,
    name: "Tiramisu Senza Tempo",
    description:
      "Layers of coffee-soaked ladyfingers, rich mascarpone cream, and cocoa.",
    price: "299",
    category: "Dessert",
    isSignature: false,
    isSoldOut: false,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 7,
    name: "Prosciutto e Funghi",
    description: "Mozzarella, tomato, prosciutto di Parma, and wild mushrooms.",
    price: "649",
    category: "Pizza",
    isSignature: false,
    isSoldOut: false,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 8,
    name: "Insalata Caprese",
    description:
      "Fresh bufala mozzarella, heirloom tomatoes, and basil leaves with balsamic reduction.",
    price: "399",
    category: "Appetizer",
    isSignature: false,
    isSoldOut: false,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 9,
    name: "Cannoli Siciliani",
    description:
      "Crispy fried pastry shells filled with sweet ricotta cheese, chocolate, and candied fruit.",
    price: "249",
    category: "Dessert",
    isSignature: false,
    isSoldOut: false,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
  {
    id: 10,
    name: "Chianti Classico DOCG",
    description:
      "A robust Tuscan red wine, perfect pairing for pasta and red meats.",
    price: "1999",
    category: "Drinks",
    isSignature: false,
    isSoldOut: false,
    imageUrl:
      "https://tomatello.it/wp-content/uploads/2025/01/Risotto-Cherry-Yellow-Tomatoes-and-Burrata.png",
  },
];

const MenuSection: React.FC<MenuSectionProps> = ({ addToCart }) => {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(MENU_DATA.map((item) => item.category))),
  ].sort();

  const filteredMenu = MENU_DATA.filter(
    (item) => filter === "All" || item.category === filter
  );

  return (
    <section id="menu" className="py-16 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="The Tomatello Menu"
          subtitle="A seasonal selection of pizzas, pastas, and traditional Italian classics. Click 'Add to Cart' to begin your order."
        />

        {/* Category Filter */}
        <div className="mt-6 mb-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
            py-1.5 px-3 
            text-xs uppercase tracking-wide font-medium 
            transition-all duration-150 border border-gray-300 rounded
            ${
              filter === cat
                ? "bg-[#edc84b] text-[#252525] border-[#edc84b]"
                : "bg-white text-gray-600 hover:border-[#edc84b] hover:text-[#252525]"
            }
          `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-6 border-t border-gray-200">
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
