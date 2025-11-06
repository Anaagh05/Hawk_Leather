import { CheckCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ScrollReveal from "./ScrollReveal";

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
    <ScrollReveal as="section" id="process" className="py-20 bg-gray-50" animation="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="mb-4 text-gray-900">Our Manufacturing Process</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece of leather we produce follows a carefully orchestrated
              process that combines time-honored traditions with cutting-edge
              technology.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 75} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          id="quality-assurance"
        >
          <div>
            <ScrollReveal animation="fade-right">
              <h3 className="mb-6 text-amber-700">Quality Assurance Standards</h3>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-gray-600 mb-8">
                Our commitment to excellence is built on decades of expertise and
                a rigorous quality management system that ensures consistency,
                durability, and superior craftsmanship across all our leather
                products. We maintain strict quality standards at every stage of
                production.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {qualityFeatures.map((feature, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={200 + index * 40} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal className="relative overflow-hidden" animation="fade-right" delay={700}>
            <ImageWithFallback
              src="/upholistry.jpg"
              alt="Leather manufacturing process"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />

            {/* Overlay Card */}
            <ScrollReveal className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs" animation="zoom-in" delay={400}>
              <div className="text-3xl mb-2 text-amber-700">98.5%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction Rate</div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </ScrollReveal>
  );
}
