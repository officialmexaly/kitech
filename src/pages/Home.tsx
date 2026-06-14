import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  TrendingUp,
  Users,
  Lightbulb,
  ChevronRight,
  CheckCircle2,
  Building2,
  Globe } from
'lucide-react';
const fadeUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: false,
    margin: '-80px'
  },
  transition: {
    duration: 0.6,
    ease: 'easeOut'
  }
};
const staggerContainer = {
  initial: {
    opacity: 0
  },
  whileInView: {
    opacity: 1
  },
  viewport: {
    once: false,
    margin: '-80px'
  },
  transition: {
    staggerChildren: 0.15
  }
};
export function Home() {
  return (
    <div className="overflow-hidden bg-brand-cream">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24">
        {/* Subtle diagonal texture background */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(11,31,58,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 0.5
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-brand-navy text-xs font-medium mb-6 shadow-sm">
                
                <Award size={14} className="text-brand-gold" />
                <span>Excellence in Management Consulting</span>
              </motion.div>

              <motion.p
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6
                }}
                className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">
                
                Trusted by 150+ Organizations Since 2015
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-navy leading-tight mb-6">
                
                KIECH Industries
                <br />
                <span className="text-brand-gold">Limited</span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.6
                }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-light">
                
                Transforming businesses through innovative consulting solutions
                across diverse industries.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.6
                }}
                className="flex flex-col sm:flex-row items-center gap-4">
                
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-navy text-white rounded-full font-medium hover:bg-brand-gold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg">
                  
                  Discover More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform" />
                  
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-brand-navy border border-brand-navy rounded-full font-medium hover:bg-brand-navy hover:text-white transition-colors duration-300 flex items-center justify-center">
                  
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Hero Image Collage */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.4,
                duration: 0.8
              }}
              className="relative hidden lg:block h-[600px]">
              
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Consulting team"
                className="absolute top-0 right-0 w-4/5 h-4/5 object-cover rounded-2xl shadow-2xl z-10" />
              
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                alt="Corporate building"
                className="absolute bottom-0 left-0 w-3/5 h-3/5 object-cover rounded-2xl shadow-xl z-20 border-8 border-brand-cream" />
              
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos Strip */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Empowering Global Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Placeholder logos using text for now, representing client diversity */}
            <span className="font-serif text-xl font-bold">AcmeCorp</span>
            <span className="font-sans text-xl font-black tracking-tighter">
              GLOBAL<span className="font-light">SYS</span>
            </span>
            <span className="font-serif text-xl italic">Nexus Finance</span>
            <span className="font-sans text-xl font-bold tracking-widest">
              AERO
            </span>
            <span className="font-serif text-xl font-bold">Stellar Health</span>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            {...fadeUp}
            className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">
              Why Choose KIECH
            </h2>
            <p className="text-slate-600">
              We bring intellectual rigor, deep industry knowledge, and a
              collaborative spirit to every engagement, ensuring strategies
              translate into sustainable results.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: false,
              margin: '-80px'
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
            {
              icon: <Lightbulb size={24} />,
              title: 'Strategic Innovation',
              desc: 'Forward-thinking solutions that disrupt markets and create new value.'
            },
            {
              icon: <TrendingUp size={24} />,
              title: 'Measurable Results',
              desc: 'Focus on tangible ROI and sustainable operational improvements.'
            },
            {
              icon: <Users size={24} />,
              title: 'Collaborative Partnership',
              desc: 'Working alongside your team to build internal capabilities.'
            },
            {
              icon: <Globe size={24} />,
              title: 'Global Perspective',
              desc: 'Cross-border expertise to navigate international expansion.'
            }].
            map((feature, idx) =>
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-brand-gold/30 transition-all group">
              
                <div className="w-12 h-12 bg-brand-cream text-brand-navy rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div {...fadeUp} className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
                Core Capabilities
              </h2>
              <p className="text-slate-600">
                End-to-end consulting services designed to optimize performance
                and accelerate growth.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <Link
                to="/services"
                className="inline-flex items-center text-brand-navy font-medium hover:text-brand-gold transition-colors group">
                
                View All Services{' '}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform" />
                
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: false,
              margin: '-80px'
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {[
            {
              title: 'Strategy & Transformation',
              desc: 'Redefining corporate vision and executing complex enterprise-wide transformations.'
            },
            {
              title: 'Operations Excellence',
              desc: 'Streamlining supply chains, reducing costs, and maximizing operational efficiency.'
            },
            {
              title: 'Digital Innovation',
              desc: 'Leveraging emerging technologies to modernize business models and customer experiences.'
            }].
            map((service, idx) =>
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl bg-brand-cream p-8 border border-slate-100 hover:border-brand-gold/50 transition-colors">
              
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-serif font-bold text-brand-navy mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6 relative z-10">
                  {service.desc}
                </p>
                <Link
                to="/services"
                className="inline-flex items-center text-xs font-bold text-brand-gold uppercase tracking-wider group-hover:text-brand-navy transition-colors relative z-10">
                
                  Explore <ChevronRight size={14} className="ml-1" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: false,
              margin: '-80px'
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            
            {[
            {
              label: 'Organizations Served',
              value: '150+'
            },
            {
              label: 'Years of Excellence',
              value: '10+'
            },
            {
              label: 'Global Industries',
              value: '12'
            },
            {
              label: 'Successful Projects',
              value: '500+'
            }].
            map((stat, idx) =>
            <motion.div key={idx} variants={fadeUp} className="px-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-300 font-medium uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white rounded-3xl p-10 md:p-16 text-center shadow-xl shadow-brand-navy/5 border border-slate-100 max-w-4xl mx-auto">
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">
              
              Begin Your Transformation
            </motion.h2>
            <motion.p
              {...fadeUp}
              className="text-slate-600 mb-10 max-w-2xl mx-auto">
              
              Partner with KIECH Industries to unlock new opportunities,
              optimize your operations, and achieve sustainable market
              leadership.
            </motion.p>
            <motion.div {...fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white rounded-full font-medium hover:bg-brand-gold transition-colors duration-300 shadow-md">
                
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}
