import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-10 bg-white border-t border-gray-200 text-gray-500 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <p className="text-center">
          © {new Date().getFullYear()} Tomatello. Crafted with love in Italy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 text-[11px] md:text-xs text-center md:text-left">
          <p>
            <span className="font-semibold text-gray-600">FSSAI Licence:</span>{" "}
            {/* Replace with your actual licence number */}
            00000000000000
          </p>
          <p>
            <span className="font-semibold text-gray-600">GSTIN:</span>{" "}
            {/* Replace with your actual GST number */}
            00AAAAA0000A0Z0
          </p>
          <p>
            <span className="font-semibold text-gray-600">Notice:</span> Images
            are for representation only. Taxes as applicable.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
