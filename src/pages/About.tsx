import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Years of Experience', icon: Calendar },
    { number: '4', label: 'Core Divisions', icon: Target },
    { number: '10+', label: 'Regions Served', icon: MapPin }
  ];

  const timeline = [
    { year: '2009', event: 'Founded as Skyline Structural LLP' },
    { year: '2012', event: 'Expanded to painting services division' },
    { year: '2016', event: 'Launched paint manufacturing unit' },
    { year: '2019', event: 'Added interior design division' },
    { year: '2024', event: 'Serving 500+ satisfied clients' }
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
              About Skyline Structural LLP
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Building excellence through innovation, precision, and unwavering commitment 
              to quality construction solutions.
            </p>
          </motion.div>
        </div>
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
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Since our inception in 2009, Skyline Structural LLP has grown from a 
                specialized RCC construction company to a comprehensive multi-division 
                construction partner. Our journey reflects our commitment to innovation, 
                quality, and client satisfaction.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With over 15 years of industry experience, we have successfully completed 
                500+ projects across residential, commercial, and industrial sectors. 
                Our expertise spans four core divisions, ensuring end-to-end solutions 
                for all construction needs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we stand as a trusted name in the construction industry, 
                known for our precision, reliability, and commitment to delivering 
                projects that truly inspire and are built to last.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction site"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To be the leading construction company in India, recognized for our 
                innovative solutions, exceptional quality, and commitment to sustainable 
                development. We envision a future where every structure we create 
                becomes a landmark of excellence and inspiration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To deliver superior construction solutions through our integrated 
                approach, cutting-edge technology, and skilled workforce. We are 
                committed to exceeding client expectations while maintaining the 
                highest standards of safety, quality, and environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
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
                className="text-center"
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

      {/* CEO Message */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">CEO Message</h3>
                    <p className="text-slate-600">Leadership Vision</p>
                  </div>
                </div>
                <blockquote className="text-slate-600 italic mb-6">
                  "At Skyline Structural LLP, we believe that construction is not just 
                  about building structures; it's about creating spaces where dreams 
                  take shape and futures are built. Our commitment to excellence, 
                  innovation, and client satisfaction drives everything we do."
                </blockquote>
                <div className="border-t border-slate-200 pt-6">
                  <p className="font-semibold text-slate-900">CEO & Founder</p>
                  <p className="text-slate-600">Skyline Structural LLP</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Our Journey
                </h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-blue-900">{item.year}</div>
                        <div className="text-slate-600">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;