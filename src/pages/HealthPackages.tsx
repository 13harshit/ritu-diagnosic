import { Check, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function HealthPackages() {
  const packages = [
    {
      name: 'Essential Care',
      price: '₹999',
      originalPrice: '₹1,499',
      description: 'Basic health screening for routine check-ups',
      popular: false,
      tests: [
        'Complete Blood Count (25 tests)',
        'Blood Sugar (Fasting)',
        'Kidney Function Test (2 tests)',
        'Liver Function Test (12 tests)',
        'Lipid Profile (8 tests)',
        'Thyroid Profile (3 tests)',
        'Urine Routine & Microscopy',
      ],
      features: [
        'Home sample collection',
        'Digital report in 24 hours',
        'Expert consultation',
      ],
      color: 'from-gray-50 to-white',
      borderColor: 'border-gray-200',
    },
    {
      name: 'Advanced Health',
      price: '₹2,499',
      originalPrice: '₹3,999',
      description: 'Comprehensive screening for overall wellness',
      popular: true,
      tests: [
        'All tests from Essential Care',
        'Vitamin D & B12',
        'HbA1c (Diabetes)',
        'Iron Studies (4 tests)',
        'Cardiac Risk Markers (4 tests)',
        'Arthritis Panel (3 tests)',
        'Complete Hemogram',
        'Electrolytes (4 tests)',
      ],
      features: [
        'Free home sample collection',
        'Digital report in 24 hours',
        'Free doctor consultation (30 min)',
        'Personalized health recommendations',
      ],
      color: 'from-[#0B2545] to-[#06152a]',
      borderColor: 'border-[#C5A059]',
    },
    {
      name: 'Premium Total Body',
      price: '₹4,999',
      originalPrice: '₹7,999',
      description: 'Complete head-to-toe health assessment',
      popular: false,
      tests: [
        'All tests from Advanced Health',
        'Cancer Markers (8 tests)',
        'Complete Hormone Panel (6 tests)',
        'Advanced Cardiac Panel',
        'Lung Function Test',
        'ECG & Chest X-Ray',
        'Ultrasound Abdomen',
        'Bone Health Assessment',
        'Stress & Cortisol Levels',
      ],
      features: [
        'Free home sample collection',
        'Express reports in 12 hours',
        'Free specialist consultation (45 min)',
        'Personalized wellness plan',
        '3 months follow-up support',
      ],
      color: 'from-gray-50 to-white',
      borderColor: 'border-gray-200',
    },
  ];

  const specialPackages = [
    {
      title: 'Women\'s Wellness',
      price: '₹1,999',
      tests: 45,
      description: 'Specialized screening for women\'s health including hormones, thyroid, and iron studies',
    },
    {
      title: 'Senior Citizen Care',
      price: '₹3,499',
      tests: 70,
      description: 'Comprehensive package for age-related health concerns including bone, heart, and kidney health',
    },
    {
      title: 'Diabetes Management',
      price: '₹1,499',
      tests: 20,
      description: 'Complete diabetes screening with HbA1c, fasting, postprandial glucose, and complications check',
    },
    {
      title: 'Heart Health Check',
      price: '₹2,299',
      tests: 35,
      description: 'Advanced cardiac risk assessment including lipids, ECG, and cardiac markers',
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
            <span className="text-overline">Investment in Wellness</span>
            <h1 className="text-white mb-6">Choose Your Health Package</h1>
            <p className="text-xl text-white/90">
              Comprehensive health screenings designed by expert pathologists to give you complete peace of mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Comparison Grid */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 border-2 ${pkg.borderColor} ${
                  pkg.popular
                    ? 'transform scale-105 md:scale-110 z-10'
                    : 'hover:shadow-2xl hover:-translate-y-2'
                } ${pkg.popular ? 'bg-gradient-to-br ' + pkg.color : 'bg-white'}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="bg-[#C5A059] text-white text-center py-2 relative">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="uppercase tracking-wider text-sm">Most Popular</span>
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 ${pkg.popular ? 'text-white' : ''}`}>
                  <h3 className={`text-2xl mb-2 ${pkg.popular ? 'text-white' : ''}`}>{pkg.name}</h3>
                  <p className={`text-sm mb-6 ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-end gap-3 mb-2">
                      <span className={`text-5xl ${pkg.popular ? 'text-[#C5A059]' : 'text-[#0B2545]'}`}>
                        {pkg.price}
                      </span>
                      <span className={`text-xl line-through mb-2 ${pkg.popular ? 'text-white/60' : 'text-gray-400'}`}>
                        {pkg.originalPrice}
                      </span>
                    </div>
                    <p className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-500'}`}>
                      Save {Math.round((1 - parseInt(pkg.price.replace(/[^0-9]/g, '')) / parseInt(pkg.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-full uppercase tracking-wider text-sm transition-all ${
                      pkg.popular
                        ? 'bg-[#C5A059] text-white hover:bg-[#B08D55]'
                        : 'bg-[#0B2545] text-white hover:bg-[#C5A059]'
                    }`}
                  >
                    Book Package
                  </button>
                </div>

                {/* Tests Included */}
                <div className={`px-8 pb-6 ${pkg.popular ? 'text-white' : ''}`}>
                  <h4 className={`mb-4 ${pkg.popular ? 'text-white' : ''}`}>Tests Included:</h4>
                  <ul className="space-y-3">
                    {pkg.tests.map((test, testIndex) => (
                      <li key={testIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-[#C5A059]' : 'text-[#0B2545]'}`} />
                        <span className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className={`px-8 pb-8 border-t ${pkg.popular ? 'border-white/20' : 'border-gray-200'} pt-6`}>
                  <h4 className={`mb-4 ${pkg.popular ? 'text-white' : ''}`}>Package Features:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          pkg.popular ? 'bg-[#C5A059]/20' : 'bg-[#0B2545]/10'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${pkg.popular ? 'bg-[#C5A059]' : 'bg-[#0B2545]'}`}></div>
                        </div>
                        <span className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-overline">Specialized Care</span>
            <h2>Condition-Specific Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Targeted health screenings designed for specific health concerns and demographics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-[#C5A059]"
              >
                <div className="h-2 bg-gradient-to-r from-[#0B2545] via-[#C5A059] to-[#0B2545] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                
                <div className="p-6">
                  <h3 className="mb-3">{pkg.title}</h3>
                  <div className="text-3xl text-[#C5A059] mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-500 mb-4">Includes {pkg.tests} tests</p>
                  <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                  <button className="w-full bg-[#0B2545] text-white py-2 rounded-full hover:bg-[#C5A059] transition-colors uppercase text-sm tracking-wide">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book a Package */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-overline">Benefits</span>
              <h2>Why Book a Health Package?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#0B2545] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="mb-3">Cost Effective</h3>
                <p className="text-gray-600">
                  Save up to 50% compared to booking individual tests. Our packages are designed to give you maximum value.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#0B2545] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="mb-3">Comprehensive Screening</h3>
                <p className="text-gray-600">
                  Get a complete picture of your health with tests covering all major body systems and functions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#0B2545] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="mb-3">Early Detection</h3>
                <p className="text-gray-600">
                  Identify potential health issues before they become serious, allowing for timely intervention.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-[#0B2545] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="mb-3">Expert Guidance</h3>
                <p className="text-gray-600">
                  Free consultation with our doctors to understand your results and get personalized health advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B2545] to-[#06152a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Need Help Choosing the Right Package?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our health advisors are here to help you select the perfect package based on your age, lifestyle, and health goals
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn btn-primary">
              Talk to Health Advisor
            </button>
            <a href="tel:+911234567890" className="btn btn-outline text-white border-white hover:bg-white hover:text-[#0B2545]">
              Call: +91 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
