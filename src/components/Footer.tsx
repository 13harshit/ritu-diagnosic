import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#06152a] text-white/70 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-white text-xl mb-4 pb-2 border-b border-[#C5A059] inline-block">
              About Ritu Diagnostic
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted partner in precision healthcare. We combine cutting-edge technology with compassionate care to deliver accurate diagnostics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-[#C5A059] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#C5A059] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#C5A059] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xl mb-4 pb-2 border-b border-[#C5A059] inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all">
                  Health Packages
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all">
                  Health Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xl mb-4 pb-2 border-b border-[#C5A059] inline-block">
              Popular Tests
            </h4>
            <ul className="space-y-3">
              <li className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all cursor-pointer">
                Complete Blood Count
              </li>
              <li className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all cursor-pointer">
                Thyroid Profile
              </li>
              <li className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all cursor-pointer">
                Lipid Profile
              </li>
              <li className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all cursor-pointer">
                MRI Scan
              </li>
              <li className="text-white/70 hover:text-[#C5A059] hover:pl-2 transition-all cursor-pointer">
                CT Scan
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-xl mb-4 pb-2 border-b border-[#C5A059] inline-block">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <span className="text-sm">123 Medical Plaza, Healthcare District, Mumbai 400001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm hover:text-[#C5A059] transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <a href="mailto:info@ritudiagnostic.com" className="text-sm hover:text-[#C5A059] transition-colors">
                  info@ritudiagnostic.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <span className="text-sm">Mon - Sat: 7:00 AM - 9:00 PM<br />Sunday: 8:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Ritu Diagnostic. All rights reserved. | NABL Accredited
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#C5A059] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#C5A059] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
