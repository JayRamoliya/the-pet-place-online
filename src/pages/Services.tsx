
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Calendar, Users, Book } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "grooming",
      title: "Pet Grooming",
      description: "Our professional grooming services keep your pets clean, comfortable, and looking their best. Each grooming session is tailored to your pet's specific needs.",
      icon: <Scissors className="h-10 w-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      features: [
        "Full bath with premium pet-safe products",
        "Breed-specific haircuts and styling",
        "Nail trimming and ear cleaning",
        "Teeth brushing and breath freshening",
        "Special treatments for skin conditions"
      ],
      pricing: "Starting at $45"
    },
    {
      id: "veterinary",
      title: "Veterinary Care",
      description: "Regular veterinary care is essential for keeping your pet healthy. Our in-store clinic offers convenient check-ups and preventative care.",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      features: [
        "Wellness examinations",
        "Vaccinations and deworming",
        "Health screenings for common conditions",
        "Nutrition consultations",
        "Minor illness diagnosis and treatment"
      ],
      pricing: "Starting at $60"
    },
    {
      id: "training",
      title: "Pet Training",
      description: "Our certified trainers use positive reinforcement methods to help your pet learn commands and good behavior.",
      icon: <Users className="h-10 w-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      features: [
        "Puppy socialization classes",
        "Basic obedience training",
        "Advanced commands and tricks",
        "Behavior modification for specific issues",
        "One-on-one training sessions available"
      ],
      pricing: "Starting at $35 per session"
    },
    {
      id: "daycare",
      title: "Pet Daycare",
      description: "Give your pet a fun-filled day of play and socialization while you're at work or running errands.",
      icon: <Book className="h-10 w-10 text-primary" />,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      features: [
        "Supervised play in spacious areas",
        "Separate spaces for different sizes and temperaments",
        "Regular breaks and quiet time",
        "Indoor and outdoor play areas",
        "Daily photo updates sent to owners"
      ],
      pricing: "Starting at $25 per day"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-pet-purple/20 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-dark font-display">Our Services</h1>
              <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                Professional pet care services to keep your furry friends happy, healthy, and looking their best
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center scroll-mt-20`}
                >
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <p className="text-white font-bold text-xl">{service.pricing}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-pet-purple p-3 rounded-full mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold font-display text-primary-dark">{service.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <Card className="mb-6">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">What's Included</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-primary mr-2">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Button className="bg-primary hover:bg-primary-dark text-white">
                      Book Appointment
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-pet-green">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-display text-primary-dark">Ready to schedule a service?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our pet care specialists are ready to help your furry friend look and feel their best
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
