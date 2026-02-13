import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AboutSection from "../components/AboutSection";
import CartDrawer from "../components/CartDrawer";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Navbar from "../components/Navbar";
import TestimonialsSection from "../components/TestimonialsSection";
import CraftSection from "../components/CraftSection";
import Footer from "../components/Footer";
import type { MenuItem } from "../types/menu";

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
      // Extract numeric value from price string like "₹499"
      const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));

      if (existingItem) {
        // Increase quantity if item is already in cart
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item to cart
        return [
          ...prevCart,
          { id: item.id, name: item.name, price: numericPrice, quantity: 1 },
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
            : item
        )
        .filter((item) => item.quantity > 0); // Remove if quantity drops to 0

      return updatedCart;
    });
  };

  // Quick lookup map for quantities by menu item id (used in the menu grid)
  const cartQuantities = useMemo(() => {
    const map: Record<number, number> = {};
    cart.forEach((item) => {
      map[item.id] = item.quantity;
    });
    return map;
  }, [cart]);

  // Function to completely remove an item from the cart
  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // --- SCROLLING AND NAVIGATION LOGIC ---
  // Order of sections changed: Menu is first
  const sectionRefs = {
    menu: useRef<HTMLDivElement | null>(null),
    hero: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    testimonials: useRef<HTMLDivElement | null>(null),
    chefs: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  };

  // Function to handle smooth scrolling
  const scrollTo = (id: string) => {
    // Prefer scrolling to the wrapper divs that use `scroll-mt-*`
    const ref = sectionRefs[id as keyof typeof sectionRefs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Fallback: scroll to element by id if ref is not available
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
    []
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
      <main className=" w-full " role="main">
        {/* 1. HERO SECTION */}
        <div ref={sectionRefs.hero} className="scroll-mt-16">
          <HeroSection scrollTo={scrollTo} />
        </div>
        {/* <div ref={sectionRefs.about} className="scroll-mt-16">
          <CraftSection />
        </div> */}
        {/* 2. MENU SECTION (NOW FIRST) */}
        <div ref={sectionRefs.menu} className="scroll-mt-16">
          <MenuSection
            addToCart={addToCart}
            cartQuantities={cartQuantities}
            updateQuantity={updateQuantity}
          />
        </div>

        {/* 3. ABOUT SECTION */}
        <div ref={sectionRefs.about} className="scroll-mt-16">
          <AboutSection />
        </div>

        {/* 4. TESTIMONIALS SECTION */}
        <div ref={sectionRefs.testimonials} className="scroll-mt-16">
          <TestimonialsSection />
        </div>

        {/* 5. OUR CHEFS SECTION */}
        {/* <div ref={sectionRefs.chefs} className="px-4">
          <ChefsSection />
        </div> */}

        {/* 5. OUR CHEFS SECTION */}
        {/* <div ref={sectionRefs.chefs} className="scroll-mt-16">
          <CraftSection />
        </div> */}

        {/* 6. CONTACT US SECTION */}
        <div ref={sectionRefs.contact} className="scroll-mt-16">
          <ContactSection />
        </div>

        {/* Global Footer */}
        <Footer />
      </main>

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
