
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      name: "Premium Water Bottle",
      description: "Pure, refreshing water in our signature bottle",
      price: "$2.99"
    },
    {
      name: "Spring Water",
      description: "Natural spring water from selected sources",
      price: "$1.99"
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.name} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <Button>Order Now</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
