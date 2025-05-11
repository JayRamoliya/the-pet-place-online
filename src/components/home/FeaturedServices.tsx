
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, ShoppingCart, Calendar, Image } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const services = [
    {
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pet clean, healthy, and looking their best.",
      icon: <Scissors className="h-12 w-12 text-primary" />,
      bgColor: "bg-pet-yellow",
      link: "/services#grooming"
    },
    {
      title: "Premium Supplies",
      description: "High-quality food, toys, accessories, and more for all types of pets.",
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      bgColor: "bg-pet-blue",
      link: "/shop"
    },
    {
      title: "Pet Adoptions",
      description: "Find your perfect companion from our selection of rescue animals looking for forever homes.",
      icon: <Image className="h-12 w-12 text-primary" />,
      bgColor: "bg-pet-green",
      link: "/adoptions"
    },
    {
      title: "Vet Consultations",
      description: "Regular check-ups and expert veterinary advice to ensure your pet's health and wellbeing.",
      icon: <Calendar className="h-12 w-12 text-primary" />,
      bgColor: "bg-pet-peach",
      link: "/services#veterinary"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-primary-dark">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything your pet needs to live a happy, healthy life all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className={`${service.bgColor} rounded-t-lg p-6 flex items-center justify-center`}>
                {service.icon}
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-xl mb-2 text-center font-display">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-pet-purple hover:text-primary-dark">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
