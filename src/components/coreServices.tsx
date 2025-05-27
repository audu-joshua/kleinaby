import React from 'react';

export default function CoreServices() {

  const handleOrderClick = () => {
    window.location.href = '/order';
  };
  // Sample service data - replace with your actual content
  const services = [
    {
      id: 1,
      title: "Bulk Water Supply & Distribution",
      description: "KlienAby specializes in large-scale water production and delivery tailored to suit supermarkets, warehouses, hospitals, corporate offices, and logistics hubs.",
      image: "/coreValueFirstImage.webp"
    },
    {
      id: 2,
      title: "Private Label & Custom Branding",
      description: "Stand out with custom-branded bottled water. Perfect for hotels, restaurants, events, and corporate use. We print and apply your brand on premium bottles, making every sip an extension of your image.",
      image: "/j1.webp"
    },
    {
      id: 3,
      title: "Retail & Entrepreneur Partnership Program",
      description: "KlienAby supports aspiring entrepreneurs with wholesale pricing, business guidance, and marketing assets. Whether you're a small kiosk or building a regional network, we're here to help.",
      image: "/c3.webp"
    },
    {
      id: 4,
      title: "Corporate Water Supply",
      description: "Keep your workplace refreshed and productive. Our tailored water plans ensure timely delivery of 19L dispensers or bottled water to keep your employees hydrated.",
      image: "/j1.webp"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
        Our Core Services
      </h2>
      
      {/* Services Grid - 2x2 on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white flex items-center justify-center p-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#797979] md:border-transparent"
          >
            {/* Card Content - Row on desktop (image | content), Column on mobile (image / content) */}
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-stretch w-full">
              {/* Image - Full width on mobile, 40% width on desktop */}
              <div className="md:w-[40%] h-auto md:h-auto">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover md:rounded-lg rounded-none"
                />
              </div>
              
              {/* Content - Text and button */}
              <div className="md:w-[60%] flex flex-col p-4 md:p-0 justify-between">
                <div>
                  <h3 className="text-2xl text-[#000000] font-bold mb-3">{service.title}</h3>
                  <p className="mb-6 text-[#797979]">{service.description}</p>
                </div>
                <button onClick={handleOrderClick} className="bg-[#101828] hover:scale-95 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 w-full md:w-auto md:self-start">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}