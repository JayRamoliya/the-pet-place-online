
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-pet-purple to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="space-y-6 max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark font-display">
                Everything Your Pet Needs in One Place
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Premium quality pet supplies, professional grooming services, and expert care advice for your furry, feathered, or scaly friends.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2 text-lg"
                >
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-primary text-primary hover:bg-pet-purple hover:text-primary-dark px-6 py-2 text-lg"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pet-peach rounded-full opacity-60 animate-bounce-slow" />
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-pet-blue rounded-full opacity-60" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Happy pets at The Pet Place"
                className="rounded-xl shadow-lg z-10 relative w-full h-auto"
              />
            </div>
            <div className="hidden md:block absolute -bottom-4 right-4">
              <div className="bg-white shadow-lg rounded-lg px-6 py-3 flex items-center">
                <span className="text-3xl mr-3">🐕</span>
                <span className="text-primary-dark font-medium">Happy pets, happy life!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Paw print decorations */}
      <div className="absolute top-20 left-5 text-3xl animate-bounce-slow opacity-30">🐾</div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-30">🐾</div>
    </div>
  );
};

export default Hero;
