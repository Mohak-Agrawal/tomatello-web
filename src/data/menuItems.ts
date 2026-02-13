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
import BoxOfThreeArancini from "../assets/menu/BoxOfThreeArancini.jpeg";

// Neapolitan Pizza
import MargheritaNapoletanaImage from "../assets/menu/margherita-napoletana.png";
import BurrataEPomodoroImage from "../assets/menu/burrata-e-pomodoro.jpeg";
import DiavoloDiPolloImage from "../assets/menu/diavolo-di-pollo.jpeg";
import QuattroFormaggiImage from "../assets/menu/quattro-formaggi.jpeg";
import MargherinaraPestoNapoletanaImage from "../assets/menu/margherinara-pesto.jpeg";
import NapoliTruffleFungiNapoletanaImage from "../assets/menu//margherita-napoletana.png";
import ClassicPepperoniNapoletanaPizzaImage from "../assets/menu/pepperoni-napoletana.jpeg";

// Signature Alla Pala Pizza
import AllaPalaMargheritaImage from "../assets/menu/alla-pala-margherita.jpeg";
import AllaPalaFunghiImage from "../assets/menu/alla-pala-funghi.jpeg";
import AllaPalaPestoImage from "../assets/menu/alla-pala-pesto.jpeg";
import AllaPalaQuattroFormaggiImage from "../assets/menu/alla-pala-quattro-formaggi.jpeg";
import AllaPalaPepperoniImage from "../assets/menu/alla-pala-pepperoni.jpeg";
import AllaPalaChickenPepperoniImage from "../assets/menu/alla-pala-chicken-pepporoni.jpg";
import AllaPalaProsciuttoImage from "../assets/menu/alla-pala-prosciutto.png";

//Pasta
import ArrabiataImage from "../assets/menu/penne-arrabiata.jpeg";
import AglioEOlioImage from "../assets/menu/aglio-e-olio.png";
import FettucciniAlfredoImage from "../assets/menu/fettuchini-alfredo.png";
import FusilliPestoImage from "../assets/menu/fusili-pesto.jpeg";
import RigatoniRosaImage from "../assets/menu/rose-rigatoni.jpeg";
import RavioliChickenImage from "../assets/menu/ravioli-chicken.png";
import FettuccineLambShankImage from "../assets/menu/fettuccine-lamb-shank.png";

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
import MelanzanaAllaParmigianaImage from "../assets/menu/melanzana-alla-parmigiana.jpeg";

// Salads
import CaesarSaladImage from "../assets/menu/caesar-salad.jpeg";
import CherryTomatoBurrataSaladImage from "../assets/menu/cherry-tomato-burrata-salad.jpeg";

// Sides
import ParmesanFriesImage from "../assets/menu/parmesan-fries.jpeg";

// Dessert
import TiramisuClassicoImage from "../assets/menu/tiramisu-classico.jpeg";
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
  // ---------------- Antipasti ----------------
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
  {
    id: 11,
    name: "Classic Soaked Tomato Bruschetta",
    description:
      " Juicy chopped tomatoes and fresh basil served on toasted bread that naturally absorbs all the flavour. Expect a rich, soaked, flavour-forward bite—no crunch, just pure tomato and herb intensity in every layer. ",
    price: "₹349",
    imageAlt: "Tomatobruschetta",
    tags: ["Vegetarian"],
    category: "Antipasti & Small Plates",
    imageUrl: TomatoBruschettaImage,
  },
  {
    id: 12,
    name: "Arancini Box of 3",
    description:
      "A curated tasting box of our signature arancini — one Saffron, one Mushroom, and one Al telefono. Crispy on the outside, rich and comforting inside.",
    price: "₹449",
    imageAlt: "aranciniboxof3",
    tags: ["Vegetarian"],
    category: "Antipasti & Small Plates",
    imageUrl: BoxOfThreeArancini,
  },
  {
    id: 13,
    name: "Avocado Bruschetta",
    description:
      " Creamy goat cheese and sliced avocado on toasted sourdough bread..",
    price: "₹595",
    imageAlt: "Avocado bruschetta",
    tags: ["Vegetarian"],
    category: "Antipasti & Small Plates",
    imageUrl: AvocadoBruschettaImage,
  },
  {
    id: 14,
    name: "Mushroom Bruschetta",
    description:
      " Crispy deep fried rice balls loaded with fresh cremini, pink oyster, king oyster, cooked in stock, parmesan cheese, served with rich truffle aioli.",
    price: "₹499",
    imageAlt: "Mushroom bruschetta",
    tags: ["Vegetarian"],
    category: "Antipasti & Small Plates",
    imageUrl: AvocadoBruschettaImage,
  },
  {
    id: 15,
    name: "Butter Garlic Prawn",
    description: "Succulent prawns sautéed in garlic butter.",
    price: "₹699",
    imageAlt: "Butter garlic prawn",
    tags: ["Seafood"],
    category: "Antipasti & Small Plates",
    imageUrl: ButterGarlicPrawnImage,
  },
  // ---------------- Neapolitan Pizza ----------------
  {
    id: 16,
    name: "Classic Margherita Napoletana",
    description:
      "Soft, airy Neapolitan crust topped with San Marzano-style tomatoes, mozzarella & fresh basil.",
    price: "₹595",
    imageAlt: "Classic Margherita pizza",
    tags: ["Classic"],
    category: "Neapolitan Pizza",
    imageUrl: MargheritaNapoletanaImage,
  },
  {
    id: 17,
    name: "Burrata e Pomodoro",
    description:
      "Neapolitan pizza with San Marzano tomato sauce and mozzarella, finished with fresh burrata added post-bake, basil and extra virgin olive oil.",
    price: "₹949",
    imageAlt: "Burrata pizza",
    tags: ["Signature"],
    category: "Neapolitan Pizza",
    imageUrl: BurrataEPomodoroImage,
  },
  {
    id: 18,
    name: "Margherinara Pesto Napoletana",
    description:
      "A gourmet variation combining elements of both the Margherita and Marinara pizzas. San Marzano tomatoes, oregano flavored cherry tomatoes, fresh Mozzarella Cheese, grana Padano, Basil with Pesto.",
    price: "₹899",
    imageAlt: "Margherinara Pesto Napoletana",
    tags: ["Signature"],
    category: "Neapolitan Pizza",
    imageUrl: MargherinaraPestoNapoletanaImage,
  },
  {
    id: 19,
    name: "Napoli Truffle Fungi",
    description:
      "Slow cooked wild mushroom ragu, fresh Mozzarella Cheese, fresh herbs with truffle oil, Extra virgin olive oil.",
    price: "₹875",
    imageAlt: "Napoli Truffle Fungi Napoletana Pizza",
    tags: ["Signature"],
    category: "Neapolitan Pizza",
    imageUrl: NapoliTruffleFungiNapoletanaImage,
  },
  {
    id: 20,
    name: "Diavolo di Pollo",
    description:
      "San Marzano tomatoes, spicy Chicken Salami, Red paprika slice for extra heat, fresh Mozzarella Cheese, fresh Italian Basil, Extra virgin olive oil.",
    price: "₹859",
    imageAlt: "Spicy chicken pizza",
    tags: ["Spicy"],
    category: "Neapolitan Pizza",
    imageUrl: DiavoloDiPolloImage,
  },
  {
    id: 21,
    name: "Classic Pepperoni Napoletana Pizza",
    description:
      "San Marzano tomatoes, Tender pork pepperoni, fresh Mozzarella Cheese, fresh Italian Basil, Extra virgin olive oil.",
    price: "₹1149",
    imageAlt: "Classic Pepperoni Napoletana Pizza",
    tags: ["Spicy"],
    category: "Neapolitan Pizza",
    imageUrl: ClassicPepperoniNapoletanaPizzaImage,
  },
  {
    id: 22,
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
    id: 23,
    name: "Classic Margherita Pizza Alla Pala",
    description:
      "A Roman-style, long rectangular pizza with crisp crust and soft center, layered with fresh tomato sauce, creamy mozzarella, and fresh basil.",
    price: "₹759",
    imageAlt: "Classic Margherita Pizza Alla Pala",
    tags: ["Roman Style"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaMargheritaImage,
  },
  {
    id: 24,
    name: "Pizza Alla Pala Al Funghi",
    description:
      "Roman-style, stone-baked pizza with a crisp base, topped with sautéed mushrooms, mozzarella, and a hint of truffle oil.",
    price: "₹799",
    imageAlt: "Pizza Alla Pala Al Funghi",
    tags: ["Vegetarian"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaFunghiImage,
  },
  {
    id: 25,
    name: "Basil Pesto & Creamy Burrata Pizza Alla Pala",
    description:
      "Roman-style pizza with a crispy base, topped with fresh basil pesto, creamy burrata, and basil leaves.",
    price: "₹1049",
    imageAlt: "Basil Pesto & Creamy Burrata Pizza Alla Pala",
    tags: ["Vegetarian"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaPestoImage,
  },
  {
    id: 26,
    name: "Pizza Alla Pala Quattro Formaggi",
    description:
      "Crispy Roman-style pizza topped with a decadent blend of mozzarella, smoky Scamorza, nutty Parmigiano, and creamy Brie. Each bite is rich, melty, and irresistibly cheesy.",
    price: "₹1095",
    imageAlt: "Pizza Alla Pala Quattro Formaggi",
    tags: ["Vegetarian"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaQuattroFormaggiImage,
  },
  {
    id: 27,
    name: "Pizza Alla Pala Al Pepperoni",
    description:
      "A Roman-style crust baked to airy perfection, topped with tomato sauce, melted mozzarella, and slices of spicy pepperoni.",
    price: "₹1165",
    imageAlt: "Pizza Alla Pala Al Pepperoni",
    tags: ["Meat"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaPepperoniImage,
  },
  {
    id: 28,
    name: "Pizza Alla Pala Al Chicken Pepperoni",
    description:
      "Roman-style long rectangular pizza with San Marzano tomato sauce, chicken pepperoni, and melted mozzarella.",
    price: "₹945",
    imageAlt: "Pizza Alla Pala Al Chicken Pepperoni",
    tags: ["Meat"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaChickenPepperoniImage,
  },
  {
    id: 29,
    name: "Goat Cheese & Prosciutto Pizza Alla Pala",
    description:
      "Roman-style pizza with a crisp, light base loaded with tangy goat cheese, prosciutto, and fresh rocket leaves.",
    price: "₹1399",
    imageAlt: "Goat Cheese & Prosciutto Pizza Alla Pala",
    tags: ["Meat"],
    category: "Signature Alla Pala Pizza",
    imageUrl: AllaPalaProsciuttoImage,
  },

  // ---------------- Pasta ----------------

  {
    id: 30,
    name: "Penne Arrabbiata",
    description:
      " Classic Roman penne pasta in a spicy tomato-garlic sauce, made with San Marzano tomatoes, chilli flakes, and extra virgin olive oil. Finished with fresh parsley and a touch of grated parmesan.",
    price: "₹549",
    imageAlt: " Penne Arrabbiata",
    tags: ["Pasta", "Classic"],
    category: "Pasta",
    imageUrl: ArrabiataImage,
  },
  {
    id: 31,
    name: "Spaghetti Aglio E Olio",
    description:
      " Classic Italian pasta, made with garlic, olive oil, and a touch of chilli for subtle heat.",
    price: "₹549",
    imageAlt: "Spaghetti Aglio E Olio",
    tags: ["Pasta", "Classic"],
    category: "Pasta",
    imageUrl: AglioEOlioImage,
  },
  {
    id: 32,
    name: " Fettuccini Alfredo ",
    description:
      "Long flat pasta tossed in a silky, creamy white sauce made with butter, cream and aged Parmigiano cheese.",
    price: "₹595",
    imageAlt: " Fettuccini Alfredo",
    tags: ["Pasta", "Classic"],
    category: "Pasta",
    imageUrl: FettucciniAlfredoImage,
  },
  {
    id: 33,
    name: " Fusilli Pesto Genovese ",
    description:
      "Spiral-shaped pasta tossed in our house-made Genovese basil pesto with pine nuts, garlic, parmesan cheese and extra virgin olive oil.",
    price: "₹595",
    imageAlt: " Fusilli Pesto Genovese ",
    tags: ["Pasta", "Classic"],
    category: "Pasta",
    imageUrl: FusilliPestoImage,
  },
  {
    id: 34,
    name: " Rigatoni Rosa ",
    description:
      "Tube-shaped pasta tossed in a rich, creamy tomato-rosa (pink) sauce - a perfect red sauce + white sauce pasta blend with parmesan and Italian herbs.",
    price: "₹599",
    imageAlt: " Rigatoni Rosa ",
    tags: ["Pasta", "Classic"],
    category: "Pasta",
    imageUrl: RigatoniRosaImage,
  },
  {
    id: 35,
    name: "Ravioli Chicken With Rustic Contadina Sauce",
    description:
      "Square shaped pasta pockets stuffed with chicken bourguignon. Served with a rustic, spicy tomato Contadina sauce and diced potatoes.",
    price: "₹745",
    imageAlt: " Ravioli Chicken With Rustic Contadina Sauce ",
    tags: ["Pasta", "Classic"],
    category: "Pasta",
    imageUrl: RavioliChickenImage,
  },
  {
    id: 36,
    name: " Fettuccine Lamb Shank ",
    description:
      "Handmade long, flat and thick noodle pasta with 24h slow cooked lamb shank and pecorino cheese.",
    price: "₹790",
    imageAlt: " Fettuccine Lamb Shank ",
    tags: ["Pasta", "Classic"],
    category: "Pasta",
    imageUrl: FettuccineLambShankImage,
  },

  // ---------------- Chef’s Signature Pasta & Risotti ----------------
  {
    id: 37,
    name: "Cacio e Pepe",
    description:
      "Not your usual creamy white sauce pasta. Cacio e Pepe uses Pecorino cheese and cracked black pepper to create a natural creaminess — bold, salty, and perfectly balanced. Marked non-veg only because of the traditional cheese; there’s no meat in it. .",
    price: "₹899",
    imageAlt: "Cacio e Pepe pasta",
    tags: ["Pasta", "Classic"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: CacioEPepeImage,
  },
  {
    id: 38,
    name: "Cappellacci Burrata & Hazelnut",
    description:
      "Handmade pasta pockets filled with creamy burrata and toasted hazelnut butter sauce. Must-try for lovers of fine Italian cuisine.",
    price: "₹845",
    imageAlt: "Cappellacci with burrata and hazelnut",
    tags: ["Signature", "Pasta"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: CappellacciBurrataHazelnutImage,
  },
  {
    id: 39,
    name: "Culurgiones (Sardinia Region)",
    description:
      "Handmade Sardinian pasta pockets, filled with mashed potato, pecorino, lemon zest, and mint, served with nutty, aromatic burnt butter sage sauce.",
    price: "₹945",
    imageAlt: "Culurgiones pasta",
    tags: ["Pasta"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: CulurgionesImage,
  },
  {
    id: 40,
    name: "Linguine Prawn",
    description:
      "For seafood lovers - classic Italian long, flat strand pasta with prawns, cherry tomatoes, garlic and seafood sauce.",
    price: "₹945",
    imageAlt: "Prawn linguine pasta",
    tags: ["Seafood", "Pasta"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: PrawnLinguineImage,
  },
  {
    id: 41,
    name: "Raviolo Carbonara (Lazio Region )",
    description:
      " A single, large raviolo filled with Pecorino fondue, crispy guanciale, and a luscious egg yolk sauce, delivering a rich, creamy carbonara experience. Guanciale is an Italian cured pork jowl prized for rich flavour and velvety texture.",
    price: "₹1199",
    imageAlt: "Raviolo carbonara",
    tags: ["Pasta", "Signature"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: RavioloCarbonaraImage,
  },
  {
    id: 42,
    name: "Risotto Cherry Yellow Tomato & Burrata",
    description:
      " Creamy Arborio rice slow-cooked with  yellow cherry tomatoes, fresh basil, and a drizzle of EVOO, served with whole of fresh Burrata.",
    price: "₹890",
    imageAlt: "Cherry tomato yellow burrata risotto",
    tags: ["Risotto", "Signature"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: RisottoCherryTomatoBurrataImage,
  },
  {
    id: 43,
    name: "Risotto Asparagus & Scamorza Smoked cheese",
    description:
      " Creamy Italian rice dish slowly cooked in broth infused with lemon asparagus, smoked scamorza cheese.",
    price: "₹749",
    imageAlt: " Risotto Asparagus & Scamorza Smoked cheese ",
    tags: ["Risotto"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: RisottoLemonAsparagusImage,
  },
  {
    id: 44,
    name: "Risotto Mushroom",
    description:
      " Italian rice cooked in broth loaded with Shroomery mushrooms selection, butter and parmesan.",
    price: "₹690",
    imageAlt: "Mushroom risotto",
    tags: ["Risotto"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: RisottoMushroomImage,
  },
  {
    id: 45,
    name: "Tagliolini Truffle",
    description:
      " Handmade thin, flat strands of pasta, rich butter truffle sauce, and freshly shaved truffles.",
    price: "₹2150",
    imageAlt: "Truffle tagliolini pasta",
    tags: ["Pasta", "Truffle", "Signature"],
    category: "Chef’s Signature Pasta & Risotti",
    imageUrl: TaglioliniTruffleImage,
  },

  // ---------------- Mains ----------------
  {
    id: 46,
    name: "Chicken Milanese",
    description:
      " Savour our golden, crispy chicken breast, breaded with parmesan cheese and pan-fried to perfection. Served with a vibrant salsa of Kalamata olives and capers, accompanied by a fresh rocket salad, this dish delivers the classic, flavourful taste of milan.",
    price: "₹890",
    imageAlt: "Chicken Milanese",
    tags: ["Main Course"],
    category: "Mains",
    imageUrl: ChickenMilaneseImage,
  },
  {
    id: 47,
    name: "Gnocchi alla Sorrentina (Amalfi Coast)",
    description:
      "Amalfi coast. Soft and bite sized handcrafted pieces of pasta made from potato in tomato sauce with Mozzarella and basil.",
    price: "₹690",
    imageAlt: "Gnocchi alla Sorrentina",
    tags: ["Vegetarian"],
    category: "Mains",
    imageUrl: GnocchiAllaSorrentinaImage,
  },
  {
    id: 48,
    name: "Gnocchi alla Puttanesca (add on anchovies)",
    description:
      " Soft potato gnocchi tossed in a bold, spicy Neapolitan tomato sauce with olives, capers, garlic, chilli, and oregano.",
    price: "₹690",
    imageAlt: "Gnocchi alla Puttanesca (add on anchovies)",
    tags: ["Vegetarian"],
    category: "Mains",
    imageUrl: GnocchiAllaSorrentinaImage,
  },
  {
    id: 49,
    name: "Melanzana Alla Parmigiana",
    description:
      " Layers of pan fried eggplant baked with a san marzano tomato sauce, basil and a blend of parmigiano reggiano and Mozzarella.",
    price: "₹790",
    imageAlt: " Melanzana Alla Parmigiana ",
    tags: ["Vegetarian"],
    category: "Mains",
    imageUrl: MelanzanaAllaParmigianaImage,
  },
  // ---------------- Salads ----------------
  {
    id: 50,
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce coated in a classic creamy Caesar dressing, topped with shaved Parmesan and toasted sourdough croutons for crunch.",
    price: "₹489",
    imageAlt: "Caesar salad",
    tags: ["Classic"],
    category: "Salads",
    imageUrl: CaesarSaladImage,
  },
  {
    id: 51,
    name: "Cherry Tomato Burrata Salad",
    description:
      "Soft, milky burrata served with red/yellow cherry tomatoes, fresh basil, and a drizzle of EVOO.",
    price: "₹745",
    imageAlt: "Burrata salad",
    tags: ["Vegetarian"],
    category: "Salads",
    imageUrl: CherryTomatoBurrataSaladImage,
  },

  // ---------------- Sides ----------------
  {
    id: 52,
    name: "Parmesan Fries",
    description: "Crispy fries tossed in parmesan and herbs.",
    price: "₹299",
    imageAlt: "Parmesan fries",
    tags: ["Side"],
    category: "Sides",
    imageUrl: ParmesanFriesImage,
  },
  {
    id: 53,
    name: " Roast Potatoes ",
    description:
      " Crispy golden potatoes roasted with olive oil, garlic, and herbs.",
    price: "₹299",
    imageAlt: " Roast Potatoes ",
    tags: ["Side"],
    category: "Sides",
    imageUrl: ParmesanFriesImage,
  },

  // ---------------- Dessert ----------------
  {
    id: 54,
    name: "Tiramisù",
    description:
      " An authentic Italian masterpiece featuring layers of espresso-soaked ladyfingers, velvety mascarpone cream, and a generous dusting of premium cocoa powder.",
    price: "₹545",
    imageAlt: "Tiramisu",
    tags: ["Classic", "Italian"],
    category: "Dessert",
    imageUrl: TiramisuClassicoImage,
  },
  {
    id: 55,
    name: "Mousse al Cioccolato",
    description:
      " Italian-style chocolate mousse made with 55% dark Callebaut Belgian chocolate, whipped to a smooth, airy texture for a deep, balanced cocoa finish.",
    price: "₹349",
    imageAlt: " Mousse al Cioccolato ",
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
  "Pasta",
  "Chef’s Signature Pasta & Risotti",
  "Mains",
  "Salads",
  "Sides",
  "Dessert",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];
