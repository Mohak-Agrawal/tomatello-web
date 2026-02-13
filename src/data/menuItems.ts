export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageAlt: string;
  imageUrl: string;
  tags: string[];
  category: MenuCategory;
}

// Chef’s Table
import ChefsTableVegImage from "../assets/menu/chefs-table-veg.jpeg";
import ChefsTableNonVegImage from "../assets/menu/chefs-table-non-veg.jpeg";

// Soups
import ButternutSquashSoupImage from "../assets/menu/butternut-squash-soup.jpeg";
import MinestroneSoupImage from "../assets/menu/minestrone-soup.jpeg";
import TomatoBasilSoupImage from "../assets/menu/tomato-basil-soup.jpeg";
import ZuppaDiGamberiSoupImage from "../assets/menu/zuppa-di-gamberi.jpeg";

// Antipasti & Small Plates
import AranciniAlTelefonoImage from "../assets/menu/arancini-al-telefono.jpeg";
import AvocadoBruschettaImage from "../assets/menu/avocado-bruschetta.jpeg";
import ButterGarlicPrawnImage from "../assets/menu/butter-garlic-prawn.jpeg";
import TomatoBruschettaImage from "../assets/menu/tomato-bruschetta.jpeg";
import MushroomAranciniImage from "../assets/menu/mushroom-aranchini.jpeg";
import SaffronAranciniImage from "../assets/menu/saffron-arancini.jpg";

import LambAranciniImage from "../assets/menu/lamb-arancini.jpg";

// Neapolitan Pizza
import MargheritaNapoletanaImage from "../assets/menu/margherita-napoletana.jpeg";
import BurrataEPomodoroImage from "../assets/menu/burrata-e-pomodoro.jpeg";
import DiavoloDiPolloImage from "../assets/menu/diavolo-di-pollo.jpeg";
import QuattroFormaggiImage from "../assets/menu/quattro-formaggi.jpeg";

// Signature Alla Pala Pizza
import AllaPalaMargheritaImage from "../assets/menu/alla-pala-margherita.jpeg";
import AllaPalaPestoImage from "../assets/menu/alla-pala-pesto.jpeg";
import AllaPalaPepperoniImage from "../assets/menu/alla-pala-pepperoni.jpeg";

// Chef’s Signature Pasta & Risotti
import CacioEPepeImage from "../assets/menu/cacio-e-pepe.jpeg";
import CappellacciBurrataHazelnutImage from "../assets/menu/cappellacci-burrata-hazelnut.jpeg";
import CulurgionesImage from "../assets/menu/culurgiones.jpeg";
import PrawnLinguineImage from "../assets/menu/prawn-linguine.jpeg";
import RavioloCarbonaraImage from "../assets/menu/raviolo-carbonara.jpeg";
import RisottoCherryTomatoBurrataImage from "../assets/menu/risotto-cherry-tomato-burrata.jpeg";
import RisottoLemonAsparagusImage from "../assets/menu/risotto-lemon-asparagus.jpeg";
import RisottoMushroomImage from "../assets/menu/risotto-mushroom.jpeg";
import TaglioliniTruffleImage from "../assets/menu/tagliolini-truffle.jpeg";

// Mains
import ChickenMilaneseImage from "../assets/menu/chicken-milanese.jpeg";
import GnocchiAllaSorrentinaImage from "../assets/menu/gnocchi-alla-sorrentina.jpeg";

// Salads
import CaesarSaladImage from "../assets/menu/caesar-salad.jpeg";
import CherryTomatoBurrataSaladImage from "../assets/menu/cherry-tomato-burrata-salad.jpeg";

// Sides
import ParmesanFriesImage from "../assets/menu/parmesan-fries.jpeg";

// Dessert
import TiramisuClassicoImage from "../assets/menu/tiramisu-classico.jpeg";
import TiramisuSignatureImage from "../assets/menu/tiramisu-signature.jpeg";
import ChocolateMousseImage from "../assets/menu/chocolate-mousse.jpeg";

export const MENU_ITEMS: MenuItem[] = [
  // ---------------- Chef’s Table ----------------
  {
    id: 1,
    name: "Chef’s Table – Veg",
    description:
      "A curated vegetarian tasting experience by our chef celebrating seasonal produce, handmade pasta, and refined Italian flavours. Five thoughtfully curated courses, plated and delivered with precision.",
    price: "₹1725",
    imageAlt: "Chef’s table vegetarian",
    tags: ["Tasting Menu"],
    category: "Chef’s Table",
    imageUrl: ChefsTableVegImage,
  },
  {
    id: 2,
    name: "Chef’s Table – Non Veg",
    description:
      "A curated non-vegetarian tasting experience by our chef celebrating seasonal produce, handmade pasta, and refined Italian flavours. Five thoughtfully curated courses, plated and delivered with precision",
    price: "₹1849",
    imageAlt: "Chef’s table non vegetarian",
    tags: ["Tasting Menu"],
    category: "Chef’s Table",
    imageUrl: ChefsTableNonVegImage,
  },

  // ---------------- Soups ----------------
  {
    id: 3,
    name: "Roasted Butternut Squash Soup",
    description:
      "Roasted butternut squash soup is silky, rich, and full of caramelized flavor. Slow-roasted squash blended with herbs, garlic, and a touch of cream creates a golden bowl of pure seasonal comfort, perfect for chilly evenings.",
    price: "₹349",
    imageAlt: "Butternut squash soup",
    tags: ["Vegetarian"],
    category: "Soups",
    imageUrl: ButternutSquashSoupImage,
  },
  {
    id: 4,
    name: "Minestrone Soup",
    description:
      "Traditional Italian vegetable soup with seasonal produce. This authentic recipe combines aromatic seasonal vegetables, robust tomato broth, and al dente pasta for a truly comforting experience.",
    price: "₹395",
    imageAlt: "Minestrone soup",
    tags: ["Classic"],
    category: "Soups",
    imageUrl: MinestroneSoupImage,
  },
  {
    id: 5,
    name: "Pomodoro e Basilico Soup (Tomato and Basil)",
    description: "Slow-cooked tomato soup finished with fresh basil.",
    price: "₹345",
    imageAlt: "Tomato basil soup",
    tags: ["Vegetarian"],
    category: "Soups",
    imageUrl: TomatoBasilSoupImage,
  },
  {
    id: 6,
    name: "Zuppa di Gamberi (Prawn Soup)",
    description:
      "A hearty, traditional Italian seafood stew featuring juicy prawns in a vibrant, slow-simmered tomato and herb broth.",
    price: "₹449",
    imageAlt: "Prawn soup",
    tags: ["Seafood"],
    category: "Soups",
    imageUrl: ZuppaDiGamberiSoupImage,
  },

  {
    id: 7,
    name: "Arancini al Telefono",
    description:
      "Deep fried golden, crispy rice croquette of tomato rice filled with molten mozzarella in the centre.",
    price: "₹445",
    imageAlt: "Arancini al telefono",
    tags: ["Vegetarian"],
    category: "Antipasti & Small Plates",
    imageUrl: AranciniAlTelefonoImage,
  },
  {
    id: 8,
    name: "Saffron Arancini",
    description:
      "Deep fried golden, crispy saffron-infused rice balls with a gooey cheese centre, bursting with rich flavour.",
    price: "₹445",
    imageAlt: "Saffron Arancini",
    tags: ["Vegetarian"],
    category: "Antipasti & Small Plates",
    imageUrl: SaffronAranciniImage,
  },
  {
    id: 9,
    name: " Mushroom Arancini",
    description:
      "Crispy deep fried rice balls loaded with fresh cremini, pink oyster, king oyster, cooked in stock, parmesan cheese, served with rich truffle aioli.",
    price: "₹499",
    imageAlt: "Mushroom Arancini ",
    tags: ["Vegetarian"],
    category: "Antipasti & Small Plates",
    imageUrl: MushroomAranciniImage,
  },

  {
    id: 10,
    name: "Lamb Arancini",
    description:
      "Crispy deep fried rice balls, filled with slow cooked lamb shanks combined with creamy risotto and pecorino cheese served alongside a classic tangy tomato sauce.",
    price: "₹599",
    imageAlt: "Lamb Arancini",
    tags: ["Non Vegetarian"],
    category: "Antipasti & Small Plates",
    imageUrl: LambAranciniImage,
  },

  // ---------------- Neapolitan Pizza ----------------
  {
    id: 11,
    name: "Margherita Napoletana",
    description: "San Marzano tomato, mozzarella, basil.",
    price: "₹499",
    imageAlt: "Margherita pizza",
    tags: ["Classic"],
    category: "Neapolitan Pizza",
    imageUrl: MargheritaNapoletanaImage,
  },
  {
    id: 12,
    name: "Burrata e Pomodoro",
    description: "Tomato base topped with fresh burrata.",
    price: "₹699",
    imageAlt: "Burrata pizza",
    tags: ["Signature"],
    category: "Neapolitan Pizza",
    imageUrl: BurrataEPomodoroImage,
  },
  {
    id: 13,
    name: "Diavolo di Pollo",
    description: "Spicy chicken with chili flakes and mozzarella.",
    price: "₹649",
    imageAlt: "Spicy chicken pizza",
    tags: ["Spicy"],
    category: "Neapolitan Pizza",
    imageUrl: DiavoloDiPolloImage,
  },
  {
    id: 14,
    name: "Quattro Formaggi",
    description: "Four-cheese blend with rich creamy texture.",
    price: "₹699",
    imageAlt: "Four cheese pizza",
    tags: ["Cheese"],
    category: "Neapolitan Pizza",
    imageUrl: QuattroFormaggiImage,
  },

  // ---------------- Signature Alla Pala Pizza ----------------
  {
    id: 15,
    name: "Alla Pala Margherita",
    description: "Roman-style rectangular pizza with tomato and mozzarella.",
    price: "₹749",
    imageAlt: "Alla pala margherita",
    tags: ["Roman Style"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaMargheritaImage,
  },
  {
    id: 16,
    name: "Alla Pala Pesto",
    description: "Fresh basil pesto with mozzarella.",
    price: "₹799",
    imageAlt: "Alla pala pesto",
    tags: ["Vegetarian"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaPestoImage,
  },
  {
    id: 17,
    name: "Alla Pala Pepperoni",
    description: "Classic pepperoni with tomato and mozzarella.",
    price: "₹849",
    imageAlt: "Alla pala pepperoni",
    tags: ["Meat"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaPepperoniImage,
  },

  // ---------------- Chef’s Signature Pasta & Risotti ----------------
  {
    id: 101,
    name: "Cacio e Pepe",
    description:
      "Roman classic with Pecorino Romano and freshly cracked black pepper.",
    price: "₹649",
    imageAlt: "Cacio e Pepe pasta",
    tags: ["Pasta", "Classic"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: CacioEPepeImage,
  },
  {
    id: 102,
    name: "Cappellacci Burrata & Hazelnut",
    description:
      "Hand-folded cappellacci filled with creamy burrata, finished with toasted hazelnut butter.",
    price: "₹799",
    imageAlt: "Cappellacci with burrata and hazelnut",
    tags: ["Signature", "Pasta"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: CappellacciBurrataHazelnutImage,
  },
  {
    id: 103,
    name: "Culurgiones",
    description:
      "Traditional Sardinian stuffed pasta with delicate filling and light butter sauce.",
    price: "₹749",
    imageAlt: "Culurgiones pasta",
    tags: ["Pasta"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: CulurgionesImage,
  },
  {
    id: 104,
    name: "Prawn Linguine",
    description:
      "Linguine tossed with prawns, garlic, white wine, and fresh herbs.",
    price: "₹849",
    imageAlt: "Prawn linguine pasta",
    tags: ["Seafood", "Pasta"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: PrawnLinguineImage,
  },
  {
    id: 105,
    name: "Raviolo Carbonara",
    description:
      "Large stuffed raviolo inspired by classic Roman carbonara flavors.",
    price: "₹799",
    imageAlt: "Raviolo carbonara",
    tags: ["Pasta", "Signature"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: RavioloCarbonaraImage,
  },
  {
    id: 106,
    name: "Risotto Cherry Tomato & Burrata",
    description:
      "Creamy risotto finished with cherry tomatoes and fresh burrata.",
    price: "₹849",
    imageAlt: "Cherry tomato burrata risotto",
    tags: ["Risotto", "Signature"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: RisottoCherryTomatoBurrataImage,
  },
  {
    id: 107,
    name: "Risotto Lemon Asparagus",
    description:
      "Arborio rice slow-cooked with vegetable stock, lemon zest, and fresh asparagus.",
    price: "₹799",
    imageAlt: "Lemon asparagus risotto",
    tags: ["Risotto"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: RisottoLemonAsparagusImage,
  },
  {
    id: 108,
    name: "Risotto Mushroom",
    description: "Creamy risotto with wild mushrooms, parmesan, and thyme.",
    price: "₹799",
    imageAlt: "Mushroom risotto",
    tags: ["Risotto"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: RisottoMushroomImage,
  },
  {
    id: 109,
    name: "Tagliolini Truffle",
    description:
      "Fresh tagliolini finished with truffle butter and aged parmesan.",
    price: "₹999",
    imageAlt: "Truffle tagliolini pasta",
    tags: ["Pasta", "Truffle", "Signature"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: TaglioliniTruffleImage,
  },

  // ---------------- Mains ----------------
  {
    id: 24,
    name: "Chicken Milanese",
    description: "Crispy breaded chicken with lemon and greens.",
    price: "₹899",
    imageAlt: "Chicken Milanese",
    tags: ["Main Course"],
    category: "Mains",
    imageUrl: ChickenMilaneseImage,
  },
  {
    id: 25,
    name: "Gnocchi alla Sorrentina",
    description: "Baked gnocchi with tomato sauce and mozzarella.",
    price: "₹799",
    imageAlt: "Gnocchi",
    tags: ["Vegetarian"],
    category: "Mains",
    imageUrl: GnocchiAllaSorrentinaImage,
  },

  // ---------------- Salads ----------------
  {
    id: 26,
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons.",
    price: "₹399",
    imageAlt: "Caesar salad",
    tags: ["Classic"],
    category: "Salads",
    imageUrl: CaesarSaladImage,
  },
  {
    id: 27,
    name: "Cherry Tomato Burrata Salad",
    description: "Fresh burrata with cherry tomatoes and basil.",
    price: "₹549",
    imageAlt: "Burrata salad",
    tags: ["Vegetarian"],
    category: "Salads",
    imageUrl: CherryTomatoBurrataSaladImage,
  },

  // ---------------- Sides ----------------
  {
    id: 28,
    name: "Parmesan Fries",
    description: "Crispy fries tossed in parmesan and herbs.",
    price: "₹299",
    imageAlt: "Parmesan fries",
    tags: ["Side"],
    category: "Sides",
    imageUrl: ParmesanFriesImage,
  },

  // ---------------- Dessert ----------------
  {
    id: 29,
    name: "Tiramisù",
    description:
      "Espresso-soaked ladyfingers layered with mascarpone cream and finished with cocoa dust.",
    price: "₹549",
    imageAlt: "Tiramisu",
    tags: ["Classic", "Italian"],
    category: "Dessert",
    imageUrl: TiramisuClassicoImage,
  },

  {
    id: 30,
    name: "Chocolate Mousse",
    description:
      "Rich, airy dark chocolate mousse finished with a delicate cocoa glaze.",
    price: "₹329",
    imageAlt: "Chocolate mousse",
    tags: ["Chocolate"],
    category: "Dessert",
    imageUrl: ChocolateMousseImage,
  },
];

export const MENU_CATEGORIES = [
  "Chef’s Table",
  "Soups",
  "Antipasti & Small Plates",
  "Neapolitan Pizza",
  "Signature Alla Pala Pizza",
  "Chef’s Signature Pasta & Risotti",
  "Mains",
  "Salads",
  "Sides",
  "Dessert",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];
