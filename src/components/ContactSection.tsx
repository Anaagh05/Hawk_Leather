import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="mb-4 text-gray-900"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Get In Touch
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to discuss your leather manufacturing needs? Our team of
            experts is here to help you bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <div className="space-y-6">
              <Card data-aos="fade-up" data-aos-delay="0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-gray-900">Factory Location</h4>
                      <p className="text-gray-600">
                        1<br />
                        Leather Complex
                        <br />
                        Jalandhar, Punjab 144001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-aos="fade-up" data-aos-delay="75">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-gray-900">Phone</h4>
                      <p className="text-gray-600">
                        Sales: +39 055 123 4567
                        <br />
                        Support: +39 055 123 4568
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-aos="fade-up" data-aos-delay="150">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        sales@leathercraft.com
                        <br />
                        info@leathercraft.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-aos="fade-up" data-aos-delay="225">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">
                        Mon - Fri: 8:00 AM - 6:00 PM
                        <br />
                        Sat: 9:00 AM - 2:00 PM
                        <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <Card>
              <CardHeader data-aos="fade-up">
                <CardTitle>Request a Quote</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </CardHeader>
              <CardContent data-aos="fade-up" data-aos-delay="75">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    const data = {
                      firstName: (formData.get("firstName") || "")
                        .toString()
                        .trim(),
                      lastName: (formData.get("lastName") || "")
                        .toString()
                        .trim(),
                      email: (formData.get("email") || "").toString().trim(),
                      phone: (formData.get("phone") || "").toString().trim(),
                      company: (formData.get("company") || "")
                        .toString()
                        .trim(),
                      productInterest: (
                        formData.get("productInterest") || ""
                      ).toString(),
                      details: (formData.get("details") || "")
                        .toString()
                        .trim(),
                    };

                    // Basic required field checks
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

                    // Log and success toast
                    // eslint-disable-next-line no-console
                    console.log("Quote Request:", data);
                    toast.success("Quote Requested successfully");
                    form.reset();
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        First Name *
                      </label>
                      <Input name="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Last Name *
                      </label>
                      <Input name="lastName" placeholder="Doe" />
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
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Phone *
                      </label>
                      <Input type="tel" name="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Company *
                    </label>
                    <Input name="company" placeholder="Your Company Name" />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Product Interest *
                    </label>
                    <select
                      name="productInterest"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="" selected disabled>Select a product category</option>
                      <option value="handbags">Luxury Handbags</option>
                      <option value="automotive">Automotive Leather</option>
                      <option value="furniture">Furniture Upholstery</option>
                      <option value="accessories">Accessories & Goods</option>
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
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-700 hover:bg-amber-800"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
