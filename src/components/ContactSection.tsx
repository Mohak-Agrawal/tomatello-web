import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";

const ContactSection: React.FC = () => (
  <section id="contact" className="py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Visit Us or Say Ciao!"
        subtitle="We are open daily for lunch and dinner. Find us here or get in touch."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mt-10 md:mt-12">
        {/* Contact Form */}
        <ContactForm />

        {/* Location & Info */}
        <div className="flex flex-col gap-8 p-6 rounded-lg border border-gray-200 bg-white">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-[#252525]">
            Location & Hours
          </h3>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-700">Address</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Via Roma 42, <br /> 00100 Rome, Italy
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-700">Contact</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Phone: +39 06 1234 5678 <br />
              Email: ciao@tomatello.it
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-700">Hours</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tuesday – Sunday: 11:00 – 22:00 <br />
              (Closed Mondays)
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="h-60 rounded-lg border border-gray-300 bg-gray-50 flex items-center justify-center text-sm text-gray-400 italic">
            Map Placeholder – Google Maps View
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
