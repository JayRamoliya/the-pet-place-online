
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    category: "dogs",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119",
    description: "High-quality nutrition for adult dogs of all breeds",
  },
  {
    id: 2,
    name: "Cat Tower",
    category: "cats",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1526336179256-1347bdb255ee",
    description: "Multi-level cat tree with scratching posts and cozy platforms",
  },
  {
    id: 3,
    name: "Bird Cage Deluxe",
    category: "birds",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
    description: "Spacious cage with multiple perches and feeding stations",
  },
  {
    id: 4,
    name: "Hamster Habitat",
    category: "small_pets",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
    description: "Complete habitat setup with tunnels and exercise wheel",
  },
  {
    id: 5,
    name: "Dog Leash and Collar Set",
    category: "dogs",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1567637903832-e06be3c9296f",
    description: "Durable nylon set with reflective stitching for safety",
  },
  {
    id: 6,
    name: "Cat Litter Box",
    category: "cats",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90",
    description: "Enclosed design with odor control and easy cleaning",
  },
  {
    id: 7,
    name: "Fish Tank Kit",
    category: "fish",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
    description: "Complete 20-gallon setup with filter and LED lighting",
  },
  {
    id: 8,
    name: "Plush Pet Bed",
    category: "dogs",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1581467655410-0597c0492db3",
    description: "Super soft bed with orthopedic support for dogs of all sizes",
  }
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-primary-dark font-display mb-4">Pet Shop</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover premium products for your furry, feathered, or scaly friends. 
            From nutritious food to engaging toys, we have everything to keep your pets healthy and happy.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="dogs">Dogs</TabsTrigger>
                <TabsTrigger value="cats">Cats</TabsTrigger>
                <TabsTrigger value="birds">Birds</TabsTrigger>
                <TabsTrigger value="fish">Fish</TabsTrigger>
                <TabsTrigger value="small_pets">Small Pets</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-600">No products found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:bg-gray-100 text-primary-dark">
                    <Heart size={18} />
                  </button>
                </div>
                
                <CardHeader className="pb-0">
                  <div className="text-xs text-gray-500 mb-1">{product.category.replace('_', ' ').toUpperCase()}</div>
                  <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="py-2 flex-grow">
                  <p className="text-sm text-gray-600">{product.description}</p>
                </CardContent>
                
                <CardFooter className="justify-between border-t pt-4">
                  <span className="text-lg font-bold text-primary-dark">${product.price.toFixed(2)}</span>
                  <Button className="flex items-center gap-2">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-16 p-6 bg-pet-blue rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-display font-semibold text-primary-dark">Join Our Pet Club</h3>
              <p className="text-gray-600">Get 10% off your first order and exclusive deals</p>
            </div>
            <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-2">
              Sign Up Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
