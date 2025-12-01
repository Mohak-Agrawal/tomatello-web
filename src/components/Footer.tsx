import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-white border-t border-gray-200 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Tomatello. Crafted with love in Italy.
    </footer>
  );
};

export default Footer;
