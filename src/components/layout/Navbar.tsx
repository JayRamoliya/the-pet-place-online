
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Scissors, Phone, ShoppingCart, Info } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4 mr-1" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4 mr-1" /> },
    { name: "Shop", path: "/shop", icon: <ShoppingCart className="w-4 h-4 mr-1" /> },
    { name: "Services", path: "/services", icon: <Scissors className="w-4 h-4 mr-1" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="w-4 h-4 mr-1" /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary font-display">
                The Pet Place
              </span>
              <div className="ml-2 bg-pet-purple rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-primary-dark">🐾</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-pet-purple hover:text-primary-dark transition-colors flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Button className="ml-2 bg-primary hover:bg-primary-dark text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-1 animate-accordion-down">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pet-purple hover:text-primary-dark transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-2 bg-primary hover:bg-primary-dark text-white">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
