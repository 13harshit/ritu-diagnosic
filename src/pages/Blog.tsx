import { Clock, ArrowRight, Heart, Brain, Droplet, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Blog() {
  const featuredArticle = {
    title: 'Understanding Vitamin D: The Sunshine Hormone',
    excerpt: 'Discover why Vitamin D is crucial for your health, how to maintain optimal levels, and when you should get tested.',
    image: 'https://images.unsplash.com/photo-1653484760367-ebde76d3b0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwZCUyMHN1bnNoaW5lfGVufDF8fHx8MTc2NjY0MjY3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Preventive Health',
    readTime: '4 min read',
    date: 'Dec 20, 2024',
    author: 'Dr. Ritu Sharma',
  };

  const articles = [
    {
      title: 'Complete Guide to Thyroid Health',
      excerpt: 'Learn about thyroid disorders, symptoms, and why regular screening is essential for your wellness.',
      image: 'https://images.unsplash.com/photo-1729703551959-41461ee63c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHlyb2lkJTIwaGVhbHRofGVufDF8fHx8MTc2NjY0MjU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Wellness',
      readTime: '5 min read',
      date: 'Dec 18, 2024',
      relatedTest: 'Thyroid Profile',
    },
    {
      title: 'Heart Health: Prevention Starts with Knowledge',
      excerpt: 'Understanding cardiac risk factors and the importance of regular lipid profile testing.',
      image: 'https://images.unsplash.com/photo-1659366100463-9e29a63adcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhlYWx0aCUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NjY0MjQzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Heart Health',
      readTime: '6 min read',
      date: 'Dec 15, 2024',
      relatedTest: 'Lipid Profile',
    },
    {
      title: 'Nutrition for Optimal Blood Health',
      excerpt: 'Foods and lifestyle habits that support healthy blood count and prevent anemia.',
      image: 'https://images.unsplash.com/photo-1654084982335-d404ccf9c6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwbnV0cml0aW9ufGVufDF8fHx8MTc2NjY0MjY3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Nutrition',
      readTime: '4 min read',
      date: 'Dec 12, 2024',
      relatedTest: 'Complete Blood Count',
    },
    {
      title: 'Mental Wellness and Physical Health Connection',
      excerpt: 'How stress impacts your diagnostic markers and what you can do about it.',
      image: 'https://images.unsplash.com/photo-1620389701363-b1d7a601e0c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjY2MjcyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Mental Health',
      readTime: '7 min read',
      date: 'Dec 10, 2024',
      relatedTest: 'Stress Hormone Panel',
    },
    {
      title: 'Diabetes Prevention: Early Detection Matters',
      excerpt: 'Why HbA1c testing is crucial for diabetes prevention and management.',
      image: 'https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY2NjQyNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Diabetes',
      readTime: '5 min read',
      date: 'Dec 8, 2024',
      relatedTest: 'Diabetes Panel',
    },
    {
      title: 'Exercise and Your Lab Results',
      excerpt: 'How regular physical activity impacts your blood work and diagnostic markers.',
      image: 'https://images.unsplash.com/photo-1634144646738-809a0f8897c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMGZpdG5lc3MlMjBoZWFsdGh8ZW58MXx8fHwxNzY2NjQyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Fitness',
      readTime: '4 min read',
      date: 'Dec 5, 2024',
      relatedTest: 'Full Body Health Checkup',
    },
  ];

  const categories = [
    { name: 'All Articles', icon: Activity, count: 24 },
    { name: 'Heart Health', icon: Heart, count: 8 },
    { name: 'Wellness', icon: Brain, count: 12 },
    { name: 'Nutrition', icon: Droplet, count: 6 },
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
            <span className="text-overline">Knowledge Center</span>
            <h1 className="text-white mb-6">Health Insights Journal</h1>
            <p className="text-xl text-white/90">
              Expert-written articles to help you understand your health better and make informed decisions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-full min-h-[400px] lg:min-h-[500px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-[#C5A059] uppercase text-sm tracking-wider">Featured Article</span>
                <h2 className="my-4">{featuredArticle.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <span>{featuredArticle.date}</span>
                  <span>By {featuredArticle.author}</span>
                </div>

                <button className="btn btn-primary">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid with Sidebar */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#F8F9FA] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className="w-5 h-5 text-[#0B2545] group-hover:text-[#C5A059] transition-colors" />
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{category.count}</span>
                    </button>
                  ))}
                </div>

                {/* Related Services Widget */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="mb-4">Related Services</h4>
                  <div className="bg-gradient-to-br from-[#0B2545] to-[#06152a] rounded-lg p-6 text-white">
                    <Heart className="w-10 h-10 text-[#C5A059] mb-3" />
                    <h4 className="text-white mb-2">Lipid Profile Test</h4>
                    <p className="text-white/80 text-sm mb-4">Complete cholesterol screening</p>
                    <Link to="/services" className="text-[#C5A059] text-sm hover:underline">
                      Book Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2>Latest Articles</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#C5A059] text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-3 group-hover:text-[#C5A059] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <span>{article.date}</span>
                      </div>

                      {article.relatedTest && (
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-xs text-gray-500 mb-2">Related Test:</p>
                          <Link
                            to="/services"
                            className="text-sm text-[#C5A059] hover:underline"
                          >
                            {article.relatedTest} →
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn btn-outline">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0B2545] to-[#06152a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Stay Informed About Your Health</h2>
            <p className="text-white/90 mb-8">
              Subscribe to our newsletter for the latest health insights, wellness tips, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-800"
              />
              <button className="btn btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
