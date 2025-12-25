import { useState } from 'react';
import { Microscope, Scan, Heart, Brain, Droplet, Activity, Flame, Baby, Eye, Bone } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const [activeTab, setActiveTab] = useState<'pathology' | 'radiology'>('pathology');

  const pathologyServices = [
    {
      icon: Droplet,
      title: 'Complete Blood Count',
      description: 'Comprehensive analysis of blood cells and components',
      tests: 25,
      preparation: 'No fasting required',
      price: '₹499',
      image: 'https://images.unsplash.com/photo-1656337426914-5e5ba162d606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMHRlc3QlMjBtZWRpY2FsfGVufDF8fHx8MTc2NjY0MjU0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      icon: Heart,
      title: 'Lipid Profile',
      description: 'Cholesterol and triglyceride levels assessment',
      tests: 8,
      preparation: '12-14 hours fasting',
      price: '₹799',
      image: 'https://images.unsplash.com/photo-1659366100463-9e29a63adcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhlYWx0aCUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NjY0MjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      icon: Activity,
      title: 'Thyroid Profile',
      description: 'Complete thyroid function evaluation',
      tests: 5,
      preparation: 'No fasting required',
      price: '₹699',
      image: 'https://images.unsplash.com/photo-1729703551959-41461ee63c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHlyb2lkJTIwaGVhbHRofGVufDF8fHx8MTc2NjY0MjU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      icon: Flame,
      title: 'Diabetes Panel',
      description: 'HbA1c, fasting & postprandial glucose',
      tests: 3,
      preparation: '8-10 hours fasting',
      price: '₹599',
      image: 'https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY2NjQyNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      icon: Bone,
      title: 'Bone Health Profile',
      description: 'Calcium, Vitamin D & bone markers',
      tests: 6,
      preparation: 'No fasting required',
      price: '₹899',
      image: 'https://images.unsplash.com/photo-1765222385024-5d7304e609f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY2NTgzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      icon: Baby,
      title: 'Pregnancy Panel',
      description: 'Comprehensive prenatal screening',
      tests: 15,
      preparation: 'No fasting required',
      price: '₹1,499',
      image: 'https://images.unsplash.com/photo-1630531210902-0673fd470570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjY2MTk2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ];

  const radiologyServices = [
    {
      icon: Brain,
      title: 'MRI Scan',
      description: 'High-resolution magnetic resonance imaging',
      tests: 1,
      preparation: 'Remove metal objects',
      price: 'From ₹4,500',
      image: 'https://images.unsplash.com/photo-1706304003186-61fa7521c236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNUkklMjBzY2FuJTIwbWFjaGluZXxlbnwxfHx8fDE3NjY2NDI1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      icon: Scan,
      title: 'CT Scan',
      description: 'Advanced computed tomography imaging',
      tests: 1,
      preparation: '4-6 hours fasting',
      price: 'From ₹3,500',
      image: 'https://images.unsplash.com/photo-1581595220921-eec2071e5159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDVCUyMHNjYW4lMjByYWRpb2xvZ3l8ZW58MXx8fHwxNzY2NjQyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      icon: Heart,
      title: 'Ultrasound',
      description: 'Real-time imaging for various organs',
      tests: 1,
      preparation: 'Varies by scan type',
      price: 'From ₹1,200',
      image: 'https://images.unsplash.com/photo-1630531210902-0673fd470570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjY2MTk2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      icon: Bone,
      title: 'X-Ray',
      description: 'Digital radiography for bones and chest',
      tests: 1,
      preparation: 'No preparation needed',
      price: 'From ₹500',
      image: 'https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx4cmF5JTIwbWVkaWNhbCUyMGltYWdpbmd8ZW58MXx8fHwxNzY2NjQyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      icon: Activity,
      title: 'ECG',
      description: 'Electrocardiogram for heart monitoring',
      tests: 1,
      preparation: 'No preparation needed',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1659366100463-9e29a63adcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhlYWx0aCUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NjY0MjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      icon: Eye,
      title: 'Mammography',
      description: 'Breast cancer screening',
      tests: 1,
      preparation: 'No deodorant/powder',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1706777373948-4a6cdce75975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY2NjQyNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ];

  const currentServices = activeTab === 'pathology' ? pathologyServices : radiologyServices;

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
            <span className="text-overline">Our Services</span>
            <h1 className="text-white mb-6">Comprehensive Diagnostic Solutions</h1>
            <p className="text-xl text-white/90">
              From basic blood work to advanced imaging, we offer a complete range of diagnostic services powered by cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white py-8 shadow-md sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('pathology')}
              className={`px-8 py-3 rounded-full transition-all ${
                activeTab === 'pathology'
                  ? 'bg-[#0B2545] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Microscope className="w-5 h-5" />
                <span className="uppercase tracking-wider">Pathology (Blood/Urine)</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('radiology')}
              className={`px-8 py-3 rounded-full transition-all ${
                activeTab === 'radiology'
                  ? 'bg-[#0B2545] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Scan className="w-5 h-5" />
                <span className="uppercase tracking-wider">Radiology (Scans/Imaging)</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid - Bento Layout */}
      <section className="py-16 bg-[#F8F9FA]" id={activeTab === 'pathology' ? 'pathology' : 'radiology'}>
        <div className="container mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative border border-transparent hover:border-[#C5A059] ${
                  service.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top border animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500"></div>

                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#C5A059] transition-colors">
                    <service.icon className="w-7 h-7 text-[#0B2545] group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
                      <span>Includes {service.tests} {service.tests === 1 ? 'test' : 'tests'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
                      <span>Preparation: {service.preparation}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-2xl text-[#C5A059]">{service.price}</span>
                    <button className="bg-[#0B2545] text-white px-6 py-2 rounded-full hover:bg-[#C5A059] transition-colors uppercase text-sm tracking-wide">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Home Collection CTA */}
      <section id="home-collection" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0B2545] to-[#06152a] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-12">
                <span className="text-overline text-[#C5A059]">Convenient & Safe</span>
                <h2 className="text-white mb-4">Home Sample Collection</h2>
                <p className="text-white/90 mb-6">
                  Our certified phlebotomists will collect your samples from the comfort of your home. Safe, convenient, and hassle-free.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-white/90">
                    <div className="w-6 h-6 rounded-full bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Free home collection for packages above ₹999</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <div className="w-6 h-6 rounded-full bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Same-day collection available</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <div className="w-6 h-6 rounded-full bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Digital reports within 24 hours</span>
                  </li>
                </ul>
                <button className="btn btn-primary">
                  Schedule Home Collection
                </button>
              </div>
              <div className="h-full min-h-[400px] relative">
                <img
                  src="https://images.unsplash.com/photo-1765222385024-5d7304e609f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY2NTgzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Home Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
