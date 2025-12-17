"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart, Users, Building2 } from 'lucide-react';
import ScrollAnimation from '../components/ui/ScrollAnimation';



export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our engagements.",
      icon: <Heart className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Excellence",
      description: "We deliver top-quality solutions with professionalism and precision.",
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Innovation",
      description: "We embrace change and drive innovation to stay ahead.",
      icon: <Building2 className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Collaboration",
      description: "We work closely with clients to co-create value.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    }
  ];

  const teamMembers = [
    {
      name: "Ikor Kelvin",
      position: "Managing Director & Research Analyst",
      expertise: "Dynamic Research Analyst, Project Manager, and Business Development Manager with a strong record of driving growth across Technology, Agriculture, Oil & Gas, Real Estate, Hospitality, and OEM Procurement.",
      image: "/ikor-kelvin.jpg",
      description: "Rooted in strategic execution, Ikor blends deep research expertise with innovative project management, enabling businesses to identify opportunities, optimize operations, and achieve sustainable success across industries and markets."
    },
    {
      name: "Muhammed Muhammed",
      position: "Head of Operations",
      expertise: "Agribusiness professional with expertise across production, procurement, logistics, and export systems. MSc in Agricultural Economics (in view) from Bayero University Kano.",
      image: "/muhammed-muhammed.jpg",
      description: "Rooted in Agriculture. Driven by Impact. Growing Beyond Borders. His work spans farm-to-market operations, trade management, and cross-border expansion, making food systems more efficient, inclusive, and profitable."
    },
    {
      name: "Egbodo Paul",
      position: "Lead IT Consultant and International Relations Manager (Manila, Philippines)",
      expertise: "IT systems development, digital transformation, and cross-border partnerships specialist.",
      image: "/egbodo-paul.jpg",
      description: "Paul combines technical expertise with strategic global engagement, ensuring the company operates efficiently while expanding its international presence. Known for bridging technology with business strategy and positioning KIECH Industries for long-term success."
    },
    {
      name: "LAURA NTUL KPOPJI",
      position: "Customer Relations Manager",
      expertise: "Mass Communication specialist with expertise in customer service, corporate marketing, and business development.",
      image: "/team-member-4.jpg",
      description: "Laura excels in managing client relationships and ensuring every customer interaction reflects KIECH Industries' values of excellence and integrity. She leverages her communication expertise and problem-solving abilities to build trust, enhance satisfaction, and strengthen long-term partnerships that drive organizational growth."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-[200px] pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-xy"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center" animation="zoom-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">KIECH Industries</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A dynamic management consulting firm committed to delivering transformative solutions across diverse industries worldwide.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollAnimation delay={0.2} animation="slide-in-left">
              <motion.div
                className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl backdrop-blur-sm border border-blue-200/50 overflow-hidden h-full"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative h-full flex flex-col">
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </motion.div>
                  <p className="text-gray-700 leading-relaxed">
                    To empower businesses across diverse sectors by providing strategic consulting services
                    that foster innovation, efficiency, and sustainable growth.
                  </p>
                </div>
              </motion.div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4} animation="slide-in-right">
              <motion.div
                className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl backdrop-blur-sm border border-indigo-200/50 overflow-hidden h-full"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative h-full flex flex-col">
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </motion.div>
                  <p className="text-gray-700 leading-relaxed">
                    To be a leading management consulting firm renowned for excellence, impact,
                    and transformative solutions across global industries.
                  </p>
                </div>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group text-center p-6 rounded-3xl bg-white/70 backdrop-blur-lg hover:bg-white transition-all duration-300 shadow-md hover:shadow-2xl border border-gray-200/50 hover:border-blue-300/50"
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals driving innovation and excellence at KIECH Industries.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <motion.div
                    className="group text-center bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100"
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-4 border-blue-200">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 96px, 96px"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-blue-600 font-medium mb-3 text-sm">{member.position}</div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.expertise}</p>
                    <p className="text-gray-500 text-xs italic leading-relaxed">{member.description}</p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>

            {teamMembers.length > 3 && (
              <div className="flex justify-center">
                <div className="grid gap-8">
                  {teamMembers.slice(3).map((member, index) => (
                    <ScrollAnimation key={index + 3} delay={0.3}>
                      <motion.div
                        className="group text-center bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100 w-80"
                        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mb-6 flex justify-center">
                          <div className="relative w-24 h-24 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-4 border-blue-200">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 96px, 96px"
                            />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                        <div className="text-blue-600 font-medium mb-3 text-sm">{member.position}</div>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.expertise}</p>
                        <p className="text-gray-500 text-xs italic leading-relaxed">{member.description}</p>
                      </motion.div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            )}
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Let&apos;s work together to achieve your goals
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
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
