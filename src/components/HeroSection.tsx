import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1607969891567-463aef4c9ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwY3JhZnRpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTk0MjU3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Leather crafting workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6" data-aos="fade-up" data-aos-delay="50">
            Manufacturing Leather Since 1999
          </h1>
          <p
            className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We combine traditional craftsmanship with modern techniques to
            create the finest leather products for luxury brands worldwide. From
            concept to completion, we deliver excellence in every stitch.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-700 hover:bg-white hover:text-gray-900"
            >
              <a href="#products">View Our Products</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white bg-amber-700"
            >
              <a href="#contact">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce will-change-transform">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
