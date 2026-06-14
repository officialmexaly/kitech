import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Landmark,
  Stethoscope,
  Factory,
  ShoppingBag,
  Cpu,
  ArrowRight } from
'lucide-react';
import { Link } from 'react-router-dom';
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
    staggerChildren: 0.1
  }
};
const INDUSTRIES = [
{
  icon: <Landmark size={24} />,
  title: 'Financial Services',
  desc: 'Navigating regulatory complexities and digital disruption in banking and wealth management.',
  image:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
},
{
  icon: <Stethoscope size={24} />,
  title: 'Healthcare',
  desc: 'Optimizing patient care delivery and adapting to new healthcare models and regulations.',
  image:
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'
},
{
  icon: <Factory size={24} />,
  title: 'Manufacturing',
  desc: 'Enhancing supply chain efficiency and implementing Industry 4.0 technologies.',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
},
{
  icon: <Cpu size={24} />,
  title: 'Technology',
  desc: 'Accelerating innovation and scaling operations for software and IT service providers.',
  image:
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
},
{
  icon: <ShoppingBag size={24} />,
  title: 'Retail & Consumer',
  desc: 'Adapting to changing behaviors and optimizing omnichannel strategies for modern retail.',
  image:
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80'
},
{
  icon: <Building2 size={24} />,
  title: 'Real Estate',
  desc: 'Maximizing portfolio value and implementing sustainable practices in commercial real estate.',
  image:
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80'
}];

export function Industries() {
  return (
    <div className="bg-brand-cream overflow-hidden">
      {/* Header */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.h1
            {...fadeUp}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-navy mb-6">
            
            Industries We Serve
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            
            Deep sector expertise combined with cross-industry insights to solve
            your most complex challenges.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: false,
              margin: '-80px'
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {INDUSTRIES.map((industry, idx) =>
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              
                <div className="h-48 overflow-hidden relative">
                  <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                  <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm text-brand-navy rounded-lg flex items-center justify-center shadow-sm">
                    {industry.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-brand-navy mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {industry.desc}
                  </p>
                  <Link
                  to="/contact"
                  className="inline-flex items-center text-xs font-bold text-brand-gold uppercase tracking-wider group-hover:text-brand-navy transition-colors">
                  
                    Discuss Your Sector{' '}
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Sector Expertise Matters */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
                Why Sector Expertise Matters
              </h2>
              <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
                <p>
                  In today's hyper-connected global economy, generic strategies
                  are no longer sufficient. Success requires a nuanced
                  understanding of industry-specific dynamics, regulatory
                  environments, and competitive landscapes.
                </p>
                <p>
                  At KIECH Industries, our consultants don't just understand
                  business; they understand <em>your</em> business. We bring
                  deep, specialized knowledge to every engagement, allowing us
                  to hit the ground running and deliver insights that are both
                  innovative and highly relevant.
                </p>
                <p>
                  By cross-pollinating best practices from diverse sectors, we
                  help our clients anticipate disruptions, adapt to changes, and
                  maintain a sustainable competitive edge.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: false,
                margin: '-80px'
              }}
              transition={{
                duration: 0.6
              }}
              className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl font-serif font-bold text-brand-gold mb-2">
                    12+
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider">
                    Core Sectors
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl font-serif font-bold text-brand-gold mb-2">
                    500+
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider">
                    Sector Projects
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl font-serif font-bold text-brand-gold mb-2">
                    45
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider">
                    Global Markets
                  </div>
                </div>
                <div className="bg-brand-gold p-6 rounded-2xl border border-brand-gold/50 text-brand-navy">
                  <div className="text-3xl font-serif font-bold mb-2">#1</div>
                  <div className="text-xs font-semibold uppercase tracking-wider">
                    Client Priority
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}