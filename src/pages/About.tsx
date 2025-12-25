import { Award, Users, Sparkles, Clock, Target, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const timeline = [
    { year: '2010', title: 'Founded', description: 'Started with a vision to revolutionize diagnostic care' },
    { year: '2012', title: 'First Expansion', description: 'Opened 3 new centers across the city' },
    { year: '2015', title: 'NABL Accreditation', description: 'Received national quality certification' },
    { year: '2018', title: 'Digital Innovation', description: 'Launched online report portal and mobile app' },
    { year: '2020', title: 'COVID Response', description: 'Pioneered home collection services during pandemic' },
    { year: '2023', title: 'AI Integration', description: 'Implemented AI-powered diagnostic assistance' },
  ];

  const team = [
    {
      name: 'Dr. Ritu Sharma',
      role: 'Founder & Chief Pathologist',
      qualification: 'MD Pathology, MBBS',
      image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nfGVufDF8fHx8MTc2NjYzNjY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      experience: '20+ years',
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Head of Radiology',
      qualification: 'MD Radiology, DMRD',
      image: 'https://images.unsplash.com/photo-1765222385024-5d7304e609f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY2NTgzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      experience: '15+ years',
    },
    {
      name: 'Dr. Priya Menon',
      role: 'Senior Microbiologist',
      qualification: 'PhD Microbiology',
      image: 'https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY2NjQyNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      experience: '12+ years',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every test result is verified through multiple quality checks',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every patient with empathy and respect',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Continuously adopting latest technology for better care',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to maintaining highest standards in healthcare',
    },
  ];

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
            <span className="text-overline">Our Story</span>
            <h1 className="text-white mb-6">Decoding Your Health with Compassion</h1>
            <p className="text-xl text-white/90">
              Since 2010, we've been on a mission to make world-class diagnostic services accessible to everyone, combining cutting-edge technology with human touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Screen - Story & Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image & Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl mb-8">
                <img
                  src="https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nfGVufDF8fHx8MTc2NjYzNjY1NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Ritu Sharma"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-white mb-2">Dr. Ritu Sharma</h3>
                  <p className="text-white/90">Founder & Chief Pathologist</p>
                </div>
              </div>
              
              <div className="bg-[#F8F9FA] p-8 rounded-lg">
                <h3 className="mb-4">Our Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  "Every test we conduct is more than just data—it's a window into someone's well-being, their hopes, and their future. That's why we never compromise on accuracy, and why we treat every patient with the care we'd want for our own families."
                </p>
                <p className="text-sm text-[#C5A059] mt-4">— Dr. Ritu Sharma</p>
              </div>
            </motion.div>

            {/* Right: Interactive Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8">Our Journey</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C5A059] via-[#0B2545] to-[#C5A059]"></div>

                {timeline.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-20 pb-12 last:pb-0"
                  >
                    {/* Node */}
                    <div className="absolute left-5 top-2 w-8 h-8 rounded-full bg-[#C5A059] border-4 border-white shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#C5A059]">
                      <div className="text-3xl text-[#C5A059] mb-2">{milestone.year}</div>
                      <h4 className="mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-overline">What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B2545] to-[#06152a] rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-overline">Expert Team</span>
            <h2>Meet Our Specialists</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of board-certified pathologists and radiologists bring decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-[#C5A059] mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.qualification}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{member.experience} experience</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn btn-outline">
              View Entire Team
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B2545] to-[#06152a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl text-[#C5A059] mb-2">50+</div>
              <div className="text-white/80">Expert Pathologists</div>
            </div>
            <div>
              <div className="text-5xl text-[#C5A059] mb-2">5L+</div>
              <div className="text-white/80">Tests Conducted</div>
            </div>
            <div>
              <div className="text-5xl text-[#C5A059] mb-2">15+</div>
              <div className="text-white/80">Centers</div>
            </div>
            <div>
              <div className="text-5xl text-[#C5A059] mb-2">99.9%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
