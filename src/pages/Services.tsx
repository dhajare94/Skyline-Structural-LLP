import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Paintbrush, Palette, Home, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'rcc',
      icon: Building,
      title: 'RCC Work',
      description: 'Complete reinforced concrete construction solutions with modern techniques and precision.',
      color: 'from-blue-600 to-blue-800',
      services: [
        'Mivan Technology Construction',
        'Foundation & Structural Work',
        'Lift Cores & Shafts',
        'Water Tanks & Reservoirs',
        'Precast Concrete Elements',
        'Structural Repairs & Retrofitting'
      ]
    },
    {
      id: 'painting',
      icon: Paintbrush,
      title: 'Painting Services',
      description: 'Professional painting and surface treatment solutions for all types of structures.',
      color: 'from-teal-600 to-teal-800',
      services: [
        'Waterproofing Solutions',
        'Texture & Decorative Painting',
        'Facade & Exterior Painting',
        'RSP (Ready Surface Preparation)',
        'Industrial Coatings',
        'Specialized Wall Finishes'
      ]
    },
    {
      id: 'manufacturing',
      icon: Palette,
      title: 'Paint Manufacturing',
      description: 'Custom paint formulations and manufacturing for specialized construction needs.',
      color: 'from-purple-600 to-purple-800',
      services: [
        'Texture Coatings',
        'Decorative Paints',
        'Custom Shade Matching',
        'Weather-Resistant Formulations',
        'Eco-Friendly Paint Solutions',
        'Bulk Manufacturing'
      ]
    },
    {
      id: 'interior',
      icon: Home,
      title: 'Interior Design',
      description: 'Complete interior solutions from concept to completion with modern aesthetics.',
      color: 'from-orange-600 to-orange-800',
      services: [
        'Turnkey Interior Solutions',
        'Modular Kitchen & Wardrobes',
        'Space Planning & Layouts',
        '3D Visualizations',
        'Furniture & Fixtures',
        'Lighting Design'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive construction solutions across four specialized divisions, 
              delivering excellence from foundation to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group"
                    >
                      Get Quote for {service.title}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality, efficiency, and client satisfaction 
              at every stage of your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your vision and requirements' },
              { step: '02', title: 'Planning', description: 'Detailed project planning and design' },
              { step: '03', title: 'Execution', description: 'Professional implementation with quality control' },
              { step: '04', title: 'Delivery', description: 'Timely completion and handover' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-slate-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your construction needs and get a customized 
              solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;