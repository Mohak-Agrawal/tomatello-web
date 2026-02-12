import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

interface NavbarProps {
  scrollTo: (id: string) => void;
  activeSection: string;
  totalCartItems: number;
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollTo,
  activeSection,
  totalCartItems,
  toggleCart,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Reviews" },
    // { id: "chefs", label: "Chefs" },
    { id: "craft", label: "Craft" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);
    scrollTo(id);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left - Logo */}
          <div className="flex items-center z-50">
            <img
              src={Logo}
              alt="Tomatello Logo"
              className="h-12 w-auto cursor-pointer object-contain"
              onClick={() => scrollTo("hero")}
            />
          </div>
          {/* Desktop Nav */}
          <ul className="hidden md:flex justify-center space-x-6 lg:space-x-8 text-xs w-full">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`
                    py-1 px-1 uppercase tracking-[0.2em] font-medium transition
                    ${
                      activeSection === item.id
                        ? "text-[#9c8978] border-b-2 border-[#9c8978]"
                        : scrolled
                          ? "text-[#252525] hover:text-[#9c8978]"
                          : "text-white hover:text-[#9c8978]"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right - Cart + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            {/* <button
              type="button"
              onClick={toggleCart}
              className={`
                inline-flex items-center justify-center
                h-9 w-9 rounded-full
                border
                ${
                  scrolled
                    ? "border-gray-300 text-[#252525] bg-white"
                    : "border-white/60 text-white bg-black/20"
                }
              `}
              aria-label="Open cart"
            >
              <span className="relative inline-flex">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M3 3h2l1 7h12l1.2-4.8A1 1 0 0018.2 4H6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M10 21a1 1 0 100-2 1 1 0 000 2zM18 21a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[1.1rem] px-1 rounded-full bg-[#9c8978] text-[10px] font-semibold text-white flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </span>
            </button> */}

            <a
              href="https://wa.me/918076823024?text=Hello%20Tomatello,%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className={`
                hidden md:inline-flex justify-center items-center gap-2 w-48
                px-5 py-2
                rounded-full
                text-xs sm:text-sm
                uppercase tracking-[0.18em]
                transition-all duration-300
                ${
                  scrolled
                    ? "bg-[#9c8978] text-white hover:opacity-90"
                    : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                }
              `}
            >
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png"
                alt="WhatsApp"
                className="h-4 w-4 object-contain"
              />
              <span>Talk to Us</span>
            </a>
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className={`
                inline-flex md:hidden items-center justify-center
                p-2 rounded-full
                border border-transparent
                ${
                  scrolled
                    ? "text-[#252525] bg-white/80"
                    : "text-white bg-black/20"
                }
              `}
              aria-label="Toggle navigation"
              onClick={() => setIsMobileOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-5 transition-transform ${
                    isMobileOpen
                      ? "translate-y-1.5 rotate-45 bg-[#252525]"
                      : "bg-current"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 transition-opacity ${
                    isMobileOpen ? "opacity-0" : "opacity-100 bg-current"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 transition-transform ${
                    isMobileOpen
                      ? "-translate-y-1.5 -rotate-45 bg-[#252525]"
                      : "bg-current"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-16 z-40
          bg-white/95 backdrop-blur-md border-b border-gray-200
          transform transition-transform duration-200 origin-top
          ${isMobileOpen ? "scale-y-100" : "scale-y-0"}
        `}
      >
        <ul className="flex flex-col px-4 py-3 space-y-2 text-xs">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full text-left py-2 uppercase tracking-[0.2em]
                  ${
                    activeSection === item.id
                      ? "text-[#9c8978]"
                      : "text-[#252525]"
                  }
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
