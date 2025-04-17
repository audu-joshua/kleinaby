
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Home Delivery",
      description: "Regular water delivery to your doorstep"
    },
    {
      title: "Business Supply",
      description: "Bulk water supply for offices and businesses"
    },
    {
      title: "Custom Solutions",
      description: "Tailored water delivery plans for special needs"
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Button>Learn More</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
