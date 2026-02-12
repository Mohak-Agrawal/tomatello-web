import { useCallback, useEffect, useRef, useState } from "react";
import AboutSection from "../components/AboutSection";
import CartDrawer from "../components/CartDrawer";
import ChefsSection from "../components/ChefsSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Navbar from "../components/Navbar";
import TestimonialsSection from "../components/TestimonialsSection";
import CraftSection from "../components/CraftSection";

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
    | "Chef’s Signature Risotti"
    | "Mains"
    | "Salads"
    | "Sides"
    | "Dessert";
  isSignature: boolean;
  isSoldOut: boolean;
  imageUrl: string;
}

// Interface for a cart item (contains simplified data)
interface CartItem {
  id: number;
  name: string;
  price: number; // Stored as number for calculation
  quantity: number;
}

// --- MAIN APPLICATION COMPONENT ---
const App: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState("menu"); // Default to Menu
  const [cart, setCart] = useState<CartItem[]>([]); // State for the shopping cart
  const [isCartOpen, setIsCartOpen] = useState(false); // State for the drawer

  // Toggle function for the cart drawer
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  // Calculate total items in cart
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- CART LOGIC ---
  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      const itemPrice = parseFloat(item.price);

      if (existingItem) {
        // Increase quantity if item is already in cart
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        // Add new item to cart
        return [
          ...prevCart,
          { id: item.id, name: item.name, price: itemPrice, quantity: 1 },
        ];
      }
    });
    // Open the cart drawer automatically when an item is added
    setIsCartOpen(true);
  };

  // Function to update item quantity in the cart
  const updateQuantity = (itemId: number, change: 1 | -1) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0); // Remove if quantity drops to 0

      return updatedCart;
    });
  };

  // Function to completely remove an item from the cart
  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // --- SCROLLING AND NAVIGATION LOGIC ---
  // Order of sections changed: Menu is first
  const sectionRefs = {
    menu: useRef<HTMLElement>(null),
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    chefs: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Function to handle smooth scrolling
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Subtracting the height of the fixed navbar (approx 6rem/96px) for correct positioning
      const offset = 96;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Intersection Observer to detect which section is currently visible
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        // Check if the element is intersecting by more than 20%
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setActiveSection(entry.target.id);
        }
      });
    },
    [],
  );

  // Effect to set up the Intersection Observer on mount
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    };
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [observerCallback]);

  return (
    // The CustomStyles component is rendered first to apply global theme styles
    <>
      {/* <CustomStyles /> */}
      <Navbar
        scrollTo={scrollTo}
        activeSection={activeSection}
        totalCartItems={totalCartItems}
        toggleCart={toggleCart} // Pass toggle function to Navbar
      />

      {/* Main content container with max width and padding */}
      <div className=" w-full ">
        {/* 1. HERO SECTION */}
        <div ref={sectionRefs.hero} className="scroll-mt-24">
          <HeroSection scrollTo={scrollTo} />
        </div>
        {/* 2. MENU SECTION (NOW FIRST) */}
        <div ref={sectionRefs.menu} className="scroll-mt-24">
          <MenuSection addToCart={addToCart} />
        </div>

        {/* 3. ABOUT SECTION */}
        <div ref={sectionRefs.about} className="scroll-mt-24">
          <AboutSection />
        </div>

        {/* 4. TESTIMONIALS SECTION */}
        <div ref={sectionRefs.testimonials} className="scroll-mt-24">
          <TestimonialsSection />
        </div>

        {/* 5. OUR CHEFS SECTION */}
        {/* <div ref={sectionRefs.chefs} className="px-4">
          <ChefsSection />
        </div> */}

        {/* 5. OUR CHEFS SECTION */}
        <div ref={sectionRefs.chefs} className="scroll-mt-24">
          <CraftSection />
        </div>

        {/* 6. CONTACT US SECTION */}
        <div ref={sectionRefs.contact} className="scroll-mt-24">
          <ContactSection />
        </div>

        {/* Global Footer */}
        <footer className="text-center py-10 text-base border-t border-gray-300 mt-16 px-4 bg-white">
          <p className="text-gray-600 font-light">
            &copy; {new Date().getFullYear()} Tomatello Ristorante. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Crafted with React, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </div>

      {/* Cart Drawer is always rendered but slides in/out based on state */}
      <CartDrawer
        cart={cart}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default App;
