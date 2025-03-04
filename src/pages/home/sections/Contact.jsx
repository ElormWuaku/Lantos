import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, User, MessageCircle, Phone, Send } from 'lucide-react';
import { contactbg } from '../../../assets/images';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactNumber = "+233203390633";

  // Updated color palette to match Hero component
  const brandColors = {
    primary: "#4AA625",    // Green as primary (from Hero)
    secondary: "#FC940E",  // Orange accent (from Hero)
    dark: "#222222",       // Dark text color (from Hero)
    light: "#FFFFFF",      // White (from Hero)
    lightGray: "#F5F5F5",  // Light gray for backgrounds
    mediumGray: "#E0E0E0", // Medium gray for borders
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const result = await emailjs.send(
        'service_n4uqmrx', // service ID
        'template_2lt8sfy', // template ID
        formData,
        'UMyYLzPCAfK2-RheN' // public key
      );

      console.log('Email successfully sent:', result);
      setStatusMessage('Message sent successfully! Thank you for reaching out.');
      
      // Reset form after successful submission
      setFormData({
        from_name: '',
        from_email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section 
      className="relative bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `url(${contactbg})` }}
      id="contact"
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section heading with accent color combination */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span style={{ color: brandColors.secondary }}>Contact</span> <span style={{ color: brandColors.light }}>Us</span>
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ background: `linear-gradient(to right, ${brandColors.secondary}, ${brandColors.primary})` }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="rounded-lg self-center p-8 shadow-lg"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6" style={{ color: brandColors.dark }}>
              Get In <span style={{ color: brandColors.secondary }}>Touch</span>
            </h3>
            
            <p className="text-lg leading-relaxed mb-8" style={{ color: brandColors.dark }}>
              Have questions or want to learn more? We would love to hear from you. Fill out the form or give us a call and our team will get back to you as soon as possible.
            </p>
            
            {/* Contact info with icons */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${brandColors.primary}15` }}>
                  <Phone size={20} style={{ color: brandColors.primary }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: brandColors.dark }}>Phone</h4>
                  <a 
                    href={`tel:${contactNumber}`} 
                    className="text-gray-600 hover:underline transition-colors duration-300"
                  >
                    {contactNumber}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${brandColors.secondary}15` }}>
                  <Mail size={20} style={{ color: brandColors.secondary }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: brandColors.dark }}>Email</h4>
                  <a 
                    href="mailto:info@lantoscreative.com" 
                    className="text-gray-600 hover:underline transition-colors duration-300"
                  >
                    lantoscreativeconcept@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${brandColors.primary}15` }}>
                  <MessageCircle size={20} style={{ color: brandColors.primary }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: brandColors.dark }}>Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p className="text-gray-600">Saturday: 10am - 2pm</p>
                </div>
              </div>
            </div>
            
            {/* Call to action button */}
            <motion.a
              href={`tel:${contactNumber}`}
              className="w-full flex items-center justify-center text-white px-6 py-3 rounded-md"
              style={{ backgroundColor: brandColors.secondary }}
              whileHover={{ scale: 1.02, backgroundColor: brandColors.dark }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="mr-2" size={20} />
              Call Us Now
            </motion.a>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            className="shadow-lg rounded-lg p-8"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6" style={{ color: brandColors.dark }}>
              Send <span style={{ color: brandColors.primary }}>Message</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2" 
                  size={20} 
                  style={{ color: brandColors.dark }} 
                />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-md focus:outline-none focus:ring-2 text-gray-800 bg-gray-50"
                  style={{ 
                    borderWidth: "1px", 
                    borderColor: brandColors.mediumGray,
                    "--tw-ring-color": brandColors.secondary
                  }}
                />
              </div>
              
              <div className="relative">
                <Mail 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2" 
                  size={20} 
                  style={{ color: brandColors.dark }} 
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-md focus:outline-none focus:ring-2 text-gray-800 bg-gray-50"
                  style={{ 
                    borderWidth: "1px", 
                    borderColor: brandColors.mediumGray,
                    "--tw-ring-color": brandColors.secondary
                  }}
                />
              </div>
              
              <div className="relative">
                <MessageCircle 
                  className="absolute left-3 top-4" 
                  size={20} 
                  style={{ color: brandColors.dark }} 
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full pl-10 pr-3 py-3 rounded-md focus:outline-none focus:ring-2 text-gray-800 bg-gray-50"
                  style={{ 
                    borderWidth: "1px", 
                    borderColor: brandColors.mediumGray,
                    "--tw-ring-color": brandColors.secondary
                  }}
                ></textarea>
              </div>
              
              {/* Submit button with gradient */}
              <div className="flex items-center">
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-white py-3 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base font-semibold flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(to right, ${brandColors.primary}, ${brandColors.secondary})` 
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 rounded-md text-center"
                style={{ 
                  backgroundColor: statusMessage.includes('successfully') 
                    ? `${brandColors.primary}15` 
                    : `${brandColors.secondary}15`,
                  color: statusMessage.includes('successfully') 
                    ? brandColors.primary 
                    : brandColors.secondary 
                }}
              >
                {statusMessage}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;