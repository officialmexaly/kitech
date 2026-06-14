import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const NAV_LINKS = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'About',
  path: '/about'
},
{
  name: 'Industries',
  path: '/industries'
},
{
  name: 'Services',
  path: '/services'
},
{
  name: 'Contact',
  path: '/contact'
}];

export function Layout({ children }: {children: React.ReactNode;}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-cream text-brand-ink selection:bg-brand-gold/30">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold transition-transform duration-500 group-hover:scale-105">
              K
            </div>
            <span className="font-serif font-bold text-xl tracking-wide text-brand-navy">
              KIECH
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-2 ${isActive ? 'text-brand-gold' : 'text-brand-navy hover:text-brand-gold'}`}>
                  
                  {link.name}
                  {isActive &&
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }} />

                  }
                </Link>);

            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-brand-navy text-white font-medium rounded-full hover:bg-brand-gold transition-colors duration-300 shadow-md hover:shadow-lg">
              
              Get Started
            </Link>
            <button
              className="md:hidden p-2 text-brand-navy hover:text-brand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu">
              
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 md:hidden flex flex-col shadow-2xl">
          
            <nav className="flex flex-col gap-6 text-center mt-8">
              {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-serif ${isActive ? 'text-brand-gold font-semibold' : 'text-brand-navy'}`}>
                  
                    {link.name}
                  </Link>);

            })}
              <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white font-medium rounded-full hover:bg-brand-gold transition-colors">
              
                Get Started
              </Link>
            </nav>
          </motion.div>
        }
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{
              opacity: 0,
              y: 15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -15
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut'
            }}>
            
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-16 mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center text-brand-navy font-serif text-xl font-bold transition-transform group-hover:scale-105">
                  K
                </div>
                <span className="font-serif font-bold text-xl tracking-wide text-white">
                  KIECH
                </span>
              </Link>
              <p className="text-slate-300 max-w-md leading-relaxed mb-6">
                Transforming businesses through innovative consulting solutions
                across diverse industries.
              </p>
              <p className="text-brand-gold font-serif italic">
                Trusted by 150+ Organizations Since 2015
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 text-white">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-slate-400 hover:text-brand-gold transition-colors text-sm">
                    
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-brand-gold transition-colors text-sm">
                    
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-slate-400 hover:text-brand-gold transition-colors text-sm">
                    
                    Industries
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 text-white">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-400 hover:text-brand-gold transition-colors text-sm">
                    
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-brand-gold transition-colors text-sm">
                    
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-brand-gold transition-colors text-sm">
                    
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} KIECH Industries Limited. All
              rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}