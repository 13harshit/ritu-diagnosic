import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    center: '',
    message: '',
  });

  const centers = [
    {
      name: 'Ritu Diagnostic - Central Mumbai',
      address: '123 Medical Plaza, Fort, Mumbai 400001',
      phone: '+91 22 2345 6789',
      email: 'central@ritudiagnostic.com',
      hours: 'Mon-Sat: 7:00 AM - 9:00 PM, Sun: 8:00 AM - 2:00 PM',
      status: 'Open Now',
      coordinates: { lat: 18.9388, lng: 72.8354 },
    },
    {
      name: 'Ritu Diagnostic - Andheri West',
      address: '456 Health Avenue, Andheri West, Mumbai 400053',
      phone: '+91 22 2678 9012',
      email: 'andheri@ritudiagnostic.com',
      hours: 'Mon-Sat: 7:00 AM - 9:00 PM, Sun: 8:00 AM - 2:00 PM',
      status: 'Open Now',
      coordinates: { lat: 19.1334, lng: 72.8397 },
    },
    {
      name: 'Ritu Diagnostic - Bandra',
      address: '789 Wellness Center, Bandra West, Mumbai 400050',
      phone: '+91 22 2345 3456',
      email: 'bandra@ritudiagnostic.com',
      hours: 'Mon-Sat: 7:00 AM - 9:00 PM, Sun: 8:00 AM - 2:00 PM',
      status: 'Open Now',
      coordinates: { lat: 19.0596, lng: 72.8295 },
    },
    {
      name: 'Ritu Diagnostic - Thane',
      address: '321 Medical Hub, Thane West, Thane 400601',
      phone: '+91 22 2567 8901',
      email: 'thane@ritudiagnostic.com',
      hours: 'Mon-Sat: 7:00 AM - 9:00 PM, Sun: Closed',
      status: 'Open Now',
      coordinates: { lat: 19.2183, lng: 72.9781 },
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', center: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2545] to-[#06152a] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-overline">Get in Touch</span>
            <h1 className="text-white mb-6">Contact & Locations</h1>
            <p className="text-xl text-white/90">
              Visit any of our conveniently located centers or reach out to us for assistance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map & Centers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Centers List */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="mb-6">Our Centers</h2>
                <p className="text-gray-600 mb-6">
                  Find the nearest Ritu Diagnostic center for your convenience
                </p>
              </div>

              {/* Scrollable Centers List */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {centers.map((center, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#C5A059] hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="pr-2">{center.name}</h4>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs text-green-600">{center.status}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-1" />
                        <p className="text-sm text-gray-600">{center.address}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                        <a href={`tel:${center.phone}`} className="text-sm text-gray-600 hover:text-[#C5A059]">
                          {center.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                        <a href={`mailto:${center.email}`} className="text-sm text-gray-600 hover:text-[#C5A059]">
                          {center.email}
                        </a>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-1" />
                        <p className="text-sm text-gray-600">{center.hours}</p>
                      </div>

                      <button className="w-full mt-4 bg-[#0B2545] text-white py-2 rounded-full hover:bg-[#C5A059] transition-colors text-sm uppercase tracking-wide flex items-center justify-center gap-2">
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-xl h-full min-h-[600px] sticky top-24">
                {/* Custom styled map placeholder */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E9ECEF] to-[#DEE2E6]">
                    {/* Map pins */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-2xl">
                        {centers.map((center, index) => (
                          <div
                            key={index}
                            className="absolute animate-bounce"
                            style={{
                              top: `${20 + index * 20}%`,
                              left: `${30 + index * 10}%`,
                              animationDelay: `${index * 0.2}s`,
                            }}
                          >
                            <div className="relative group">
                              <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <MapPin className="w-6 h-6 text-white" />
                              </div>
                              {/* Tooltip */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <p className="text-sm mb-1">{center.name}</p>
                                <p className="text-xs text-gray-600">{center.address}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Map overlay text */}
                    <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <h3 className="mb-2">Find Us</h3>
                      <p className="text-sm text-gray-600">{centers.length} locations across Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-overline">Send Us a Message</span>
              <h2>Have Questions? We're Here to Help</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Form */}
                <div className="md:col-span-3 p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="center" className="block text-sm mb-2 text-gray-700">
                        Preferred Center
                      </label>
                      <select
                        id="center"
                        value={formData.center}
                        onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                      >
                        <option value="">Select a center</option>
                        {centers.map((center, index) => (
                          <option key={index} value={center.name}>
                            {center.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-2 bg-gradient-to-br from-[#0B2545] to-[#06152a] p-8 md:p-12 text-white">
                  <h3 className="text-white mb-6">Quick Contact</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-white">Call Us</h4>
                      </div>
                      <a href="tel:+911234567890" className="text-white/90 hover:text-[#C5A059] pl-13">
                        +91 123 456 7890
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-white">Email Us</h4>
                      </div>
                      <a href="mailto:info@ritudiagnostic.com" className="text-white/90 hover:text-[#C5A059] pl-13">
                        info@ritudiagnostic.com
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-white">Working Hours</h4>
                      </div>
                      <p className="text-white/90 pl-13">
                        Mon - Sat: 7:00 AM - 9:00 PM<br />
                        Sunday: 8:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/20">
                    <h4 className="text-white mb-4">Emergency Services</h4>
                    <p className="text-white/90 text-sm mb-4">
                      For urgent medical concerns, please contact your nearest emergency room.
                    </p>
                    <p className="text-[#C5A059] text-sm">
                      Emergency Hotline: 108
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
