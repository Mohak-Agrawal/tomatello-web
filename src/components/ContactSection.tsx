import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";

const ContactSection: React.FC = () => (
  <section id="contact" className="py-32 bg-[#f7f5f1]">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        title="Private Dining & At-Home Experiences"
        subtitle="Curated private dinners and chef-led gatherings, thoughtfully prepared for intimate occasions. Leave us a message and our team will connect to design your experience."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-24 mt-20">
        {/* Form */}
        <ContactForm />

        {/* Location Info */}
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="text-xs uppercase tracking-[0.45em] text-neutral-400 mb-6">
              Location & Hours
            </h3>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                Address
              </p>
              <p className="text-neutral-700 leading-relaxed">
                South Extension-2 <br />
                110049 Delhi, India
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                Contact
              </p>
              <p className="text-neutral-700 leading-relaxed">
                +91 80768 23024 <br />
                ciao@tomatello.it
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                Hours
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Monday – Sunday: 02:00pm – 02:00am <br />
              </p>
            </div>
          </div>

          {/* Map */}
          {/* <div className="mt-10 h-64 bg-neutral-200 rounded-xl flex items-center justify-center text-neutral-500 text-sm italic">
            Google Maps View
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
