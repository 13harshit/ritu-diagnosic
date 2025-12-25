import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/packages', label: 'Health Packages' },
    { path: '/blog', label: 'Health Insights' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#0B2545] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center">
              <span className="text-[#0B2545] font-bold">RD</span>
            </div>
            <div>
              <h1 className="text-white m-0 text-xl">Ritu Diagnostic</h1>
              <p className="text-[#C5A059] text-xs m-0 tracking-wider">PRECISION IN WELLNESS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-[#C5A059]'
                    : 'text-white/80 hover:text-[#C5A059]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+911234567890" className="flex items-center gap-2 bg-[#C5A059] text-[#0B2545] px-4 py-2 rounded hover:bg-[#B08D55] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wide">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-wide transition-colors ${
                    isActive(link.path)
                      ? 'text-[#C5A059]'
                      : 'text-white/80 hover:text-[#C5A059]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+911234567890" className="flex items-center gap-2 bg-[#C5A059] text-[#0B2545] px-4 py-2 rounded hover:bg-[#B08D55] transition-colors w-fit">
                <Phone className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wide">Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
