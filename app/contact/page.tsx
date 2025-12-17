"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Linkedin, MapPin, Clock, Send } from 'lucide-react';
import ScrollAnimation from '../components/ui/ScrollAnimation';



export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+234 810 441 8967",
      href: "tel:+2348104418967"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info.kiechindustries@mexaly.com",
      href: "mailto:info.kiechindustries@mexaly.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      content: "Connect with us",
      href: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-[200px] pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-xy"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center" animation="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Connect with our team of experts and start your journey today.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} animation="zoom-in">
                <motion.div
                  className="group text-center glass backdrop-blur-2xl p-8 rounded-3xl border border-white/40 shadow-lg"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-4 text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{info.content}</p>
                  )}
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 animate-gradient-y"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} animation="zoom-in">
            <motion.form
              className="glass backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/40 shadow-2xl"
              whileHover={{ boxShadow: "0 25px 50px rgba(59, 130, 246, 0.1)" }}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  placeholder="Tell us more about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.form>
          </ScrollAnimation>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="glass backdrop-blur-2xl p-12 rounded-3xl border border-white/40 shadow-xl text-center">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                We&apos;re here to help you transform your business. Whether you prefer to meet in person, connect online, or simply have a conversation over the phone, we&apos;re ready to discuss your needs.
              </p>
              <p className="text-sm text-gray-500">
                Office location details coming soon. For now, please reach out via phone or email.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
