import React from 'react';
import {Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <BookOpen className="h-8 w-8 text-sunshine" /> */}
              {/* <span className="text-2xl font-playful text-white">BoostMyChild</span> */}
              <img className='h-10' src="/BMC_R_Logo.png" alt="" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-medium">
              Creating magical learning experiences through fun assessment tools and parent engagement. 
              Building brighter futures, one little learner at a time! ✨
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-sunshine cursor-pointer transition-colors" onClick={() => window.open('https://www.facebook.com/boostmychild', '_blank')}  />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-mint cursor-pointer transition-colors" onClick={() => window.open('https://x.com/boostmychild', '_blank')}/>
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-coral cursor-pointer transition-colors" onClick={() => window.open('https://www.linkedin.com/company/boostmychild/posts/?feedView=all', '_blank')} />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-peach cursor-pointer transition-colors" onClick={() => window.open('https://www.instagram.com/boostmychild_/?hl=en', '_blank')}/>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-playful mb-4 text-sunshine">Our Fun Tools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-mint transition-colors font-medium">School Assessment Module</a></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.boostmychild.consumer&pcampaignid=web_share" className="text-gray-300 hover:text-mint transition-colors font-medium">Smart Parent App</a></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-mint transition-colors font-medium">Learning Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-mint transition-colors font-medium">Progress Reports</a></li> */}
            </ul>
            <h3 className="text-lg font-playful mt-6 mb-4 text-blue-300 hover:text-sunshine" onClick={() => window.open('https://www.boostmychild.com/developmentareas', '_blank')}>Development Areas</h3>
          </div>
          
          {/* Contact */}
          <div >
            <h3 className="text-lg font-playful mb-4 text-coral" onClick={() => window.open('https://www.boostmychild.com/contactus', '_blank')}>Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sunshine" />
                <span className="text-gray-300 font-medium">info@boostmychild.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-mint" />
                <span className="text-gray-300 font-medium">+91 7888100034</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-coral" />
                <span className="text-gray-300 font-medium">Baner, Pune</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-medium">
            © 2025 BoostMyChild. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink
                          to="/privacy-policy"
                          end
                          className="text-gray-400 hover:text-sunshine text-sm transition-colors font-medium"
                        >
                        Privacy Policy
            </NavLink>
            {/* <a href="https://www.boostmychild.com/privacy" className="text-gray-400 hover:text-sunshine text-sm transition-colors font-medium">Privacy Policy</a> */}

            <NavLink
                          to="/privacy-policy"
                          end
                          className="text-gray-400 hover:text-sunshine text-sm transition-colors font-medium"
                        >
                        Terms of Service
            </NavLink>

            {/* <a href="https://www.boostmychild.com/terms" className="text-gray-400 hover:text-mint text-sm transition-colors font-medium">Terms of Service</a> */}
            {/* <a href="#" className="text-gray-400 hover:text-coral text-sm transition-colors font-medium">Cookie Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}