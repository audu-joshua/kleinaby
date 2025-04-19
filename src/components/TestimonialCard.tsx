
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ text, author, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg h-full">
      <div className="flex mb-4 space-x-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star 
            key={i} 
            className="w-5 h-5 text-yellow-400 fill-current transition-transform duration-300 hover:scale-110" 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6">{text}</p>
      <Separator className="mb-4" />
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src={image} alt={author} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <p className="font-semibold">{author}</p>
      </div>
    </Card>
  );
};

export default TestimonialCard;
