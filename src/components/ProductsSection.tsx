import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function ProductsSection() {
  const products = [
    {
      title: "Shoe Upper & Lining Leather",
      description:
        "Premium quality leather specifically designed for footwear manufacturing with superior durability and flexibility.",
      image:
        "https://images.unsplash.com/photo-1693657606674-8d7fd5a0dd6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwZ29vZHN8ZW58MXx8fHwxNzU5NDI1NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Footwear", "Durable", "Flexible"],
    },
    {
      title: "Sports Goods Leather",
      description:
        "High-performance leather engineered for sports equipment with excellent grip and weather resistance.",
      image:
        "https://images.unsplash.com/photo-1697551895880-ddab44b0b31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTk0MjU3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Sports", "Performance", "Weather-Resistant"],
    },
    {
      title: "Furniture Upholstery",
      description:
        "Luxurious leather upholstery materials perfect for premium furniture and interior design applications.",
      image: "/upholistry.jpg",
      tags: ["Furniture", "Luxury", "Interior"],
    },
    {
      title: "Garments & Goods",
      description:
        "Versatile leather materials for fashion garments and accessories with superior softness and breathability.",
      image:
        "https://images.unsplash.com/photo-1727517786847-7a409bde2add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZmFjdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTk0MjU3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Fashion", "Accessories", "Versatile"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="mb-4 text-gray-900"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Our Product Range
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Premium leather products for footwear, sports goods, furniture
            upholstery, and fashion accessories. Crafted with superior quality
            for diverse industry needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 75}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-amber-50 rounded-2xl p-8">
            <h3
              className="mb-4 text-gray-900"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Need Custom Leather Solutions?
            </h3>
            <p
              className="text-gray-600 mb-6 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We specialize in creating bespoke leather products tailored to
              your specific requirements. From prototyping to mass production,
              we've got you covered.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-colors">
                <a href="#contact">Request Custom Quote</a>
              </button>
              <button className="border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-lg transition-colors">
                <a href="#products">View Product Catalog</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
