import { useState, useEffect } from 'react';
import { ChevronDown, AlertCircle, CheckCircle, ShoppingCart, User, Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

// Define TypeScript interfaces for better type checking
interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
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
  address?: string;
  products?: string;
  [key: string]: string | undefined;
}

const productList = [
  { value: 'table-water-50cl', label: 'Table Water 50cl', emoji: '⚫' },
  { value: 'table-water-75cl', label: 'Table Water 75cl', emoji: '⚫' },
  { value: 'table-water-150cl', label: 'Table Water 150cl', emoji: '⚫' },
  { value: 'refill-jar', label: 'Refill Jar', emoji: '⚫' },
  { value: 'sachet-water', label: 'Sachet Water', emoji: '⚫' }
];

export default function ImprovedOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
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
  const [focusedField, setFocusedField] = useState<string>('');

  // Handle the notification progress and visibility
  useEffect(() => {
    let progressTimer: NodeJS.Timeout | undefined;

    if (formStatus.submitted && formStatus.visible) {
      // Start the progress timer
      progressTimer = setInterval(() => {
        setFormStatus(prev => {
          if (prev.progress > 0) {
            return { ...prev, progress: prev.progress - 1 };
          } else {
            // When progress reaches 0, hide the notification
            clearInterval(progressTimer);
            return { ...prev, visible: false, submitted: false };
          }
        });
      }, 30); // 3 seconds total (100 * 30ms)
    }

    return () => {
      if (progressTimer) clearInterval(progressTimer);
    };
  }, [formStatus.submitted, formStatus.visible]);

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
    if (!formData.address.trim()) newErrors.address = "Address is required";

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

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        // Prepare order data for email
        const orderData = {
          customerName: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          products: formData.products
            .map((product, index) => ({
              product: productList.find(p => p.value === product)?.label || product,
              quantity: formData.quantities[index]
            }))
            .filter(item => item.product && parseInt(item.quantity) > 0),
          deliveryDate: formData.deliveryDate,
          comments: formData.comments,
          orderDate: new Date().toLocaleString()
        };

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        setFormStatus({
          submitted: true,
          success: true,
          message: "🎉 Order received! We'll reach out to you soon.",
          visible: true,
          progress: 100
        });

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
            address: '',
            products: ['', '', '', '', ''],
            quantities: ['0', '0', '0', '0', '0'],
            deliveryDate: '',
            comments: ''
          });
        }, 2000);

      } catch (error) {
        setFormStatus({
          submitted: true,
          success: false,
          message: "❌ Failed to send order. Please try again.",
          visible: true,
          progress: 100
        });
      }
    } else {
      setFormStatus({
        submitted: true,
        success: false,
        message: "⚠️ Please correct the errors in the form.",
        visible: true,
        progress: 100
      });
    }
  };

  const getTotalItems = () => {
    return formData.quantities.reduce((total, qty) => total + parseInt(qty || '0'), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <ShoppingCart className="w-8 h-8 text-gray-900" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Place Your Water Order</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh, clean water delivered right to your doorstep. Complete the form below and we'll handle the rest!
          </p>
        </div>

        {/* Fixed positioned notification */}
        {formStatus.visible && (
          <div className="fixed bottom-6 right-6 z-50 max-w-sm">
            <div className={`rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
              formStatus.success
                ? 'bg-gradient-to-r from-gray-700 to-gray-900'
                : 'bg-gradient-to-r from-red-700 to-red-900'
            }`}>
              <div className="relative">
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-white/30 transition-all duration-75 ease-linear" 
                  style={{ width: `${formStatus.progress}%` }}
                ></div>
                
                <div className="p-4 flex items-center">
                  {formStatus.success ? (
                    <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                  )}
                  <p className="text-white font-medium text-sm">{formStatus.message}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Progress indicator */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-6">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <span className="font-medium">Order Details</span>
              </div>
              {getTotalItems() > 0 && (
                <div className="bg-white/20 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">{getTotalItems()} items selected</span>
                </div>
              )}
            </div>
          </div>

          <div className="p-8 space-y-8">
            
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-gray-900" />
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                        errors.name
                          ? 'border-red-300 bg-red-50'
                          : focusedField === 'name'
                            ? 'border-gray-500 bg-gray-50'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                      } focus:outline-none focus:ring-0`}
                    />
                    <User className={`absolute right-3 top-3 w-5 h-5 transition-colors ${
                      focusedField === 'name' ? 'text-gray-900' : 'text-gray-400'
                    }`} />
                  </div>
                  {errors.name && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.name}</p>}
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                        errors.phone
                          ? 'border-red-300 bg-red-50'
                          : focusedField === 'phone'
                            ? 'border-gray-500 bg-gray-50'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                      } focus:outline-none focus:ring-0`}
                    />
                    <Phone className={`absolute right-3 top-3 w-5 h-5 transition-colors ${
                      focusedField === 'phone' ? 'text-gray-900' : 'text-gray-400'
                    }`} />
                  </div>
                  {errors.phone && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.phone}</p>}
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                      errors.email
                        ? 'border-red-300 bg-red-50'
                        : focusedField === 'email'
                          ? 'border-gray-500 bg-gray-50'
                          : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    } focus:outline-none focus:ring-0`}
                  />
                  <Mail className={`absolute right-3 top-3 w-5 h-5 transition-colors ${
                    focusedField === 'email' ? 'text-gray-900' : 'text-gray-400'
                  }`} />
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email}</p>}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <div className="relative">
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('address')}
                    onBlur={() => setFocusedField('')}
                    rows={3}
                    placeholder="Enter your complete delivery address"
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 resize-none ${
                      errors.address
                        ? 'border-red-300 bg-red-50'
                        : focusedField === 'address'
                          ? 'border-gray-500 bg-gray-50'
                          : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    } focus:outline-none focus:ring-0`}
                  />
                </div>
                {errors.address && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.address}</p>}
              </div>
            </div>

            {/* Product Selection Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-gray-900" />
                <h3 className="text-lg font-semibold text-gray-900">Select Products *</h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                      <div className="flex-1">
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${index > 0 ? 'sr-only' : ''}`}>
                          {index === 0 ? 'Product' : ''}
                        </label>
                        <div className="relative">
                          <select
                            value={formData.products[index]}
                            onChange={(e) => handleProductChange(index, e.target.value)}
                            className={`w-full px-4 py-3 border-2 rounded-xl appearance-none transition-all duration-200 ${
                              errors.products && index === 0
                                ? 'border-red-300 bg-red-50'
                                : 'border-gray-200 bg-white hover:border-gray-300 focus:border-gray-500 focus:bg-gray-50'
                            } focus:outline-none focus:ring-0`}
                          >
                            <option value="">Choose a product...</option>
                            {productList.map((product) => (
                              <option key={product.value} value={product.value}>
                                {product.emoji} {product.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div className="w-full sm:w-32">
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${index > 0 ? 'sr-only' : ''}`}>
                          {index === 0 ? 'Quantity' : ''}
                        </label>
                        <input
                          type="number"
                          value={formData.quantities[index]}
                          onChange={(e) => handleQuantityChange(index, e.target.value)}
                          className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            errors.products && index === 0
                              ? 'border-red-300 bg-red-50'
                              : 'border-gray-200 bg-white hover:border-gray-300 focus:border-gray-500 focus:bg-gray-50'
                          } focus:outline-none focus:ring-0`}
                          min="0"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {errors.products && (
                  <p className="mt-4 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />{errors.products}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-gray-900" />
                <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Delivery Date
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('deliveryDate')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                      focusedField === 'deliveryDate'
                        ? 'border-gray-500 bg-gray-50'
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    } focus:outline-none focus:ring-0`}
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Instructions
                  </label>
                  <div className="relative">
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('comments')}
                      onBlur={() => setFocusedField('')}
                      rows={3}
                      placeholder="Any special delivery instructions..."
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 resize-none ${
                        focusedField === 'comments'
                          ? 'border-gray-500 bg-gray-50'
                          : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                      } focus:outline-none focus:ring-0`}
                    />
                    <MessageSquare className={`absolute right-3 top-3 w-5 h-5 transition-colors ${
                      focusedField === 'comments' ? 'text-gray-900' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gray-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Place Order Now</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}