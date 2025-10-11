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
      { name: "Quality Standards", href: "#quality-assurance" },
      { name: "Contact Us", href: "#contact" },
    ],
    products: [
      { name: "Shoe Upper & Lining Leather", href: "#products" },
      { name: "Sports Goods Leather", href: "#products" },
      { name: "Furniture Upholstery", href: "#products" },
      { name: "Garments & Goods", href: "#" },
      { name: "Custom Solutions", href: "#products" },
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="50">
            <div className="bg-amber-700 text-white px-3 py-2 rounded w-fit mb-6">
              <span className="font-bold"> Hawk Exports</span>
            </div>
            <p className="text-gray-300 mb-6">
              Manufacturing leather since 1999. We create exceptional leather
              and leather products.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">
                  74-C Leather Complex, Jalandhar-144021
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">+919872664468</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">hawkexports@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <div
              className="grid md:grid-cols-2 gap-8"
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
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center">
              © {currentYear} Hawk Exports. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
