import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    postcode: '',
    phone: '',
    email: '',
    signNda: false
  });
  
  const [notification, setNotification] = useState({
    show: false,
    success: false,
    message: '',
    progress: 100
  });

  const [progressInterval, setProgressInterval] = useState(null);

  // Handle cleanup of interval when component unmounts
  useEffect(() => {
    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [progressInterval]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if NDA checkbox has been ticked
    if (!formData.signNda) {
      setNotification({
        show: true,
        success: false,
        message: 'Please agree to the NDA before submitting.',
        progress: 100
      });
      
      startProgressCountdown();
      return;
    }
    
    // Always throw an error since no mail service is attached yet
    setNotification({
      show: true,
      success: false,
      message: 'Email service not configured. Please set up mail service.',
      progress: 100
    });
    
    startProgressCountdown();
  };

  const startProgressCountdown = () => {
    // Clear any existing interval
    if (progressInterval) {
      clearInterval(progressInterval);
    }
    
    // Set up a new countdown
    const interval = setInterval(() => {
      setNotification(prev => {
        const newProgress = prev.progress - 2;
        
        if (newProgress <= 0) {
          clearInterval(interval);
          return { ...prev, show: false, progress: 100 };
        }
        
        return { ...prev, progress: newProgress };
      });
    }, 100);
    
    setProgressInterval(interval);
  };

  return (
    <div id="contact-form" className="w-full bg-white shadow-lg rounded-xl overflow-hidden py-16 px-4 md:px-12 lg:px-20 relative">
      {notification.show && (
        <div className="fixed bottom-4 right-4 p-4 rounded-lg shadow-lg max-w-xs z-50 bg-[#101828] text-white">
          <div className="flex items-center mb-2">
            {notification.success ? (
              <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
            <p className="text-white">
              {notification.message}
            </p>
          </div>
          {/* Animated progress bar */}
          <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#BEEBFF] transition-all duration-100 ease-linear"
              style={{ width: `${notification.progress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col shadow-lg rounded-3xl md:flex-row">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white md:rounded-bl-3xl rounded-3xl md:rounded-none md:rounded-tl-3xl p-6 md:p-10">
          <h2 className="text-3xl text-center md:text-start md:text-4xl font-bold text-[#000000] mb-4">Get in Touch</h2>
          <p className="text-[#797979] text-center md:text-start mb-8">Together, we can provide healthy hydration to Nigeria.</p>
          
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <div className="border-b border-gray-300 py-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Contact Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-1 py-2 text-[#797979] focus:outline-none"
                />
              </div>
            </div>
            
            {/* Street Address */}
            <div>
              <div className="border-b border-gray-300 py-2">
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full px-1 py-2 text-[#797979] focus:outline-none"
                />
              </div>
            </div>
            
            {/* City and Postcode - Flexed */}
            <div className="flex gap-6">
              <div className="w-2/3">
                <div className="border-b border-gray-300 py-2">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-1 py-2 text-[#797979] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-1/3">
                <div className="border-b border-gray-300 py-2">
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    placeholder="Postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-1 py-2 text-[#797979] focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            {/* Phone and Email - Flexed */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="border-b border-gray-300 py-2">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Contact Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-1 py-2 text-[#797979] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="border-b border-gray-300 py-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-1 py-2 text-[#797979] focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            {/* NDA Checkbox */}
            <div className="mt-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="signNda"
                  checked={formData.signNda}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-500 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-[#000000] text-sm">I want to protect my data by signing an NDA</span>
              </label>
            </div>
            
            {/* Submit Button */}
            <div className="mt-8 w-full">
              <button
                onClick={handleSubmit}
                className="w-full rounded-full px-8 py-4 bg-[#101828] text-white font-medium hover:bg-[#1c2b45] transition-all duration-300"
              >
                Supply
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-10 flex flex-row justify-between text-[10px] md:text-base md:flex-row gap-8">
            {/* Phone */}
            <div className="flex items-start">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-[#000000] font-medium">Phone</p>
                <p className="text-[#1182E2]">+234 800 123 4567</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start">
              <div className="mt-1">
                <svg className="w-5 h-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-[#000000] font-medium">Email</p>
                <p className="text-[#1182E2]">orders@klienaby.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Section - Hidden on mobile */}
        <div className="hidden md:block md:w-1/2">
          <img 
            src="/contactFormImage.webp" 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}