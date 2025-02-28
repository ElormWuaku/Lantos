import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, User, MessageCircle, Phone } from 'lucide-react';
import { contactbg } from '../../../assets/images';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactNumber = "+233500353555";

  // Updated color palette to match Hero component
  const brandColors = {
    primary: "#4AA625",    // Green as primary (from Hero)
    secondary: "#FC940E",  // Orange accent (from Hero)
    dark: "#222222",       // Dark text color (from Hero)
    light: "#FFFFFF",      // White (from Hero)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const result = await emailjs.send(
        'service_vjh0nsr', // service ID
        'template_qxbztws', // template ID
        formData,
        'TKi5tH-L-cktAPqfX' // public key
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
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
      {/* Semi-transparent white overlay instead of black */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="rounded-lg self-center p-8 shadow-md"
            style={{ backgroundColor: brandColors.light }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: brandColors.primary }}>Get In Touch</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: brandColors.dark }}>
              Have questions or want to learn more? We would love to hear from you. Fill out the form or give us a call and our team will get back to you as soon as possible.
            </p>
            
            {/* Call Button Updated with Hero colors */}
            <motion.a
              href={`tel:${contactNumber}`}
              className="w-full flex items-center justify-center text-white px-6 py-3 rounded-md mb-6"
              style={{ backgroundColor: brandColors.primary }}
              whileHover={{ scale: 1.05, backgroundColor: brandColors.dark }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2" size={24} />
              Call Us Now at {contactNumber}
            </motion.a>
            
            <div className="text-center mt-8">
              <p className="italic text-xl" style={{ color: brandColors.dark }}>
                &quot;Your connection is our priority.&quot;
              </p>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            className="shadow-md rounded-lg p-8"
            style={{ backgroundColor: brandColors.light }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2" size={24} style={{ color: brandColors.primary }} />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-3 py-3 rounded-lg focus:outline-none focus:ring-2 text-gray-800"
                  style={{ 
                    borderWidth: "2px", 
                    borderColor: `${brandColors.primary}50`,
                    "--tw-ring-color": brandColors.primary
                  }}
                />
              </div>
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2" size={24} style={{ color: brandColors.primary }} />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-3 py-3 rounded-lg focus:outline-none focus:ring-2 text-gray-800"
                  style={{ 
                    borderWidth: "2px", 
                    borderColor: `${brandColors.primary}50`,
                    "--tw-ring-color": brandColors.primary
                  }}
                />
              </div>
              
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4" size={24} style={{ color: brandColors.primary }} />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full pl-12 pr-3 py-3 rounded-lg focus:outline-none focus:ring-2 text-gray-800"
                  style={{ 
                    borderWidth: "2px", 
                    borderColor: `${brandColors.primary}50`,
                    "--tw-ring-color": brandColors.primary
                  }}
                ></textarea>
              </div>
              
              {/* Button styled to match Hero component buttons */}
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, backgroundColor: brandColors.dark }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-white py-3 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
                style={{ backgroundColor: brandColors.primary }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            {statusMessage && (
              <p className={`mt-4 text-sm text-center`} style={{ 
                color: statusMessage.includes('successfully') ? brandColors.primary : brandColors.secondary 
              }}>
                {statusMessage}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;