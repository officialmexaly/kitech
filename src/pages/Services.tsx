import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Lightbulb,
  Users2,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Shield,
  Settings } from
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
const SERVICES = [
{
  icon: <Lightbulb size={24} />,
  title: 'Corporate Strategy',
  desc: 'We help leaders define their vision and chart a clear path to sustainable competitive advantage. Our strategic planning process aligns organizational resources with market opportunities.',
  features: [
  'Market Entry Strategy',
  'Growth Strategy',
  'Business Model Innovation']

},
{
  icon: <Settings size={24} />,
  title: 'Operations Optimization',
  desc: 'Transform your operations to drive efficiency, reduce costs, and improve quality. We implement lean methodologies that deliver measurable bottom-line impact.',
  features: [
  'Process Optimization',
  'Supply Chain Management',
  'Cost Reduction']

},
{
  icon: <Users2 size={24} />,
  title: 'Organizational Design',
  desc: 'Build an agile, high-performing organization. We help align your structure, talent, and culture with your strategic objectives to maximize workforce effectiveness.',
  features: [
  'Change Management',
  'Talent Strategy',
  'Culture Transformation']

},
{
  icon: <BarChart3 size={24} />,
  title: 'Digital Transformation',
  desc: 'Navigate the digital landscape with confidence. We guide organizations through technology adoption, data strategy, and digital business model innovation.',
  features: [
  'Digital Strategy',
  'Data Analytics',
  'Technology Implementation']

},
{
  icon: <Shield size={24} />,
  title: 'Risk & Compliance',
  desc: 'Navigate complex regulatory environments and build robust risk management frameworks to protect and create enterprise value.',
  features: [
  'Enterprise Risk Management',
  'Regulatory Strategy',
  'Crisis Management']

},
{
  icon: <LineChart size={24} />,
  title: 'Financial Advisory',
  desc: 'Optimize capital allocation and improve financial performance to maximize shareholder value and ensure long-term stability.',
  features: [
  'Capital Optimization',
  'Financial Planning',
  'Investment Appraisal']

}];

export function Services() {
  return (
    <div className="bg-brand-cream overflow-hidden">
      {/* Header */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.h1
            {...fadeUp}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-navy mb-6">
            
            Our Services
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            
            Comprehensive consulting solutions designed to address your most
            critical business challenges and drive sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
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
            
            {SERVICES.map((service, idx) =>
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              
                <div className="w-12 h-12 bg-brand-light text-brand-navy rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-xl font-serif font-bold text-brand-navy mb-3">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                <div className="pt-6 border-t border-slate-100">
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) =>
                  <li
                    key={fIdx}
                    className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    
                        <CheckCircle2
                      size={14}
                      className="text-brand-gold shrink-0 mt-0.5" />
                    
                        {feature}
                      </li>
                  )}
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            {...fadeUp}
            className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              Our Approach
            </h2>
            <p className="text-slate-300">
              A proven methodology for delivering sustainable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
            {
              step: '01',
              title: 'Discover',
              desc: 'Deep dive into your organization to uncover root causes and hidden opportunities.'
            },
            {
              step: '02',
              title: 'Strategize',
              desc: 'Develop data-driven, actionable strategies tailored to your unique context.'
            },
            {
              step: '03',
              title: 'Implement',
              desc: 'Work alongside your team to execute initiatives and build internal capabilities.'
            },
            {
              step: '04',
              title: 'Optimize',
              desc: 'Monitor performance, refine processes, and ensure long-term sustainability.'
            }].
            map((phase, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: false,
                margin: '-80px'
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1
              }}
              className="relative">
              
                <div className="text-5xl font-serif font-bold text-brand-gold/20 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 text-brand-gold">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {phase.desc}
                </p>
                {idx < 3 &&
              <div className="hidden md:block absolute top-8 right-0 w-full h-[1px] bg-white/10 -z-10" />
              }
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">
            Ready to get started?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white rounded-full font-medium hover:bg-brand-gold transition-colors duration-300 gap-2 group shadow-md">
            
            Schedule a Consultation
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform" />
            
          </Link>
        </div>
      </section>
    </div>);

}