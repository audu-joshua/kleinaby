import { useNavigate } from 'react-router-dom'; // Add this import


const WhyChooseKilenAby = () => {

      const navigate = useNavigate();

    const reasons = [
      {
        number: "1",
        title: "Neatly Produced",
        description: "Quality-controlled water from natural sources"
      },
      {
        number: "2",
        title: "Custom Branding Available",
        description: "For businesses who want to stand out"
      },
      {
        number: "3",
        title: "Bulk Supply & Distribution",
        description: "Fast, large-scale logistics across Nigeria"
      },
      {
        number: "4",
        title: "NAFDAC Certified",
        description: "Compliant with national safety and health standards"
      }
    ];

    const navigateToOrder = () => {
    navigate('/order');
  };
  
    return (
      <section className="py-16 bg-[#F8F8F8] md:px-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose KilenAby? <p className="text-[#797979] text-center text-base">Clean. Reliable. Locally Sourced.</p></h2>
          
          {/* Mobile View - Stacked design with image at bottom */}
          <div className="md:hidden">
          <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1182E2] text-white font-semibold">
                        {reason.number}
                      </div>
                      {index < reasons.length - 1 && (
                        <div className="w-[2px] h-8 bg-[#1182E2] mt-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{reason.title}</h3>
                      <p className="text-[#797979]">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            
            {/* Place Order Button */}
            <div className="flex justify-center mt-8 mb-12">
              <button className="px-8 py-3 rounded-full bg-[#101828] text-white font-medium transition-colors hover:bg-[#1d2939]">
                Place Order Now
              </button>
            </div>
            
            {/* Tilted Image Card */}
            <div className="relative h-96 w-full max-w-lg">
              {/* Background card with tilt effect - making all edges visible */}
              <div className="absolute top-1 left-1 right-1 bottom-1 bg-[#1182E2] rounded-lg transform rotate-2"></div>
              {/* Image card */}
              <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-1">
                <img 
                  src="/whyChooseUs.webp" 
                  alt="Water delivery service" 
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
          
          {/* Desktop View - Side by side layout */}
          <div className="hidden md:flex items-center gap-12">
            {/* Content on the left */}
            <div className="flex-1">
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1182E2] text-white font-semibold">
                        {reason.number}
                      </div>
                      {index < reasons.length - 1 && (
                        <div className="w-[2px] h-8 bg-[#1182E2] mt-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{reason.title}</h3>
                      <p className="text-[#797979]">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Place Order Button */}
              <div className="mt-12 flex items-center justify-center">
                <button onClick={navigateToOrder} className="px-8 py-3 rounded-full bg-[#101828] text-white font-medium transition-colors hover:bg-[#1d2939]">
                  Place Order Now
                </button>
              </div>
            </div>
  
            {/* Tilted Image on the right */}
            <div className="relative h-96 w-full max-w-lg">
              {/* Background card with tilt effect - making all edges visible */}
              <div className="absolute top-1 left-1 right-1 bottom-1 bg-[#1182E2] rounded-lg transform rotate-2"></div>
              {/* Image card */}
              <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-1">
                <img 
                  src="/whyChooseUs.webp" 
                  alt="Water delivery service" 
                  className="w-full h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseKilenAby;