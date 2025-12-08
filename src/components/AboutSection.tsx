import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Clock } from "lucide-react";
import { FadeUp, FadeRight, FadeLeft, ZoomIn, StaggerContainer, StaggerItem } from "./ui/motion";

export function AboutSection() {
  const stats = [
    { icon: Clock, label: "Years in Business", value: "25+" },
    { icon: Award, label: "Customer Satisfaction Certifications", value: "98.5%" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeRight>
            <div>
              <h2 className="mb-6 text-amber-700">
                Crafting Excellence Since 1999
              </h2>
              <p className="text-gray-600 mb-6">
                Founded with a passion for leather, Hawk Exports has
                grown from a small family workshop to one of the world's leading
                leather manufacturers. We serve luxury fashion brands, automotive
                companies, and furniture makers with uncompromising quality.
              </p>
              <p className="text-gray-600 mb-8">
                Our commitment to sustainable practices and ethical sourcing
                ensures that every piece we create meets the highest standards of
                quality while respecting both our craftsmen and the environment.
              </p>

              <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
                {stats.map((stat, index) => (
                  <StaggerItem key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-700 rounded-lg mb-3">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl mb-1 text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeRight>

          <FadeLeft className="relative overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1451930348779-424a8e3c7835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBsZWF0aGVyJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc1OTQyNTc1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Raw leather materials"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <ZoomIn delay={0.2}>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-700 rounded-lg flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </ZoomIn>
          </FadeLeft>
        </div>
      </div>
    </section>
  );
}
