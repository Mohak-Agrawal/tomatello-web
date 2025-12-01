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
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "menu", label: "Menu" },

    { id: "about", label: "About" },
    { id: "testimonials", label: "Reviews" },
    { id: "chefs", label: "Chefs" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-sm z-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="grid grid-cols-3 items-center h-full">
          {/* Left - Logo */}
          <div className="flex items-center">
            <img
              src="https://tomatello.it/wp-content/uploads/2025/01/Tomatello-e1737803471299.jpg"
              alt="Tomatello Logo"
              className="h-10 w-auto cursor-pointer object-contain"
              onClick={() => scrollTo("hero")}
            />
          </div>

          {/* Center - Nav Items */}
          <ul className="flex justify-center space-x-6 md:space-x-8 text-sm sm:text-base">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className={`
                py-1 px-1 uppercase tracking-wide font-medium transition
                ${
                  activeSection === item.id
                    ? "text-[#edc84b] border-b-2 border-[#edc84b]"
                    : "text-[#252525] hover:text-[#edc84b] hover:border-b hover:border-[#edc84b]/50"
                }
              `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right - Cart */}
          <div className="flex justify-end">
            <button
              onClick={toggleCart}
              className="
            flex items-center space-x-2 
            border border-gray-300 p-2 rounded-md
            hover:bg-gray-100 transition duration-200
          "
            >
              <span className="text-xs font-medium uppercase text-gray-500 hidden sm:block">
                Cart
              </span>

              <div className="relative">
                <svg
                  className="w-5 h-5 text-[#252525]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>

                {totalCartItems > 0 && (
                  <span
                    className="
                  absolute -top-2 -right-2 bg-red-500 text-white text-[8px] 
                  w-4 h-4 flex items-center justify-center rounded-full font-bold
                "
                  >
                    {totalCartItems > 99 ? "99+" : totalCartItems}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
