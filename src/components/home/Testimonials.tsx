
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    pet: "Max the Golden Retriever",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    text: "The grooming service at The Pet Place is outstanding! Max looks amazing after every visit, and the staff treats him like family.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    pet: "Luna the Siamese Cat",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    text: "I've been buying Luna's food from The Pet Place for years. The quality of products is exceptional, and the staff always helps me find exactly what I need.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    pet: "Bella the Cockapoo",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    text: "The veterinary services are top-notch! They detected a minor issue with Bella early, potentially saving us from a more serious problem down the road.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-pet-purple/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-primary-dark">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in providing exceptional service to our furry friends and their owners
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                }`}
              >
                <Card className="border-none shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-2/5">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.pet}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500 text-xl">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                        <div>
                          <p className="font-bold text-primary-dark">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.pet}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots for navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
