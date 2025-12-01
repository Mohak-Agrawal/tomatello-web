import SectionHeader from "./SectionHeader";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  city: string;
  rating: number;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote:
      "The Cappellacci with burrata and hazelnut is transcendent. A dish I will dream about until I return. Service was impeccable.",
    author: "Elara V.",
    city: "New York",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Authentic Italian flavors, unlike anything I've had outside of Florence. The Carbonara was spot on, perfectly creamy without the cream!",
    author: "Marco T.",
    city: "Rome",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "A beautiful dining atmosphere. Everything felt meticulously curated, from the simple, clean decor to the wine list. Highly recommend the Prosciutto e Funghi.",
    author: "Sophia R.",
    city: "London",
    rating: 4,
  },
  {
    id: 4,
    quote:
      "We held our anniversary dinner here. The staff made the evening unforgettable. The Tiramisu is, without a doubt, the best in the city.",
    author: "David & Lisa C.",
    city: "Paris",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "The Arancini being sold out was a shame, but the Insalata Caprese more than made up for it. Fresh, vibrant, and delicious.",
    author: "Chen W.",
    city: "Berlin",
    rating: 4,
  },
  {
    id: 6,
    quote:
      "The monospace theme and the creamy walls create a really relaxing, vintage feel. The food quality matches the aesthetic. Excellent.",
    author: "Jamie K.",
    city: "Sydney",
    rating: 5,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg
      className={`w-4 h-4 fill-current ${
        filled ? "text-[#edc84b]" : "text-gray-300"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {filled ? (
        <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      ) : (
        <path d="M12 15.39l-4.71 2.85 1.25-5.38L4.93 9.42l5.05-.43L12 4.04l2.02 4.95 5.05.43-3.57 3.44 1.25 5.38zM12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
      )}
    </svg>
  );

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
    testimonial,
  }) => (
    <div className="flex flex-col gap-4 p-0 bg-transparent border-0 shadow-none">
      <StarRating rating={testimonial.rating} />

      <p className="text-base italic leading-relaxed text-gray-800">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div>
        <p className="font-bold text-[#252525] uppercase tracking-wider text-sm">
          {testimonial.author}
        </p>
        <p className="text-xs text-gray-500">{testimonial.city}</p>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 lg:py-32 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="What Our Guests Say"
          subtitle="A few words from the people who matter most: our cherished customers."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TESTIMONIALS_DATA.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
