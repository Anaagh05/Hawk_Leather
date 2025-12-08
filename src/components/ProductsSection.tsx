import ProductsGrid from "./productsGrid";
import { FadeUp, ZoomIn } from "./ui/motion";

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium leather products for footwear, sports goods, furniture
            upholstery, and fashion accessories. Crafted with superior quality
            for diverse industry needs.
          </p>
        </FadeUp>

        <ProductsGrid />

        <FadeUp className="text-center mt-16">
          <div className="bg-amber-50 rounded-2xl p-8">
            <h3 className="mb-4 text-gray-900">
              Need Custom Leather Solutions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We specialize in creating bespoke leather products tailored to
              your specific requirements. From prototyping to mass production,
              we've got you covered.
            </p>
            <ZoomIn delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition-colors">
                  <a href="#contact">Request Custom Quote</a>
                </button>
                <button className="border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-lg transition-colors">
                  <a href="#products">View Product Catalog</a>
                </button>
              </div>
            </ZoomIn>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
