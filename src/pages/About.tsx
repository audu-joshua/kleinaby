
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">About KilenAby</h1>
      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          KilenAby is dedicated to delivering pure, refreshing water to homes and businesses across the nation. Our commitment to quality and service has made us a trusted name in water delivery.
        </p>
        <Button>Learn More</Button>
      </Card>
    </div>
  );
};

export default About;
