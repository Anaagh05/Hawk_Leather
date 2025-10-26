import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductVariant {
  title: string;
  description: string;
  image: string;
}
interface Product {
  variants: ProductVariant[];
  tags: string[];
}

const products: Product[] = [
  {
    variants: [
      {
        title: "Shoe Upper & Lining Leather",
        description:
          "Premium Italian leather known for its exceptional quality and craftsmanship.",
        image:
          "https://www.rolfordleather.com/cdn/shop/articles/rolford-leather-merchants-northampton-hero-13.jpg?v=1734726414&width=360",
      },
      {
        title: "Buff Beige Lining",
        description:
          "Premium beige-toned lining leather offering a soft touch and excellent moisture absorption.",
        image: "/linning/buff_beige_linning.jpg",
      },
      {
        title: "Buff Black Lining",
        description:
          "Durable black leather lining with natural breathability for all-day comfort.",
        image: "/linning/buff_black_linning.jpg",
      },
      {
        title: "Buff Brown Lining",
        description:
          "Rich brown leather lining that molds perfectly to the foot for custom fit.",
        image: "/linning/buff_brown_linning.jpg",
      },
      {
        title: "Buff Black PDM",
        description:
          "Rich brown leather lining that molds perfectly to the foot for custom fit.",
        image: "/pdm/buff_black_pdm.jpg",
      },
      {
        title: "Buff coffee Nubuck",
        description:
          "Rich brown leather lining that molds perfectly to the foot for custom fit.",
        image: "/nubuck/buff_coffee_nubuck.jpg",
      },
      {
        title: "Buff Skin Suede",
        description:
          "Luxurious suede with velvety nap providing premium tactile experience for high-end fashion.",
        image: "/buff_skin_suede.jpg",
      },
      {
        title: "Buff Full Graned Finished Leather",
        description:
          "Top-quality upholstery leather that combines durability with comfort for premium furniture.",
        image: "/leather/buff_full_graned_finished_leather.jpg",
      },
      {
        title: "Buff Printed Leather",
        description:
          "Artistically printed leather adding unique character to interior design elements.",
        image: "/leather/buff_printed_finished_leather.jpg",
      },
    ],
    tags: ["Footwear", "Durable", "Flexible"],
  },
  {
    variants: [
      {
        title: "Sports Goods Leather",
        description:
          "High-performance leather engineered for sports equipment with excellent grip and weather resistance.",
        image:
          "https://th.bing.com/th/id/OIP.YQhqRkTsIzGw10J_Lio_XwHaDp?w=332&h=172&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      },
      {
        title: "Buff Pink Nappa",
        description:
          "Soft, supple pink nappa leather with excellent stretch and recovery for sports accessories.",
        image: "/nappa/buff_pink_nappa.jpg",
      },
      {
        title: "Buff Red Nappa",
        description:
          "Vibrant red nappa leather offering superior flexibility and smooth finish for sports applications.",
        image: "/nappa/buff_red_nappa.jpg",
      },
      {
        title: "Buff Blue Nappa",
        description:
          "Premium blue nappa leather with consistent texture for high-end sports equipment.",
        image: "/nappa/buff_blue_nappa.jpg",
      },
      {
        title: "Buff Skin Suede",
        description:
          "Luxurious suede with velvety nap providing premium tactile experience for high-end fashion.",
        image: "/buff_skin_suede.jpg",
      },
      {
        title: "Buff Black PDM",
        description:
          "Rich brown leather lining that molds perfectly to the foot for custom fit.",
        image: "/pdm/buff_black_pdm.jpg",
      },
    ],
    tags: ["Sports", "Performance", "Weather-Resistant"],
  },
  {
    variants: [
      {
        title: "Furniture Upholstery",
        description:
          "Textured leather panels for luxury interior wall applications and decorative elements.",
        image: "/upholistry.jpg",
      },
      {
        title: "Buff Full Graned Finished Leather",
        description:
          "Top-quality upholstery leather that combines durability with comfort for premium furniture.",
        image: "/leather/buff_full_graned_finished_leather.jpg",
      },
      {
        title: "Buff Printed Leather",
        description:
          "Artistically printed leather adding unique character to interior design elements.",
        image: "/leather/buff_printed_finished_leather.jpg",
      },
    ],
    tags: ["Furniture", "Luxury", "Interior"],
  },
  {
    variants: [
      {
        title: "Garments & Goods",
        description:
          "Versatile leather materials for fashion garments and accessories with superior softness and breathability.",
        image:
          "https://realleathergarments.co.uk/wp-content/uploads/2023/03/Photo-by-Mohammadjavad-Asgharikolahi-on-Unsplash.jpg",
      },
      {
        title: "Buff Pink Nappa",
        description:
          "Soft, supple pink nappa leather perfect for premium fashion accessories.",
        image: "/nappa/buff_pink_nappa.jpg",
      },
      {
        title: "Buff Red Nappa",
        description:
          "Vibrant red nappa leather offering superior flexibility for fashion applications.",
        image: "/nappa/buff_red_nappa.jpg",
      },
      {
        title: "Buff Blue Nappa",
        description:
          "Premium blue nappa leather with consistent texture for high-end fashion items.",
        image: "/nappa/buff_blue_nappa.jpg",
      },
      {
        title: "Buff Skin Suede",
        description:
          "Luxurious suede with velvety nap providing premium tactile experience for high-end fashion.",
        image: "/buff_skin_suede.jpg",
      },
      {
        title: "Buff Full Graned Finished Leather",
        description:
          "Top-quality upholstery leather that combines durability with comfort for premium furniture.",
        image: "/leather/buff_full_graned_finished_leather.jpg",
      },
      {
        title: "Buff Printed Leather",
        description:
          "Artistically printed leather adding unique character to interior design elements.",
        image: "/leather/buff_printed_finished_leather.jpg",
      },
      {
        title: "Buff Black PDM",
        description:
          "Rich brown leather lining that molds perfectly to the foot for custom fit.",
        image: "/pdm/buff_black_pdm.jpg",
      },
    ],
    tags: ["Fashion", "Accessories", "Versatile"],
  },
];

const CardCarousel: React.FC<{ product: Product }> = ({ product }) => {
  const [current, setCurrent] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const total = product.variants.length;

  const goPrev = () => {
    setImageLoading(true);
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const goNext = () => {
    setImageLoading(true);
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const variant = product.variants[current];

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  return (
    <div
      className="group relative flex flex-col h-full bg-white rounded-2xl border border-gray-200/60 overflow-hidden"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px)";
        e.currentTarget.style.boxShadow =
          "0 20px 25px -5px rgba(251, 191, 36, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.borderColor = "rgba(251, 191, 36, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        e.currentTarget.style.borderColor = "rgba(229, 231, 235, 0.6)";
      }}
    >
      {/* Image Carousel Container */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
        style={{ height: "280px" }}
      >
        {/* Main Image */}
        <div className="relative w-full h-full">
          {/* Loading Skeleton */}
          {imageLoading && (
            <div
              className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            >
              <div
                className="w-12 h-12 bg-gray-400 rounded-full"
                style={{ animation: "spin 1s linear infinite" }}
              ></div>
            </div>
          )}

          <img
            src={variant.image}
            alt={variant.title}
            className="w-full h-full object-cover"
            style={{
              borderRadius: "16px 16px 0 0",
              transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: imageLoading ? 0 : 1,
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
            onMouseEnter={(e) => {
              if (!imageLoading) e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
            style={{
              opacity: 0,
              transition: "opacity 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          />

          {/* Navigation Buttons - Always visible with better styling */}
          <button
            className="absolute top-1/2 bg-white/95 border border-gray-300 p-2.5 rounded-full z-10"
            style={{
              left: "2px",
              transform: "translateY(-500%)",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: "all 0.2s ease-out",
            }}
            onClick={goPrev}
            aria-label="Previous image"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.borderColor = "rgb(251, 191, 36)";
              e.currentTarget.style.transform = "translateY(-500%) scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.borderColor = "rgb(209, 213, 219)";
              e.currentTarget.style.transform = "translateY(-500%) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
            }}
          >
            <ChevronLeft
              className="w-6 h-6 text-gray-700"
              style={{ transition: "color 0.2s" }}
            />
          </button>

          <button
            className="absolute top-1/2 bg-white/95 border border-gray-300 p-2.5 rounded-full z-10"
            style={{
              right: "5px",
              transform: "translateY(-500%)",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: "all 0.2s ease-out",
            }}
            onClick={goNext}
            aria-label="Next image"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.borderColor = "rgb(251, 191, 36)";
              e.currentTarget.style.transform = "translateY(-500%) scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.borderColor = "rgb(209, 213, 219)";
              e.currentTarget.style.transform = "translateY(-500%) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
            }}
          >
            <ChevronRight
              className="w-6 h-6 text-black-700"
              style={{ transition: "color 0.2s" }}
            />
          </button>
        </div>

        {/* Slide Indicators */}
        <div
          className="absolute bottom-3 left-1/2 flex z-10"
          style={{ transform: "translateX(-50%)", gap: "6px" }}
        >
          {product.variants.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor:
                  index === current ? "white" : "rgba(255, 255, 255, 0.6)",
                boxShadow:
                  index === current
                    ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                    : "none",
                transform: index === current ? "scale(1.25)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onClick={() => {
                setImageLoading(true);
                setCurrent(index);
              }}
              onMouseEnter={(e) => {
                if (index !== current) {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.8)";
                }
              }}
              onMouseLeave={(e) => {
                if (index !== current) {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.6)";
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6" style={{ gap: "1rem" }}>
        {/* Title */}
        <h3
          className="text-xl font-bold text-gray-900"
          style={{
            lineHeight: "1.2",
            letterSpacing: "-0.025em",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgb(180, 83, 9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgb(17, 24, 39)";
          }}
        >
          {variant.title}
        </h3>

        {/* Description */}
        <p
          className="text-gray-600 text-sm"
          style={{
            lineHeight: "1.625",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgb(55, 65, 81)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgb(75, 85, 99)";
          }}
        >
          {variant.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap mt-auto" style={{ gap: "0.5rem" }}>
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 text-xs font-medium rounded-full border border-amber-200/50"
              style={{
                letterSpacing: "0.025em",
                transition: "all 0.3s ease-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, rgb(254, 243, 199), rgb(253, 230, 138))";
                e.currentTarget.style.borderColor = "rgba(252, 211, 77, 0.5)";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, rgb(255, 251, 235), rgb(254, 243, 199))";
                e.currentTarget.style.borderColor = "rgba(252, 211, 77, 0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Border Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(251, 191, 36, 0), rgba(251, 191, 36, 0), rgba(251, 191, 36, 0))",
          transition: "all 0.5s ease",
        }}
      />
    </div>
  );
};

const ProductsGrid: React.FC = () => (
  <div className="p-8" data-aos="fade-up" data-aos-once="true">
    <div className="max-w-7xl mx-auto">
      <div
        className="grid md:grid-cols-2 lg:grid-cols-4"
        style={{ gap: "2rem" }}
      >
        {products.map((product, idx) => (
          <div key={idx}>
            <CardCarousel product={product} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProductsGrid;
