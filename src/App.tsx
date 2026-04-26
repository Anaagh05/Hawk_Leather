import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { useEffect, useState } from "react";

const DEFAULT_UPPER_DESCRIPTION =
  "We combine traditional craftsmanship with modern techniques to create the finest leather products for luxury brands worldwide. From concept to completion, we deliver excellence in every stitch.";

const DEFAULT_LOWER_DESCRIPTION =
  "Founded with a passion for leather, Hawk Exports has grown from a small family workshop to one of the world's leading leather manufacturers. We serve luxury fashion brands, automotive companies, and furniture makers with uncompromising quality.\nOur commitment to sustainable practices and ethical sourcing ensures that every piece we create meets the highest standards of quality while respecting both our craftsmen and the environment.";

interface DescriptionResponse {
  upperDescription?: string | null;
  lowerDescription?: string | null;
}

export default function App() {
  const [upperDescription, setUpperDescription] = useState(
    DEFAULT_UPPER_DESCRIPTION
  );
  const [lowerDescription, setLowerDescription] = useState(
    DEFAULT_LOWER_DESCRIPTION
  );

  useEffect(() => {
    const getDescriptions = async () => {
      try {
        const response = await fetch("https://hawk-leather-backend.vercel.app/api/v1/description/");
        if (!response.ok) {
          return;
        }

        const data: DescriptionResponse = await response.json();
        if (typeof data.upperDescription === "string" && data.upperDescription.trim()) {
          setUpperDescription(data.upperDescription);
        }
        if (typeof data.lowerDescription === "string" && data.lowerDescription.trim()) {
          setLowerDescription(data.lowerDescription);
        }
      } catch (error) {
        console.error("Failed to fetch descriptions:", error);
      }
    };

    getDescriptions();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection description={upperDescription} />
      <AboutSection description={lowerDescription} />
      <ProductsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
