import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="bg-white shadow-sm sticky top-0 z-50"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <div className="bg-amber-700 text-white px-3 py-2 rounded">
              <span className="font-bold">Addict Hawk</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-700 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div
            className="hidden md:block"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <Button className="bg-amber-700 hover:bg-amber-800">
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-amber-700 hover:bg-amber-800 w-full mt-4">
              <a href="#contact">Get Quote</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
