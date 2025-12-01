export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageAlt: string;
  tags: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Spaghetti Pomodoro",
    description:
      "Freshly milled pasta tossed in slow-cooked tomato sauce and basil.",
    price: "₹16.00",
    imageAlt: "Spaghetti with tomato sauce",
    tags: ["Pasta", "Classic"],
  },
  {
    id: 2,
    name: "Gnocchi al Pesto",
    description: "Potato gnocchi with basil pesto and toasted pine nuts.",
    price: "₹18.50",
    imageAlt: "Gnocchi with green pesto",
    tags: ["Vegetarian"],
  },
  {
    id: 3,
    name: "Tiramisù Classico",
    description:
      "Espresso-soaked ladyfingers layered with mascarpone and cocoa.",
    price: "₹9.00",
    imageAlt: "Tiramisu dessert",
    tags: ["Dessert"],
  },
];
