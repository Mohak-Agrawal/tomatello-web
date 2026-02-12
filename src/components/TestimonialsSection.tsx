interface Testimonial {
  id: number;
  quote: string;
  author: string;
  city?: string;
  rating: number;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  // {
  //   id: 1,
  //   quote:
  //     "Highly recommend if you like authentic Italian food and not the local stuff. We will be repeat customers :)",
  //   author: "Brody Krogman",
  //   rating: 5,
  // },
  {
    id: 2,
    quote:
      "I feel quite blessed to be at a stone's throw from someone who knows \"true al dente\" thank you. The rigatoni was too thick for me though. I'm guessing you import it. What are your other thinner pasta's? Is there a spinach lasagna ever going to be available? Haha. Warmth.",
    author: "Rahul Jain",
    rating: 5,
  },
  // {
  //   id: 3,
  //   quote: "Amazing food, great packaging. Thanks!",
  //   author: "Prateek",
  //   rating: 5,
  // },
  {
    id: 4,
    quote:
      "Loved everything that we ordered. They called to check on any allergies or any instructions to be followed while preparing the food. By far the best Italian food that stays amazing on delivery too. Fettuccine lamb shank and gnocchi cannot be missed!",
    author: "Ravina",
    rating: 5,
  },
  // {
  //   id: 5,
  //   quote: "Top-notch food and great packaging. The pizza is a must-try!",
  //   author: "Mohak Agrawal",
  //   rating: 5,
  // },
  {
    id: 6,
    quote:
      "Very few spices and very well cooked which brings out the flavor of the sauce and gnocchi. Packaging was overdone; zip ties are not required for keeping food packets intact.",
    author: "Manu Gupta",
    rating: 5,
  },
  // {
  //   id: 7,
  //   quote: "I want to rate this place a 6 out of 5. Just amazing",
  //   author: "Naval Khanna",
  //   rating: 5,
  // },
  {
    id: 8,
    quote:
      "Great food!! Authentic Italian cuisine at its finest! From the packaging to the ingredients and the final dishes, all top notch. Best Italian delivery food till now in Delhi. Perfectly al-dente fresh pasta is a treat to eat! Please open a sit down restaurant, would love to have this in a dining setting.",
    author: "Saurabh Patnaik",
    rating: 5,
  },
  // {
  //   id: 9,
  //   quote: "Ordered from Tomatello and wow Delhi has a new benchmark!",
  //   author: "Arundeep Singh",
  //   rating: 5,
  // },
  {
    id: 10,
    quote:
      "Delicious dish!! succulent chicken with a unique flavour that I have never tasted before. I added my homemade roasted pumpkin, beetroot and broccoli salad to it and it turned into perfect Mediterranean dinner :P I will definitely order this dish again!",
    author: "KAROLINA BILINSKA",
    rating: 5,
  },
  {
    id: 11,
    quote:
      "If you are craving for a true Italian authentic food Tomatello is the place to go for. I have ordered food from them multiple times and every time the food taste more delicious and authentic without any Indian Desi touch.",
    author: "Anika Tomar",
    rating: 5,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg
      className={`w-4 h-4 fill-current ${
        filled ? "text-[#9c8978]" : "text-gray-300"
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

import { useEffect, useRef, useState } from "react";

import SectionHeader from "./SectionHeader";

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIALS_DATA.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 6000); // slower = more luxury
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 relative">
        <SectionHeader
          title="What Our Guests Say"
          subtitle="A few words from the people who matter most."
        />

        <div
          className="relative mt-20"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {TESTIMONIALS_DATA.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full flex justify-center px-6"
                >
                  <div className="max-w-2xl text-center flex flex-col items-center gap-6">
                    {/* ⭐ Properly Centered Star Section */}
                    <div className="flex justify-center">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    <p className="text-lg md:text-xl italic leading-relaxed text-gray-800 max-w-xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <p className="font-bold text-[#252525] uppercase tracking-wider text-sm">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sleek Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 group"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-300 shadow-sm">
              <svg
                className="w-4 h-4 text-gray-600 group-hover:text-black transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 group"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-300 shadow-sm">
              <svg
                className="w-4 h-4 text-gray-600 group-hover:text-black transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
