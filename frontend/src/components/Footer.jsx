import React from "react";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Link2Off, Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main CTA Section */}
      <div className="bg-gradient-to-r from-orange-800 to-orange-700 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
            <Heart className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Us in Making the Difference
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you want to donate, volunteer, or partner with us, every contribution helps
            empower youth and transform lives
          </p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Join Now 
          </button>
        </div>
      </div>

      {/* Contact & Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              Poornata Foundation
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering youth through education, skills training, and business support to build self-dependent and valuable societies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Our Impact</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Programs</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Get Involved</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <a href="mailto:contact@poornatasociety.org" className="text-gray-300 hover:text-orange-400 transition-colors break-all">
                  contact@poornatasociety.org
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <a href="tel:7987339131" className="text-gray-300 hover:text-orange-400 transition-colors">
                  +91 798 733 9131
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Bangalore, Karnataka, India
                </span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Donate</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Partner With Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2025 Poornata Social Welfare Foundation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;