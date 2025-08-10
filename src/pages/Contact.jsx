// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Linkedin, Clock } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     service: '',
//     budget: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     alert('Message sent successfully! We will get back to you within 24 hours.');
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       service: '',
//       budget: '',
//       message: ''
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: 'Email Us',
//       details: 'asbnovacore@gmail.com',
//       subtitle: 'We respond within 24 hours'
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: 'Call Us',
//       details: '+92 319 7818957',
//       subtitle: 'Mon-Fri 10AM-10PM '
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: 'Visit Us',
//       details: 'Islamabad, Pakistan',
//       // subtitle: 'Remote-first company'
//     },
//     {
//       icon: <Linkedin className="w-6 h-6" />,
//       title: 'Connect',
//       details: 'LinkedIn Profile',
//       subtitle: 'Follow our updates'
//     }
//   ];

//   const services = [
//     'Web Development',
//     'Mobile App Development',
//     'WordPress Development',
//     'UI/UX Design',
//     'Custom Software',
//     'Consultation'
//   ];

//   return (
//     <div className="pt-24 pb-16">
//       {/* Hero Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-6xl font-bold text-white mb-6"
//           >
//             Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-300 max-w-3xl mx-auto"
//           >
//             Ready to transform your ideas into reality? Let's discuss your project and create something amazing together.
//           </motion.p>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
//               >
//                 <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white mb-4">
//                   {info.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
//                 <p className="text-cyan-400 mb-1">{info.details}</p>
//                 <p className="text-gray-400 text-sm">{info.subtitle}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
//             >
//               <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone Number"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
//                     />
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       name="company"
//                       placeholder="Company Name"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
//                     >
//                       <option value="" className="bg-slate-900">Select Service</option>
//                       {services.map(service => (
//                         <option key={service} value={service} className="bg-slate-900">
//                           {service}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <select
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
//                     >
//                       <option value="" className="bg-slate-900">Project Budget</option>
//                       <option value="5k-10k" className="bg-slate-900">$5,000 - $10,000</option>
//                       <option value="10k-25k" className="bg-slate-900">$10,000 - $25,000</option>
//                       <option value="25k-50k" className="bg-slate-900">$25,000 - $50,000</option>
//                       <option value="50k+" className="bg-slate-900">$50,000+</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <textarea
//                     name="message"
//                     placeholder="Tell us about your project..."
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={6}
//                     required
//                     className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
//                   />
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center cursor-pointer"
//                 >
//                   Send Message
//                   <Send className="ml-2 w-5 h-5" />
//                 </motion.button>
//               </form>
//             </motion.div>

//             {/* Additional Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               <div>
//                 <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
//                 <p className="text-gray-300 mb-6">
//                   We're here to help bring your ideas to life. Whether you need a complete digital transformation
//                   or have a specific project in mind, our team is ready to provide expert guidance and deliver
//                   exceptional results.
//                 </p>
//                 <p className="text-gray-300">
//                   Get in touch today, and let's discuss how we can help your business grow with our innovative
//                   software solutions.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl p-6">
//                 <h3 className="text-xl font-semibold text-white mb-4">What Happens Next?</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
//                       1
//                     </div>
//                     <div>
//                       <h4 className="text-white font-medium">Initial Consultation</h4>
//                       <p className="text-gray-300 text-sm">We'll schedule a call to understand your requirements</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
//                       2
//                     </div>
//                     <div>
//                       <h4 className="text-white font-medium">Proposal & Timeline</h4>
//                       <p className="text-gray-300 text-sm">Detailed project proposal with timeline and pricing</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
//                       3
//                     </div>
//                     <div>
//                       <h4 className="text-white font-medium">Project Kickoff</h4>
//                       <p className="text-gray-300 text-sm">Start development with regular updates and feedback</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
//                 <div className="flex items-center mb-4">
//                   <Clock className="w-6 h-6 text-cyan-400 mr-3" />
//                   <h3 className="text-xl font-semibold text-white">Response Time</h3>
//                 </div>
//                 <p className="text-gray-300">
//                   We typically respond to all inquiries within 24 hours. For urgent matters,
//                   please call us directly at <span className="text-cyan-400">+92 319 7818957</span>.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-white/5 backdrop-blur-sm">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
//             <p className="text-xl text-gray-300">Quick answers to common questions</p>
//           </motion.div>

//           <div className="space-y-6">
//             {[
//               {
//                 question: 'How long does a typical project take?',
//                 answer: 'Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines in our proposals.'
//               },
//               {
//                 question: 'Do you provide ongoing support after project completion?',
//                 answer: 'Yes, we offer various support and maintenance packages to ensure your project continues to run smoothly. This includes updates, bug fixes, and technical support.'
//               },
//               {
//                 question: 'Can you work with our existing team?',
//                 answer: 'Absolutely! We often collaborate with in-house teams and can integrate seamlessly into your existing workflow and development processes.'
//               },
//               {
//                 question: 'What technologies do you specialize in?',
//                 answer: 'We specialize in modern web technologies including React, Node.js, mobile development with React Native, WordPress, and various cloud platforms like AWS and Azure.'
//               }
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
//               >
//                 <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
//                 <p className="text-gray-300">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Clock } from 'lucide-react';
// import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_vqnxdhi', // Replace with your EmailJS service ID
        'template_p2qqpna', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: `
            Phone: ${formData.phone || 'N/A'}
            Company: ${formData.company || 'N/A'}
            Service: ${formData.service || 'N/A'}
            Budget: ${formData.budget || 'N/A'}
            Message: ${formData.message}
          `
        },
        'io04_Ntviw6iIemj_' // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success('Message sent successfully! We will get back to you within 24 hours.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: ''
          });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast.error('❌ Oops! Something went wrong while sending your message.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'asbnovacore@gmail.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+92 319 7818957',
      subtitle: 'Mon-Fri 10AM-10PM '
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: 'Islamabad, Pakistan',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'Connect',
      details: 'LinkedIn Profile',
      subtitle: 'Follow our updates'
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'WordPress Development',
    'UI/UX Design',
    'Custom Software',
    'Consultation'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to transform your ideas into reality? Let's discuss your project and create something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-cyan-400 mb-1">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    >
                      <option value="" className="bg-slate-900">Select Service</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-slate-900">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    >
                      <option value="" className="bg-slate-900">Project Budget</option>
                      <option value="5k-10k" className="bg-slate-900">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-slate-900">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-slate-900">$25,000 - $50,000</option>
                      <option value="50k+" className="bg-slate-900">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
                <p className="text-gray-300 mb-6">
                  We're here to help bring your ideas to life. Whether you need a complete digital transformation
                  or have a specific project in mind, our team is ready to provide expert guidance and deliver
                  exceptional results.
                </p>
                <p className="text-gray-300">
                  Get in touch today, and let's discuss how we can help your business grow with our innovative
                  software solutions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Initial Consultation</h4>
                      <p className="text-gray-300 text-sm">We'll schedule a call to understand your requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Proposal & Timeline</h4>
                      <p className="text-gray-300 text-sm">Detailed project proposal with timeline and pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Project Kickoff</h4>
                      <p className="text-gray-300 text-sm">Start development with regular updates and feedback</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Response Time</h3>
                </div>
                <p className="text-gray-300">
                  We typically respond to all inquiries within 24 hours. For urgent matters,
                  please call us directly at <span className="text-cyan-400">+92 319 7818957</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
