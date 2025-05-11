
import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedServices />
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                  alt="About The Pet Place" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6 font-display text-primary-dark">Who We Are</h2>
                <p className="text-gray-700 mb-6">
                  The Pet Place has been serving pet lovers since 2010. We started with a simple mission: to provide everything pets need to live their happiest, healthiest lives, and to make pet care easy and enjoyable for owners.
                </p>
                <p className="text-gray-700 mb-8">
                  Today, we offer premium products, professional services, and expert advice all under one roof. Our team of animal lovers is dedicated to treating every pet that visits us like our own.
                </p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-pet-purple hover:text-primary-dark">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* Shop Preview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-primary-dark">Shop Best Sellers</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium quality products chosen by our pet care experts
              </p>
            </div>
            
            <div className="text-center py-12 bg-pet-peach/30 rounded-lg">
              <p className="text-lg font-medium text-gray-700">Our shop is coming soon!</p>
              <p className="text-gray-600 mb-6">Check back soon to browse our curated selection of pet products.</p>
              <Button asChild>
                <Link to="/shop">Visit Shop</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Have Questions?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our pet care specialists are here to help with any questions about our products or services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-primary-dark hover:bg-pet-purple border-2 border-white hover:border-pet-purple">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:5551234567">Call (555) 123-4567</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
