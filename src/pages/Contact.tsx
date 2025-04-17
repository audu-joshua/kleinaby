
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <Card className="p-6 max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <Input type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <Input type="email" placeholder="Your email" />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <Textarea placeholder="Your message" />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
