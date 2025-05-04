
import { useState, useEffect } from 'react';
import { ChevronDown, AlertCircle, CheckCircle } from 'lucide-react';

// Define TypeScript interfaces for better type checking
interface FormData {
  name: string;
  phone: string;
  email: string;
  products: string[];
  quantities: string[];
  deliveryDate: string;
  comments: string;
}

interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
  visible: boolean;
  progress: number;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  products?: string;
  [key: string]: string | undefined;
}

export default function PlaceOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    products: ['', '', '', '', ''],
    quantities: ['0', '0', '0', '0', '0'],
    deliveryDate: '',
    comments: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: '',
    visible: false,
    progress: 100
  });

  const [errors, setErrors] = useState<FormErrors>({});
  
  // Handle the notification progress and visibility
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    let progressTimer: NodeJS.Timeout | undefined;
    
    if (formStatus.submitted) {
      // Show the notification
      setFormStatus(prev => ({ ...prev, visible: true, progress: 100 }));
      
      // Start the progress timer
      progressTimer = setInterval(() => {
        setFormStatus(prev => {
          if (prev.progress > 0) {
            return { ...prev, progress: prev.progress - 1 };
          } else {
            clearInterval(progressTimer);
            return prev;
          }
        });
      }, 30); // Decrease by 1% every 30ms for a ~3 second duration
      
      // Hide after animation completes
      timer = setTimeout(() => {
        setFormStatus(prev => ({ ...prev, visible: false }));
      }, 3000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
      if (progressTimer) clearInterval(progressTimer);
    };
  }, [formStatus.submitted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleProductChange = (index: number, value: string) => {
    const newProducts = [...formData.products];
    newProducts[index] = value;
    setFormData(prev => ({
      ...prev,
      products: newProducts
    }));
    
    // Clear product-related errors
    setErrors(prev => ({
      ...prev,
      products: undefined
    }));
  };

  const handleQuantityChange = (index: number, value: string) => {
    // Ensure quantity is at least 0
    const sanitizedValue = value === '' ? '0' : value;
    
    const newQuantities = [...formData.quantities];
    newQuantities[index] = sanitizedValue;
    setFormData(prev => ({
      ...prev,
      quantities: newQuantities
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Required fields validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Check if at least one product with quantity is selected
    const hasProduct = formData.products.some((product, index) => 
      product && parseInt(formData.quantities[index]) > 0
    );
    
    if (!hasProduct) {
      newErrors.products = "Please select at least one product with quantity";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would handle the actual order submission
      setFormStatus({
        submitted: true,
        success: true,
        message: "Your order has been placed successfully!",
        visible: true,
        progress: 100
      });
    } else {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please correct the errors in the form.",
        visible: true,
        progress: 100
      });
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-12 lg:px-20 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Please complete the form</h2>
          <p className="mt-2 text-lg text-gray-600">
            Please complete the order form for any of our products. We will deliver as soon as possible.
          </p>
        </div>

        {/* Fixed positioned notification at bottom right */}
        {formStatus.visible && (
          <div className="fixed bottom-6 right-6 z-50 max-w-sm">
            <div className={`rounded-md shadow-lg overflow-hidden ${formStatus.success ? 'bg-[#101828]' : 'bg-[#101828]'}`}>
              <div className="relative">
                {/* Progress bar */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-[#BEEBFF]" 
                  style={{ width: `${formStatus.progress}%`, transition: 'width 0.1s linear' }}
                ></div>
                
                <div className="p-4 flex">
                  <div className="border-l-4 border-[#BEEBFF] pl-3 flex-1">
                    <div className="flex items-center">
                      {formStatus.success ? (
                        <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                      )}
                      <p className="text-white font-medium">{formStatus.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#6F7482]">
                Your Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-[#B8BCCA]`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#6F7482]">
                Your Phone*
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-[#B8BCCA]`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#6F7482]">
              Your Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-[#B8BCCA]`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Product Selection and Quantity */}
          <div className="space-y-2">
            <div className={errors.products ? "pb-1 border-red-500" : ""}>
              {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 mb-2">
                  <div className="relative">
                    <label htmlFor={`product-${index}`} className={index === 0 ? "block text-sm font-medium text-[#6F7482]" : "sr-only"}>
                      {index === 0 ? "Select products to order*" : ""}
                    </label>
                    <div className="relative">
                      <select
                        id={`product-${index}`}
                        value={formData.products[index]}
                        onChange={(e) => handleProductChange(index, e.target.value)}
                        className={`appearance-none mt-1 block w-full border ${errors.products && index === 0 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700 ${!formData.products[index] ? 'text-[#B8BCCA]' : ''}`}
                      >
                        <option value="" className="text-[#B8BCCA]">Select a product</option>
                        <option value="bottled-water">Bottled Water</option>
                        <option value="water-dispenser">Water Dispenser</option>
                        <option value="custom-label">Custom Label Water</option>
                        <option value="water-cooler">Water Cooler</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor={`quantity-${index}`} className={index === 0 ? "block text-sm font-medium text-[#6F7482]" : "sr-only"}>
                      {index === 0 ? "Quantity*" : ""}
                    </label>
                    <input
                      type="number"
                      id={`quantity-${index}`}
                      value={formData.quantities[index]}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                      className={`mt-1 block w-full border ${errors.products && index === 0 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-[#B8BCCA]`}
                      min="0"
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}
              {errors.products && <p className="mt-1 text-sm text-red-500">{errors.products}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-[#6F7482]">
              Requested delivery date
            </label>
            <input
              type="date"
              name="deliveryDate"
              id="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-[#B8BCCA]"
            />
          </div>

          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-[#6F7482]">
              Comments
            </label>
            <textarea
              name="comments"
              id="comments"
              rows={4}
              value={formData.comments}
              onChange={handleInputChange}
              placeholder="Drop additional note"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-[#B8BCCA]"
            />
          </div>

          <div className="pt-4">
            <button
              onClick={handleSubmit}
              className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none rounded-full transition-colors"
            >
              Place Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
