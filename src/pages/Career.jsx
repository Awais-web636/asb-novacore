import React, { useState } from 'react';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Rocket, Lightbulb, Scale, Wallet, Handshake, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced Full Stack Developer to join our growing team and help build scalable web applications.',
      requirements: [
        '5+ years of experience in web development',
        'Proficient in React, Node.js, and modern JavaScript',
        'Experience with databases (MongoDB, PostgreSQL)',
        'Knowledge of cloud platforms (AWS, Azure)',
        'Strong problem-solving skills'
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code',
        'Participate in code reviews',
        'Mentor junior developers'
      ],
      benefits: [
        'Competitive salary package',
        'Health and dental insurance',
        'Flexible working hours',
        'Professional development budget',
        'Remote work options'
      ]
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our mobile team to create innovative iOS and Android applications using React Native and native technologies.',
      requirements: [
        '3+ years of mobile app development experience',
        'Proficient in React Native or native iOS/Android',
        'Experience with mobile app deployment',
        'Knowledge of mobile UI/UX best practices',
        'Familiarity with mobile testing frameworks'
      ],
      responsibilities: [
        'Develop cross-platform mobile applications',
        'Optimize apps for performance and user experience',
        'Integrate with APIs and third-party services',
        'Test and debug applications',
        'Stay updated with mobile development trends'
      ],
      benefits: [
        'Competitive compensation',
        'Stock options',
        'Health benefits',
        'Learning and development opportunities',
        'Flexible schedule'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '4+ years',
      description: 'We need a creative UI/UX Designer to create intuitive and engaging user experiences for our digital products.',
      requirements: [
        '4+ years of UI/UX design experience',
        'Proficient in Figma, Adobe Creative Suite',
        'Strong portfolio demonstrating design skills',
        'Experience with user research and testing',
        'Knowledge of design systems and accessibility'
      ],
      responsibilities: [
        'Create wireframes, prototypes, and high-fidelity designs',
        'Conduct user research and usability testing',
        'Collaborate with developers and product managers',
        'Maintain and evolve design systems',
        'Present design concepts to stakeholders'
      ],
      benefits: [
        'Competitive salary',
        'Creative freedom',
        'Professional development budget',
        'Modern design tools and software',
        'Collaborative team environment'
      ]
    },
    {
      id: 4,
      title: 'WordPress Developer',
      location: 'Remote / Chicago',
      type: 'Contract',
      experience: '2+ years',
      description: 'Looking for a skilled WordPress Developer to create custom themes, plugins, and manage WordPress-based projects.',
      requirements: [
        '2+ years of WordPress development experience',
        'Strong PHP, HTML, CSS, and JavaScript skills',
        'Experience with custom theme and plugin development',
        'Knowledge of WordPress best practices',
        'Familiarity with page builders and WooCommerce'
      ],
      responsibilities: [
        'Develop custom WordPress themes and plugins',
        'Maintain and update existing WordPress sites',
        'Optimize sites for performance and SEO',
        'Troubleshoot and fix WordPress issues',
        'Collaborate with designers and clients'
      ],
      benefits: [
        'Competitive hourly rate',
        'Flexible working arrangements',
        'Opportunity for long-term partnership',
        'Diverse project portfolio',
        'Professional growth opportunities'
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Application for ${formData.position} submitted successfully! We will get back to you soon.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      portfolio: '',
      coverLetter: ''
    });
    setSelectedJob(null);
  };

  // Icon components mapping
  const icons = {
    Rocket: <Rocket className="w-8 h-8" />,
    Lightbulb: <Lightbulb className="w-8 h-8" />,
    Scale: <Scale className="w-8 h-8" />,
    Wallet: <Wallet className="w-8 h-8" />,
    Handshake: <Handshake className="w-8 h-8" />,
    BookOpen: <BookOpen className="w-8 h-8" />
  };

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
            Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Be part of a dynamic team that's shaping the future of digital solutions. Explore exciting career opportunities at ASB NovaCore.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Join ASB NovaCore?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer more than just a job - we provide a platform for growth and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and career advancement in a supportive environment',
                icon: 'Rocket'
              },
              {
                title: 'Innovative Projects',
                description: 'Work on cutting-edge technologies and challenging projects',
                icon: 'Lightbulb'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible schedules and remote work options for better life balance',
                icon: 'Scale'
              },
              {
                title: 'Competitive Benefits',
                description: 'Comprehensive benefits package including health, dental, and more',
                icon: 'Wallet'
              },
              {
                title: 'Collaborative Culture',
                description: 'Work with talented professionals in a collaborative environment',
                icon: 'Handshake'
              },
              {
                title: 'Learning Budget',
                description: 'Annual budget for conferences, courses, and professional development',
                icon: 'BookOpen'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex p-4 justify-center rounded-full text-4xl mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                  {icons[benefit.icon]}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300">Find your perfect role and start your journey with us</p>
          </motion.div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-full">
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.experience}
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{job.description}</p>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  View Details & Apply
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div> */}
          <div>
            <p className='text-gray-300 text-center'>No jobs available at the moment</p>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap items-center text-gray-300 gap-4">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{selectedJob.location}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{selectedJob.experience}</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm rounded-full">
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-white text-2xl cursor-pointer"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Job Description</h3>
                  <p className="text-gray-300 mb-6">{selectedJob.description}</p>

                  <h3 className="text-xl font-semibold text-white mb-4">Requirements</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={`req-${index}`} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Responsibilities</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={`resp-${index}`} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={`benefit-${index}`} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Apply Now</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <select
                        name="position"
                        value={formData.position || selectedJob.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="">Select Position</option>
                        {jobs.map(job => (
                          <option key={job.id} value={job.title} className="bg-slate-900">
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="experience"
                        placeholder="Years of Experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <input
                        type="url"
                        name="portfolio"
                        placeholder="Portfolio/LinkedIn URL"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <textarea
                        name="coverLetter"
                        placeholder="Cover Letter / Why do you want to join us?"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Career;