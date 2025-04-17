
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
}

const TestimonialCard = ({ text, author, rating }: TestimonialCardProps) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star 
            key={i} 
            className="w-5 h-5 text-yellow-400 fill-current transition-transform duration-300 hover:scale-110" 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <p className="font-semibold">{author}</p>
    </Card>
  );
};

export default TestimonialCard;
