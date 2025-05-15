
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      name: "Water Dispenser",
      description: "Premium quality water dispenser for home and office use",
      price: "$49.99",
      image: "/D1.png"
    },
    {
      name: "Sachet Water",
      description: "Pure, refreshing sachet water in convenient packaging",
      price: "$0.99",
      image: "/w1.png"
    },
    {
      name: "Table Water",
      description: "Natural spring water in our signature bottle",
      price: "$2.99",
      image: "/bottleWater.png"
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our range of premium water products designed to keep you hydrated with the purest water possible
        </p>
      </motion.div>
      
      {/* Products Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {products.map((product) => (
          <motion.div key={product.name} variants={item}>
            <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg">
              {/* Product Image */}
              <div className="h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <p className="text-xl font-bold text-[#101828] mb-4">{product.price}</p>
                
                <Link to="/order" className="mt-auto">
                  <Button className="w-full bg-[#101828] hover:bg-[#1d2939] text-white transition-colors">
                    Order Now
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-20 text-center"
      >
        <div className="max-w-3xl mx-auto p-8 rounded-lg bg-gray-50 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Order?</h2>
          <p className="text-gray-600 mb-6">
            Contact our team for bulk orders or custom requirements. We're here to serve your hydration needs.
          </p>
          <Link to="/order">
            <Button className="bg-[#101828] hover:bg-[#1d2939] text-white transition-colors px-8 py-6">
              Place a Custom Order
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Products;
