import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building, 
  Paintbrush, 
  Home as HomeIcon, 
  Palette,
  Users,
  Award,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Camera,
  Image as ImageIcon
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Building,
      title: 'RCC Solutions',
      description: 'Expert concrete construction with Mivan technology, foundations, lift cores, and water tanks.',
      color: 'from-blue-600 to-blue-800',
      services: ['Mivan Technology', 'Foundation Work', 'Lift Cores', 'Water Tanks']
    },
    {
      icon: Paintbrush,
      title: 'Painting Services',
      description: 'Professional waterproofing, texture painting, facade work, and premium finishes.',
      color: 'from-teal-600 to-teal-800',
      services: ['Waterproofing', 'Texture Painting', 'Facade Work', 'RSP Solutions']
    },
    {
      icon: Palette,
      title: 'Paint Manufacturing',
      description: 'Custom paint formulations and manufacturing for specialized construction needs.',
      color: 'from-purple-600 to-purple-800',
      services: ['Texture Coatings', 'Custom Shades', 'Decorative Paints', 'Bulk Supply']
    },
    {
      icon: HomeIcon,
      title: 'Interior Design',
      description: 'Complete turnkey solutions, modular designs, and architectural visualizations.',
      color: 'from-orange-600 to-orange-800',
      services: ['Turnkey Solutions', 'Modular Design', '3D Visualization', 'Space Planning']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Years of Experience', icon: Clock },
    { number: '4', label: 'Core Divisions', icon: Building },
    { number: '10+', label: 'Regions Served', icon: Users }
  ];

  const testimonials = [
    {
      name: 'Rajesh Patel',
      position: 'Project Manager',
      company: 'Metro Infrastructure',
      rating: 5,
      feedback: 'Skyline Structural delivered our commercial tower project on time with exceptional quality. Their coordination between divisions was impressive.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Sharma',
      position: 'Interior Designer',
      company: 'Premium Homes',
      rating: 5,
      feedback: 'The interior design team exceeded our expectations. Their attention to detail and modern approach created stunning spaces.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Amit Kumar',
      position: 'Facility Manager',
      company: 'TechCorp Industries',
      rating: 5,
      feedback: 'Outstanding painting services with superior waterproofing solutions. The facade work transformed our corporate building.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Teams',
      description: 'In-house professionals across all divisions'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and premium materials'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Proven track record of on-time completion'
    },
    {
      icon: CheckCircle,
      title: 'End-to-End Service',
      description: 'Complete project lifecycle management'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        {/* Background Image - Replace with your hero image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
            {/* Placeholder for your hero background image */}
            <div className="text-center p-8 bg-white/90 rounded-lg">
              <Camera className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Add Your Hero Background Image Here</p>
              <p className="text-sm text-slate-500 mt-2">Recommended: 1920x1080px construction site image</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Company Logo Section */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-white/60 mx-auto mb-2" />
                  <p className="text-white/80 text-sm">Company Logo</p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Designed to Inspire.<br />
              <span className="text-blue-400">Built to Last.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Where Structures Rise and Visions Live
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Multi-division construction company specializing in RCC solutions, 
              painting services, paint manufacturing, and interior design with unmatched precision and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Building Excellence Since 2009
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Skyline Structural LLP stands as a premier multi-division construction company, 
                delivering comprehensive solutions across four specialized domains. From robust 
                RCC structures to exquisite interior designs, we bring your vision to life with 
                precision and artistry.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With over 15 years of industry expertise and 500+ successful projects, 
                we have established ourselves as the trusted partner for construction 
                excellence across Maharashtra and beyond.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Company Photo Placeholder */}
              <div className="bg-slate-100 rounded-lg shadow-xl h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <Camera className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium mb-2">Add Company Photo Here</p>
                  <p className="text-sm text-slate-500">Office building, team photo, or construction site</p>
                  <p className="text-sm text-slate-500">Recommended: 800x600px</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Logos/Certifications Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-slate-600">
              Trusted by industry leaders and certified for excellence
            </p>
          </motion.div>

          {/* Logo Grid - Replace with your certification/partner logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-24"
              >
                <div className="text-center">
                  <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-1" />
                  <p className="text-xs text-slate-400">Logo {item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-slate-600">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From foundation to finish, we deliver comprehensive construction solutions 
              with precision and excellence across four specialized divisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start space-x-6">
                  {/* Service Image Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                        <p className="text-xs text-slate-400">Service Photo</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {feature.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{service}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-slate-600">
              Showcasing our latest construction achievements
            </p>
          </motion.div>

          {/* Project Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Camera className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-600 font-medium">Project Photo {item}</p>
                    <p className="text-sm text-slate-500 mt-1">Add your project image here</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Project Title {item}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Add project description and details here
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Skyline Structural?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Experience the difference with our integrated approach, expert teams, 
                and unwavering commitment to quality construction solutions.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/why-choose-us"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
                >
                  Discover More Benefits
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Team Photo Placeholder */}
              <div className="bg-slate-100 rounded-lg shadow-xl h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <Camera className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium mb-2">Add Team Photo Here</p>
                  <p className="text-sm text-slate-500">Professional team photo or workplace image</p>
                  <p className="text-sm text-slate-500">Recommended: 800x600px</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Real feedback from satisfied clients across all our divisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center">
                  {/* Client Photo Placeholder */}
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                    <Camera className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get in touch with our expert team and let's bring your vision to life 
                with precision and quality. Free consultation available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <a href="tel:+919029000409" className="text-white hover:text-blue-400 transition-colors">
                    +91 9029000409
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <a href="mailto:admin@skylineinfraworks.in" className="text-white hover:text-blue-400 transition-colors">
                    admin@skylineinfraworks.in
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <a href="mailto:colorvision.spl@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    colorvision.spl@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-slate-300 text-sm">
                  Available Monday - Saturday<br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;