import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info & Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Skyline Structural</span>
                <span className="text-sm text-slate-400">LLP</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designed to Inspire. Built to Last. Multi-division construction company 
              specializing in RCC solutions, painting services, and interior design.
            </p>
            <div>
              <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
              <nav className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-300">
                    Kalamboli, Panvel<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+919029000409" 
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  +91 9029000409
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a 
                    href="mailto:admin@skylineinfraworks.in" 
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    admin@skylineinfraworks.in
                  </a>
                  <a 
                    href="mailto:colorvision.spl@gmail.com" 
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    colorvision.spl@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/skylinestructuralllp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors group"
              >
                <Instagram className="w-6 h-6 text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/company/skylinestructuralllp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-white" />
              </a>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h5 className="font-semibold text-sm mb-2">Our Divisions</h5>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• RCC Solutions</li>
                <li>• Painting Services</li>
                <li>• Paint Manufacturing</li>
                <li>• Interior Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2024 Skyline Structural LLP. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 mt-2 sm:mt-0">
              Designed to Inspire. Built to Last.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;