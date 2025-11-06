import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

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
    <ScrollReveal as="header" className="bg-white shadow-sm sticky top-0 z-50" animation="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <ScrollReveal animation="zoom-in" delay={50} className="flex items-center">
            <div className="bg-amber-700 text-white px-3 py-2 rounded">
              <span className="font-bold"> Hawk Exports</span>
            </div>
          </ScrollReveal>

          {/* Desktop Navigation */}
          <ScrollReveal animation="fade-down" delay={100} className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-700 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal animation="fade-left" delay={150} className="hidden md:block">
            <Button className="bg-amber-700 hover:bg-amber-800">
              <a href="#contact">Get Quote</a>
            </Button>
          </ScrollReveal>

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
    </ScrollReveal>
  );
}
