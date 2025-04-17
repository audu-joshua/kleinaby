
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TestimonialCard from "@/components/TestimonialCard";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              A precious commodity. Delivered with care.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're here to serve pure, fresh water to your doorstep.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Supermarkets</h3>
              <p className="text-gray-600">Bulk water supply for retail stores</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Residential</h3>
              <p className="text-gray-600">Home delivery services</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Corporate</h3>
              <p className="text-gray-600">Office water solutions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Why Choose KilenAby?</h2>
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-blue-500"></div>
              <div>
                <h3 className="font-semibold mb-2">Quality Break-Free</h3>
                <p className="text-gray-600">Premium water delivery service you can trust</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-blue-500"></div>
              <div>
                <h3 className="font-semibold mb-2">24/7/365 Service</h3>
                <p className="text-gray-600">Round-the-clock delivery when you need it</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-blue-500"></div>
              <div>
                <h3 className="font-semibold mb-2">96% Success Rate</h3>
                <p className="text-gray-600">High satisfaction rate among our customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <img src="/placeholder.svg" alt="Water Bottle" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bottled Water</h3>
              <p className="text-gray-600 mb-4">Pure and refreshing bottled water</p>
              <Button className="w-full">Buy Now</Button>
            </Card>
            <Card className="p-6">
              <img src="/placeholder.svg" alt="Spring Water" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spring Water</h3>
              <p className="text-gray-600 mb-4">Natural spring water from selected sources</p>
              <Button className="w-full">Buy Now</Button>
            </Card>
            <Card className="p-6">
              <img src="/placeholder.svg" alt="Water Dispenser" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Water Dispenser</h3>
              <p className="text-gray-600 mb-4">Modern water dispensers for your convenience</p>
              <Button className="w-full">Buy Now</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Partner With Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/placeholder.svg" alt="Partner 1" className="w-full h-48 object-cover rounded-lg" />
            <img src="/placeholder.svg" alt="Partner 2" className="w-full h-48 object-cover rounded-lg" />
            <img src="/placeholder.svg" alt="Partner 3" className="w-full h-48 object-cover rounded-lg" />
            <img src="/placeholder.svg" alt="Partner 4" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Nationwide Delivery Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">We Deliver Nationwide</h2>
              <p className="mb-6">Experience our premium water delivery service across the country</p>
              <Button variant="secondary">Track Order</Button>
            </div>
            <img src="/placeholder.svg" alt="Delivery Van" className="w-full md:w-1/2 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              text="The best water delivery service I've ever used. Always on time and professional."
              author="John Smith"
              rating={5}
            />
            <TestimonialCard
              text="Great service and quality water. Highly recommended for both home and office."
              author="Jane Doe"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <form className="space-y-6">
                <div>
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Card>
            <div>
              <img src="/placeholder.svg" alt="Contact" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Never miss our updates</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest news and offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
