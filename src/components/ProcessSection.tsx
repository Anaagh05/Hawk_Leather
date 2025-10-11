import { CheckCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProcessSection() {
  const processSteps = [
    {
      step: "01",
      title: "Material Selection",
      description:
        "We source the finest raw hides from certified suppliers, ensuring ethical and sustainable practices.",
    },
    {
      step: "02",
      title: "Expert Tanning",
      description:
        "Our master tanners use traditional and modern techniques to transform raw hides into premium leather.",
    },
    {
      step: "03",
      title: "Quality Testing",
      description:
        "Every batch undergoes rigorous testing for durability, flexibility, and color consistency.",
    },
    {
      step: "04",
      title: "Experts Finishing",
      description:
        "Experts finish each piece with meticulous attention to detail. We ensure that the leather is smooth, soft, and durable.",
    },
    {
      step: "05",
      title: "Final Inspection",
      description:
        "Comprehensive quality control ensures every product meets our exacting standards before shipping.",
    },
  ];

  const qualityFeatures = [
    "Sustainable & Ethical Sourcing",
    "Advanced Quality Control Systems",
    "25+ Years Experience",
    "Custom Color Matching Available",
    "Flexible Production Capacity",
  ];

  return (
    <section id="process" className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="mb-4 text-gray-900"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Our Manufacturing Process
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Every piece of leather we produce follows a carefully orchestrated
            process that combines time-honored traditions with cutting-edge
            technology.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6"
                data-aos="fade-up"
                data-aos-delay={index * 75}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-amber-700 mt-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          id="quality-assurance"
        >
          <div>
            <h3 className="mb-6 text-amber-700" data-aos="fade-right">
              Quality Assurance Standards
            </h3>
            <p
              className="text-gray-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Our commitment to excellence is built on decades of expertise and
              a rigorous quality management system that ensures consistency,
              durability, and superior craftsmanship across all our leather
              products. We maintain strict quality standards at every stage of
              production.
            </p>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden" data-aos="fade-left">
            <ImageWithFallback
              src="/upholistry.jpg"
              alt="Leather manufacturing process"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />

            {/* Overlay Card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="text-3xl mb-2 text-amber-700">98.5%</div>
              <div className="text-sm text-gray-600">
                Customer Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
