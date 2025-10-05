import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#process" },
      { name: "Quality Standards", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Careers", href: "#" },
    ],
    products: [
      { name: "Luxury Handbags", href: "#products" },
      { name: "Automotive Leather", href: "#products" },
      { name: "Furniture Upholstery", href: "#products" },
      { name: "Custom Solutions", href: "#products" },
      { name: "Product Catalog", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Technical Support", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns Policy", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="50">
            <div className="bg-amber-700 text-white px-3 py-2 rounded w-fit mb-6">
              <span className="font-bold">Addict Hawk</span>
            </div>
            <p className="text-gray-300 mb-6">
              Premium leather manufacturing since 1985. We combine traditional
              craftsmanship with modern techniques to create exceptional leather
              products.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">Jalandhar, Punjab</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">+91 055 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">info@leathercraft.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3">
            <div
              className="grid md:grid-cols-3 gap-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <h3 className="mb-6 text-amber-500">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-amber-500">Products</h3>
                <ul className="space-y-3">
                  {footerLinks.products.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-amber-500">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Addict Hawk. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
