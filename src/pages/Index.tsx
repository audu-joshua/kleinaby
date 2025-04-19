import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TestimonialCard from "@/components/TestimonialCard";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import WhoWeServe from "@/components/whoWeServe";
import WhyChooseUs from "@/components/whyChooseUS";
import ProductsSection from "@/components/ourProducts";
import PartnerWithUs from "@/components/distribute";
import NationWideDelivery from "@/components/delivery";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="flex flex-col min-h-screen pt-0">
      {/* Hero Section */}
<section className="relative min-h-screen pt-24 md:px-12 pb-16">
  {/* Background Images with responsive switching */}
  <div 
    className="absolute inset-0 hidden md:block bg-cover bg-center z-0" 
    style={{ backgroundImage: "url('/desktopHero.webp')" }}
  />
  <div 
    className="absolute inset-0 block md:hidden bg-cover bg-center z-0" 
    style={{ backgroundImage: "url('/mobileHero.webp')" }}
  />
  
  {/* Darker Overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>
  
  <div className="container mx-auto px-4 md:px-10 h-full flex items-center md:items-end relative z-10">
    <div className="max-w-2xl pt-16 md:pt-0 md:mb-16">
    <h1 
  className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]"
>
  A Precious<br />
  Commodity<br />
  <span className="text-white">Delivered with care.</span>
</h1>      
      <p 
        className="text-lg text-white/90 mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]"
      >
        We source, filter and deliver the clearest, best tasting drinking water to our customers.
      </p>
      
      <div 
        className="space-x-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]"
      >
        <Button 
          size="lg" 
          className="bg-[#101828] hover:bg-[#1d2939] text-white transition-all duration-300 transform hover:scale-105"
          asChild
        >
          <Link to="/products">Get in Touch</Link>
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-white border-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          asChild
        >
          <Link to="/contact">Become a Distributor</Link>
        </Button>
      </div>
    </div>
    
    {/* Water Bottle Image (Hidden on mobile, aligned at bottom on desktop) */}
    <div 
      className="hidden md:block md:flex-1 md:self-end mb-16 ml-8"
    >
      <img src="/bottleWater.png" alt="Premium Water Bottle" className="w-64 lg:w-[450px] h-auto ml-auto transition-all duration-500 hover:translate-y-2" />
    </div>
  </div>
  
  {/* Custom animation keyframes */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}} />
</section>

      {/* Who We Serve Section */}
      <WhoWeServe/>
      

      {/* Why Choose Us Section */}
      <WhyChooseUs/>

      {/* Our Products Section */}
      <ProductsSection />

      {/* Call to Action Section */}
      

      {/* Partner With Us Section */}
      <PartnerWithUs />


      {/* Nationwide Delivery Section */}
      <NationWideDelivery />

      {/* Testimonials Section */}
      <section className="py-16 bg-[#BEEBFF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in text-center">
            What Our Customers Are Saying
          </h2>
          
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in [animation-delay:200ms]">
              <TestimonialCard
                text="The best water delivery service I've ever used. Always on time and their customer service is exceptional. I've never had any issues with delivery schedules."
                author="John Smith"
                rating={5}
                image="/w1.png"
              />
            </div>
            <div className="animate-fade-in [animation-delay:400ms]">
              <TestimonialCard
                text="Great service and quality water. As a business owner, reliable water delivery is crucial. KlienAby has been a game-changer for our office."
                author="Sarah Johnson"
                rating={5}
                image="/w2.png"
              />
            </div>
            <div className="animate-fade-in [animation-delay:600ms]">
              <TestimonialCard
                text="The water quality is exceptional. We've been using their service for our restaurant for over a year now, and the consistency is remarkable."
                author="Michael Chen"
                rating={5}
                image="/w3.png"
              />
            </div>
            <div className="animate-fade-in [animation-delay:800ms]">
              <TestimonialCard
                text="Switched to KlienAby from another provider and couldn't be happier. Their eco-friendly approach and reliable service make them stand out."
                author="Emma Davis"
                rating={5}
                image="/w1.png"
              />
            </div>
          </div>

          {/* Mobile View with Carousel */}
          <div className="md:hidden relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={(api) => {
                api.on('select', () => {
                  setCurrentTestimonial(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard
                    text="The best water delivery service I've ever used. Always on time and their customer service is exceptional."
                    author="John Smith"
                    rating={5}
                    image="/w1.png"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard
                    text="Great service and quality water. Highly recommended for both home and office."
                    author="Sarah Johnson"
                    rating={5}
                    image="/w2.png"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard
                    text="The water quality is exceptional. We've been using their service for our restaurant for over a year now."
                    author="Michael Chen"
                    rating={5}
                    image="/w3.png"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard
                    text="Switched to KlienAby from another provider and couldn't be happier. Their eco-friendly approach is amazing."
                    author="Emma Davis"
                    rating={5}
                    image="/w1.png"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-3 mt-10">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => {
                    // TODO: Implement slide change logic
                  }}
                  className={`
                    relative transition-all duration-500 ease-out
                    ${index === currentTestimonial
                      ? 'w-10 h-2.5 bg-sky-600 rounded-full hover:bg-sky-700'
                      : 'w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400'
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentTestimonial && (
                    <span 
                      className="absolute inset-0 rounded-full bg-sky-400 animate-pulse" 
                      style={{ opacity: 0.3 }} 
                    />
                  )}
                </button>
              ))}
            </div>
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
