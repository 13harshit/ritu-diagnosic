import { Search, Microscope, Scan, Heart, Brain, Users, Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Home() {
  const popularPackages = [
    {
      title: 'Complete Blood Count',
      icon: Microscope,
      price: '₹499',
      tests: 25,
      image: 'https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY2NjQyNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Full Body Health Checkup',
      icon: Heart,
      price: '₹2,999',
      tests: 85,
      image: 'https://images.unsplash.com/photo-1659366100463-9e29a63adcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhlYWx0aCUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NjY0MjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'MRI Brain Scan',
      icon: Brain,
      price: '₹4,500',
      tests: 1,
      image: 'https://images.unsplash.com/photo-1706777373948-4a6cdce75975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY2NjQyNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Thyroid Profile',
      icon: Scan,
      price: '₹699',
      tests: 5,
      image: 'https://images.unsplash.com/photo-1765222385024-5d7304e609f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY2NTgzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'NABL Accredited',
      description: 'Quality standards you can trust',
    },
    {
      icon: Clock,
      title: 'Fast Reports',
      description: 'Digital reports within 24 hours',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ certified pathologists',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Your privacy is our priority',
    },
  ];

  return (
    <div>
      {/* Hero Section with DNA Helix Effect */}
      <section className="relative bg-gradient-to-br from-[#0B2545] via-[#06152a] to-[#0B2545] text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dna-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 Q25 25 50 50 T50 100" stroke="#C5A059" fill="none" strokeWidth="2" />
                <path d="M50 0 Q75 25 50 50 T50 100" stroke="#C5A059" fill="none" strokeWidth="2" />
                <circle cx="50" cy="25" r="3" fill="#C5A059" />
                <circle cx="50" cy="75" r="3" fill="#C5A059" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dna-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-overline">Welcome to Ritu Diagnostic</span>
            <h1 className="text-white text-4xl md:text-6xl mb-6">
              The Future of Wellness is Precise
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience world-class diagnostic services combining cutting-edge technology with compassionate care
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What test are you looking for today?"
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link to="/packages" className="btn btn-outline text-white border-white hover:bg-white hover:text-[#0B2545]">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-white py-12 shadow-lg -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#0B2545] to-[#06152a] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Health Packages */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-overline">Most Trusted</span>
            <h2>Popular Health Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive health screenings designed by expert pathologists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                
                <div className="h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#0B2545] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C5A059] transition-colors">
                    <pkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">Includes {pkg.tests} tests</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-[#C5A059]">{pkg.price}</span>
                    <button className="text-[#0B2545] hover:text-[#C5A059] transition-colors">
                      Book Now →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/packages" className="btn btn-primary">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-overline">Why Choose Us</span>
              <h2 className="mb-6">Excellence in Diagnostic Care Since 2010</h2>
              <p className="text-gray-600 mb-6">
                At Ritu Diagnostic, we believe in the power of precision. Our state-of-the-art facilities and expert team ensure that every test result contributes to your journey toward optimal health.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
                  </div>
                  <div>
                    <h4 className="mb-1">Advanced Technology</h4>
                    <p className="text-sm text-gray-600">Latest AI-integrated diagnostic equipment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
                  </div>
                  <div>
                    <h4 className="mb-1">Home Sample Collection</h4>
                    <p className="text-sm text-gray-600">Convenient and safe testing at your doorstep</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
                  </div>
                  <div>
                    <h4 className="mb-1">Expert Consultation</h4>
                    <p className="text-sm text-gray-600">Free doctor consultation with every package</p>
                  </div>
                </li>
              </ul>
              <Link to="/about" className="btn btn-outline mt-8 inline-block">
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1662414185445-b9a05e26dba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1vZGVybiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjY0MjQzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl text-[#C5A059] mb-2">15+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B2545] to-[#06152a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Ready to Take Control of Your Health?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your test today and get results delivered digitally within 24 hours
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Book an Appointment
            </Link>
            <a href="tel:+911234567890" className="btn btn-outline text-white border-white hover:bg-white hover:text-[#0B2545]">
              Call Now: +91 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
