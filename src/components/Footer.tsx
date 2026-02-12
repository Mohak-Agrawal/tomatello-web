import React from "react";
import Logo from "../assets/title_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e6e1d9] border-t border-neutral-200 pt-20 pb-14text-neutral-600">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 mb-12">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Tomatello Logo"
              className="h-24 mb-8 w-full mb-6 object-cover"
            />
            {/* <p className="text-sm leading-relaxed text-neutral-600 text-center">
              Cucina Italiana rooted in authenticity, guided by craft and
              restraint.
            </p> */}
          </div>

          {/* Order Online */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 after:block after:w-6 after:h-[1px] after:bg-[#9c8978] after:mt-3">
              Order Online
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity transition-colors"
              >
                Swiggy
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity transition-colors"
              >
                Zomato
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 after:block after:w-6 after:h-[1px] after:bg-[#9c8978] after:mt-3">
              Connect
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity transition-colors"
              >
                Instagram
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity transition-colors"
              >
                Facebook
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 after:block after:w-6 after:h-[1px] after:bg-[#9c8978] after:mt-3">
              Legal
            </h4>

            <div className="space-y-3 text-sm">
              <p>FSSAI Licence: 00000000000000</p>
              <p>GSTIN: 00AAAAA0000A0Z0</p>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Images are for representation purposes only. Taxes applicable as
                per regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-300/60 py-4 mt-12 text-center text-[11px] tracking-wide text-neutral-500">
          © {new Date().getFullYear()} Tomatello Ristorante. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
