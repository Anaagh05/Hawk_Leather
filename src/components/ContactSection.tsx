import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { FadeUp, FadeRight, FadeLeft, ZoomIn, StaggerContainer, StaggerItem } from "./ui/motion";

type ProductInterestOption =
  | "handbags"
  | "automotive"
  | "furniture"
  | "accessories"
  | "custom";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  productInterest: ProductInterestOption | "";
  details: string;
}

const NAME_REGEX = /^[A-Za-z][A-Za-z '\-]*$/;
const COMPANY_REGEX = /^[A-Za-z][A-Za-z0-9 '&\-]*$/;
const PHONE_REGEX = /^\d{10}$/;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidName = (value: string) => NAME_REGEX.test(value);
  const isValidCompany = (value: string) => COMPANY_REGEX.test(value);
  const isValidPhone = (value: string) => PHONE_REGEX.test(value);

  const formHandling = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: ContactFormData = {
      firstName: (formData.get("firstName") || "").toString().trim(),
      lastName: (formData.get("lastName") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      company: (formData.get("company") || "").toString().trim(),
      productInterest: (
        formData.get("productInterest") || ""
      ).toString() as ContactFormData["productInterest"],
      details: (formData.get("details") || "").toString().trim(),
    };

    const missing: string[] = [];
    if (!data.firstName) missing.push("First Name");
    if (!data.lastName) missing.push("Last Name");
    if (!data.email) missing.push("Email");
    if (!data.phone) missing.push("Phone");
    if (!data.company) missing.push("Company");
    if (!data.productInterest) missing.push("Product Interest");
    if (!data.details) missing.push("Project Details");

    if (missing.length) {
      toast.error(`Please fill: ${missing.join(", ")}`);
      return;
    }

    const formatErrors: string[] = [];
    if (!isValidName(data.firstName)) {
      formatErrors.push("First Name must contain only letters, spaces, ' or -");
    }
    if (!isValidName(data.lastName)) {
      formatErrors.push("Last Name must contain only letters, spaces, ' or -");
    }
    if (!isValidCompany(data.company)) {
      formatErrors.push(
        "Company must start with a letter and contain letters, numbers, spaces, '&, ' or -"
      );
    }
    if (!isValidPhone(data.phone)) {
      formatErrors.push("Phone must be exactly 10 digits");
    }
    if (data.details.length < 10) {
      formatErrors.push("Project Details must be at least 10 characters");
    }

    if (formatErrors.length) {
      toast.error(formatErrors.join("\n"));
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xrbyazva", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success(
          "Quote requested successfully! We'll get back to you within 24 hours."
        );
        form.reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Factory Location",
      content: (
        <>
          74-C
          <br />
          Leather Complex
          <br />
          Jalandhar-144021
        </>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <>
          +919872664468
          <br />
          +917696300088
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: "addicthawk9@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: (
        <>
          Mon - Sat: 9:00 AM - 6:00 PM
          <br />
          Sun: Closed
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your leather manufacturing needs? Our team of
            experts is here to help you bring your vision to life.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-8">
          <FadeRight className="lg:col-span-1">
            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {contactCards.map((card, index) => (
                <StaggerItem key={index}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <card.icon className="w-6 h-6 text-amber-700" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-gray-900">{card.title}</h4>
                          <p className="text-gray-600">{card.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeRight>

          <FadeLeft className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={formHandling}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        required
                        autoComplete="given-name"
                        pattern="[A-Za-z][A-Za-z '\\-]*"
                        onInput={(ev) => {
                          const input = ev.currentTarget as HTMLInputElement;
                          input.value = input.value.replace(
                            /[^A-Za-z '\\-]/g,
                            ""
                          );
                        }}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        required
                        autoComplete="family-name"
                        pattern="[A-Za-z][A-Za-z '\\-]*"
                        onInput={(ev) => {
                          const input = ev.currentTarget as HTMLInputElement;
                          input.value = input.value.replace(
                            /[^A-Za-z '\\-]/g,
                            ""
                          );
                        }}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        autoComplete="email"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="10 digit phone"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        minLength={10}
                        maxLength={10}
                        required
                        onInput={(ev) => {
                          const input = ev.currentTarget as HTMLInputElement;
                          const digits = input.value.replace(/[^0-9]/g, "");
                          input.value = digits.slice(0, 10);
                        }}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Company *
                    </label>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Your Company Name"
                      required
                      pattern="[A-Za-z][A-Za-z0-9 '&\\-]*"
                      onInput={(ev) => {
                        const input = ev.currentTarget as HTMLInputElement;
                        input.value = input.value
                          .replace(/[^A-Za-z0-9 ' &\\-]/g, "")
                          .replace(/^[^A-Za-z]+/g, "");
                      }}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Product Interest *
                    </label>
                    <select
                      name="productInterest"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      defaultValue=""
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select a product category
                      </option>
                      <option value="handbags">Shoe Upper & Lining Leather</option>
                      <option value="automotive">Sports Goods Leather</option>
                      <option value="furniture">Furniture Upholstery</option>
                      <option value="accessories">Garments & Goods</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Project Details *
                    </label>
                    <Textarea
                      name="details"
                      placeholder="Please describe your project requirements, quantities, timeline, and any specific needs..."
                      rows={5}
                      minLength={10}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <ZoomIn delay={0.1}>
                    <Button
                      type="submit"
                      className="w-full bg-amber-700 hover:bg-amber-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </ZoomIn>
                </form>
              </CardContent>
            </Card>
          </FadeLeft>
        </div>
      </div>
    </section>
  );
}
