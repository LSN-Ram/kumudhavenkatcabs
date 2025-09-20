import { Plane, Facebook, Instagram, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="text-primary h-8 w-8" />
              <h3 className="text-2xl font-bold text-white">Kumudhacabs</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted cab service and travel partner for safe journeys. We provide reliable transportation and personalized travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://wa.me/7388886627" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-whatsapp">
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-destinations">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-packages">Travel Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-primary mr-3">📞</span>
                <span className="text-gray-300">+91 7388886627</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary mr-3">✉️</span>
                <span className="text-gray-300">kumudhavenkateshp@gmail.com</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3 mt-1">📍</span>
                <span className="text-gray-300">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Kumudhacabs. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
