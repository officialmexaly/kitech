"use client"

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Target, TrendingUp, BarChart3, Users, CheckCircle, Zap, Shield, UserCheck } from 'lucide-react';
import ScrollAnimation from '../components/ui/ScrollAnimation';



export default function ServicesPage() {
  const services = [
    { title: "Strategic Planning", icon: <Target className="w-6 h-6" />, description: "Develop comprehensive strategies aligned with your business goals and market opportunities." },
    { title: "Operations Improvement", icon: <TrendingUp className="w-6 h-6" />, description: "Optimize processes, reduce costs, and enhance operational efficiency across your organization." },
    { title: "Market Research", icon: <BarChart3 className="w-6 h-6" />, description: "Gain deep insights into market trends, customer behavior, and competitive landscapes." },
    { title: "Change Management", icon: <Users className="w-6 h-6" />, description: "Navigate organizational transformation with structured change management frameworks." },
    { title: "Project Management", icon: <CheckCircle className="w-6 h-6" />, description: "Deliver projects on time and within budget with proven project management methodologies." },
    { title: "Digital Transformation", icon: <Zap className="w-6 h-6" />, description: "Modernize operations through technology adoption and digital innovation strategies." },
    { title: "Compliance Advisory", icon: <Shield className="w-6 h-6" />, description: "Ensure regulatory compliance and mitigate risks across your business operations." },
    { title: "Capacity Building", icon: <UserCheck className="w-6 h-6" />, description: "Develop organizational capabilities through training, coaching, and knowledge transfer." }
  ];

  const whyChooseUs = [
    { title: "Industry Expertise", desc: "Deep knowledge across multiple sectors with proven track record" },
    { title: "Customized Solutions", desc: "Every client engagement is unique and tailored to specific needs" },
    { title: "Results-Oriented", desc: "Measurable outcomes and ROI-driven strategies for sustainable growth" },
    { title: "Global Perspective", desc: "Combining local insights with international best practices" },
    { title: "Trusted Advisors", desc: "Building lasting relationships grounded in trust and performance" },
    { title: "Innovation Focus", desc: "Leveraging cutting-edge methodologies and emerging technologies" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your business, understand challenges, and identify opportunities for growth."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop customized solutions and create a comprehensive action plan."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, ensuring seamless integration."
    },
    {
      step: "04",
      title: "Optimization",
      description: "We monitor results, make adjustments, and ensure sustainable success."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-[200px] pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-xy"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center" animation="zoom-out">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive consulting solutions designed to transform your business and drive sustainable growth.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 0.05} animation="zoom-in">
                <motion.div
                  className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-3xl text-center border border-blue-200/50 overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <motion.div
                    className="text-blue-600 mb-4 flex justify-center relative z-10"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-3 relative z-10">{service.title}</h3>
                  <p className="text-gray-600 text-sm relative z-10 leading-relaxed">{service.description}</p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Why Choose KIECH Industries?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <motion.div
                  className="flex items-start space-x-4 p-6 rounded-3xl glass backdrop-blur-lg hover:bg-white/80 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-in-right">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Process</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and lasting business transformation.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass backdrop-blur-2xl p-8 rounded-3xl border border-white/40 shadow-lg text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 animate-gradient-xy"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let&apos;s Get Started
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Ready to transform your business? Contact us today for a consultation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button
                className="glass-dark backdrop-blur-2xl px-8 py-4 rounded-full font-semibold border border-white/30 shadow-xl"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
