
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-pet-purple/20 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-dark font-display">About The Pet Place</h1>
              <p className="text-lg text-gray-700 mt-4">Our story, our team, and our commitment to pets</p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Founders with their pets" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 font-display text-primary-dark">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  The Pet Place was founded in 2010 by Mark and Lisa Thompson, two lifelong animal lovers with a passion for pet care. After struggling to find quality products and compassionate services for their own pets, they decided to create the pet shop they always wished existed.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small store with just grooming services and basic supplies has grown into a comprehensive pet care center. Our mission has remained the same: to improve the lives of pets and their owners by providing exceptional products, services, and education.
                </p>
                <p className="text-gray-700">
                  Today, The Pet Place is a beloved community hub where pet parents can find everything they need under one roof, including premium nutrition, expert grooming, veterinary care, and adoption services for pets in need of loving homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-pet-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center font-display text-primary-dark">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Pet Wellbeing First",
                  description: "We prioritize the health, happiness, and wellbeing of every pet above all else."
                },
                {
                  title: "Quality & Trust",
                  description: "We carefully select each product and service to ensure it meets our high standards."
                },
                {
                  title: "Community Impact",
                  description: "We actively support animal rescue organizations and promote responsible pet ownership."
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 font-display text-primary">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team placeholder - in a real implementation, this would include actual team members */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold font-display text-primary-dark">Meet Our Team</h2>
              <p className="text-gray-700 mt-2">Our dedicated staff of pet care professionals</p>
            </div>
            <div className="text-center py-12 bg-pet-yellow/30 rounded-lg">
              <p className="text-lg font-medium text-gray-700">Our team section is under construction.</p>
              <p className="text-gray-600">Check back soon to meet our amazing pet care specialists!</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
