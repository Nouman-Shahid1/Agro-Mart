import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Testimonialbg from "@/assets/images/testi.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Health Enthusiast",
      feedback:
        "AgroMart has completely transformed my lifestyle. The freshness of their products is unmatched, and I love that everything is 100% organic.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iQOSjEHvkWlDyRSHHVW3sBuYxBEXGZomLdgxPi68oI7Bzxmta2D_S3KuU4o6p-wWTqQ&usqp=CAU",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Lee",
      role: "Chef & Restauranteur",
      feedback:
        "I rely on AgroMart for the finest ingredients. Their locally sourced produce has elevated the quality of my dishes. Highly recommended!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR7FvvC_9X1l2xqi2rdkStAHaSRMmg89O_g&s",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Watson",
      role: "Eco-Conscious Shopper",
      feedback:
        "Knowing that AgroMart uses eco-friendly packaging gives me peace of mind. It's great to support a brand that cares for the planet.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrIPUVHe81YZpOiRUNwRq32b7QEpEVP6YeuAImz3FaOtVYPTNNkRveATsieLpH2_kr4g&usqp=CAU",
      rating: 4.5,
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Testimonialbg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-700 via-green-800 to-black opacity-80"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <FaQuoteLeft className="text-green-500 text-4xl mb-4 mx-auto" />
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.feedback}"
              </p>
              <div className="flex items-center justify-center mb-4">
                {Array(Math.floor(testimonial.rating))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                {testimonial.rating % 1 !== 0 ? (
                  <FaStar className="text-yellow-400 text-xl opacity-50" />
                ) : null}
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-green-500"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
