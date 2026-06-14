import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Award, CheckCircle2 } from 'lucide-react';
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
const TEAM = [
{
  name: 'Ikor Kelvin',
  role: 'Managing Director & Research Analyst',
  image: '/staff/Ikor Kelvin.jpeg',
  bio: 'Dynamic Research Analyst, Project Manager, and Business Development Manager with a strong record of driving growth across Technology, Agriculture, Oil & Gas, Real Estate, Hospitality, and OEM Procurement. Rooted in strategic execution, Ikor blends deep research expertise with innovative project management, enabling businesses to identify opportunities, optimize operations, and achieve sustainable success across industries and markets.'
},
{
  name: 'Muhammed Muhammed',
  role: 'Head of Operations',
  image: '/staff/Muhammed Muhammed.jpeg',
  bio: 'Agribusiness professional with expertise across production, procurement, logistics, and export systems. MSc in Agricultural Economics (in view) from Bayero University Kano. Rooted in Agriculture. Driven by Impact. Growing Beyond Borders. His work spans farm-to-market operations, trade management, and cross-border expansion, making food systems more efficient, inclusive, and profitable.'
},
{
  name: 'Egbodo Paul',
  role: 'Lead IT Consultant & Int. Relations Manager',
  image: '/staff/Egbodo Paul-transparent-2.png',
  bio: 'IT systems development, digital transformation, and cross-border partnerships specialist. Paul combines technical expertise with strategic global engagement, ensuring the company operates efficiently while expanding its international presence. Known for bridging technology with business strategy and positioning KIECH Industries for long-term success.'
},
{
  name: 'Laura Ntul Kpopji',
  role: 'Customer Relations Manager',
  image: '/staff/LauraNtulKpopji.jpeg',
  bio: "Mass Communication specialist with expertise in customer service, corporate marketing, and business development. Laura excels in managing client relationships and ensuring every customer interaction reflects KIECH Industries' values of excellence and integrity. She leverages her communication expertise and problem-solving abilities to build trust, enhance satisfaction, and strengthen long-term partnerships that drive organizational growth."
}];

export function About() {
  return (
    <div className="bg-brand-cream overflow-hidden">
      {/* Header */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.h1
            {...fadeUp}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-navy mb-6">
            
            About KIECH
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            
            A premier management consulting firm dedicated to driving
            transformative change and sustainable growth for organizations
            worldwide since 2015.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Founded on the principle that every organization possesses
                  untapped potential, KIECH Industries Limited has grown into a
                  trusted advisor for businesses navigating complex market
                  dynamics.
                </p>
                <p>
                  Our journey began with a simple mission: to provide
                  innovative, actionable consulting solutions that deliver
                  measurable results. Over the years, we have partnered with
                  industry leaders, emerging disruptors, and established
                  enterprises to redefine their strategies and optimize their
                  operations.
                </p>
                <p>
                  Today, our team of seasoned experts brings decades of
                  cross-industry experience, combining deep analytical rigor
                  with practical, hands-on implementation capabilities.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-brand-gold pl-4">
                  <div className="text-3xl font-serif font-bold text-brand-navy">
                    150+
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                    Organizations
                  </div>
                </div>
                <div className="border-l-2 border-brand-gold pl-4">
                  <div className="text-3xl font-serif font-bold text-brand-navy">
                    98%
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                    Retention Rate
                  </div>
                </div>
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
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="KIECH Office"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              {...fadeUp}
              className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
              
              <Target className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To empower organizations with innovative strategies and
                operational excellence, enabling them to navigate complexity,
                accelerate growth, and achieve sustainable competitive advantage
                in an ever-evolving global market.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
              
              <Zap className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be the world's most trusted management consulting partner,
                recognized for our transformative impact, intellectual rigor,
                and the exceptional caliber of our people and solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            {...fadeUp}
            className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
              Our Leadership Team
            </h2>
            <p className="text-slate-600">
              Meet the experienced professionals driving innovation and
              excellence at KIECH Industries.
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
            
            {TEAM.map((member, idx) =>
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group bg-brand-cream rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              
                <div className="flex justify-center pt-8 px-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-white shadow-lg relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                      style={
                        member.name === 'Egbodo Paul'
                          ? { objectFit: 'contain', objectPosition: 'center' }
                          : { objectFit: 'cover', objectPosition: 'center' }
                      } />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-brand-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-4 h-8">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-5 group-hover:line-clamp-none transition-all duration-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            {...fadeUp}
            className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">
              Our Core Values
            </h2>
          </motion.div>

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
              icon: <Award size={24} />,
              title: 'Excellence',
              desc: 'Delivering the highest quality of work, consistently exceeding client expectations.'
            },
            {
              icon: <Shield size={24} />,
              title: 'Integrity',
              desc: 'Operating with uncompromising ethical standards, transparency, and honesty.'
            },
            {
              icon: <CheckCircle2 size={24} />,
              title: 'Impact',
              desc: 'Focusing on solutions that drive tangible, sustainable results and enduring value.'
            }].
            map((value, idx) =>
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              
                <div className="w-12 h-12 mx-auto bg-brand-cream text-brand-navy rounded-full flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>);

}
