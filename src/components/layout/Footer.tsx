
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">The Pet Place</h3>
            <p className="mb-4">Your one-stop shop for all pet needs. Quality products, expert grooming, and compassionate care since 2010.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Shop", path: "/shop" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Pet Grooming", path: "/services#grooming" },
                { name: "Veterinary Care", path: "/services#veterinary" },
                { name: "Pet Supplies", path: "/shop" },
                { name: "Pet Adoption", path: "/adoptions" },
                { name: "Pet Training", path: "/services#training" },
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>123 Pet Avenue, Pawsville, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:info@thepetplace.com" className="hover:text-primary transition-colors">
                  info@thepetplace.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Hours:</h4>
              <p>Mon-Fri: 9AM - 7PM</p>
              <p>Sat: 10AM - 6PM</p>
              <p>Sun: 11AM - 4PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The Pet Place Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
