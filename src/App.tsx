import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600, // Reduced duration for smoother animations
      easing: "ease-out-cubic", // Using a more performant easing function
      once: true,
      offset: 40,
      disable: "mobile", // Disable on mobile for better performance
      throttleDelay: 99, // Add throttling to reduce calculations
      debounceDelay: 50, // Add debouncing to improve scroll performance
      disableMutationObserver: false, // Enable for dynamic content
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
