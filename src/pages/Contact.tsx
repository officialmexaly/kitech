import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Linkedin } from 'lucide-react';
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
export function Contact() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success'>(
    'idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };
  return (
    <div className="bg-brand-cream overflow-hidden">
      {/* Header */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.h1
            {...fadeUp}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-navy mb-6">

            Get in Touch
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">

            Ready to transform your business? Connect with our team of experts
            and start your journey today.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: false,
                margin: '-80px'
              }}
              transition={{
                duration: 0.6
              }}
              className="lg:col-span-5 space-y-8">

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-light text-brand-navy rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-navy mb-1">
                        Phone
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        +234 810 441 8967
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-light text-brand-navy rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-navy mb-1">
                        Email
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        inquiries@kiechindustries.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-light text-brand-navy rounded-lg flex items-center justify-center shrink-0">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-navy mb-1">
                        LinkedIn
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Connect with us
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-light text-brand-navy rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-navy mb-1">
                        Office Hours
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Mon-Fri, 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy text-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={24} className="text-brand-gold" />
                  <h3 className="text-lg font-serif font-bold">
                    Visit Our Office
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  We're here to help you transform your business. Whether you
                  prefer to meet in person, connect online, or simply have a
                  conversation over the phone, we're ready to discuss your needs.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Office location details coming soon. For now, please reach out
                  via phone or email.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: false,
                margin: '-80px'
              }}
              transition={{
                duration: 0.6
              }}
              className="lg:col-span-7">

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-brand-navy/5 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-4 -mt-4" />

                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-2 relative z-10">
                  Send Us a Message
                </h2>
                <p className="text-sm text-slate-600 mb-8 relative z-10">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                {formStatus === 'success' ?
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  className="bg-green-50 text-green-800 p-8 rounded-xl border border-green-200 text-center">

                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm">
                      Thank you for reaching out. We'll get back to you as soon
                      as possible.
                    </p>
                    <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-sm text-green-700 font-medium hover:underline">

                      Send another message
                    </button>
                  </motion.div> :

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                        htmlFor="firstName"
                        className="text-xs font-bold text-brand-navy uppercase tracking-wider">

                          First Name *
                        </label>
                        <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-sm"
                        placeholder="John" />

                      </div>
                      <div className="space-y-2">
                        <label
                        htmlFor="lastName"
                        className="text-xs font-bold text-brand-navy uppercase tracking-wider">

                          Last Name *
                        </label>
                        <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-sm"
                        placeholder="Doe" />

                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                        htmlFor="email"
                        className="text-xs font-bold text-brand-navy uppercase tracking-wider">

                          Email *
                        </label>
                        <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-sm"
                        placeholder="john@example.com" />

                      </div>
                      <div className="space-y-2">
                        <label
                        htmlFor="phone"
                        className="text-xs font-bold text-brand-navy uppercase tracking-wider">

                          Phone
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-sm"
                        placeholder="+1 (555) 000-0000" />

                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                      htmlFor="company"
                      className="text-xs font-bold text-brand-navy uppercase tracking-wider">

                        Company
                      </label>
                      <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-sm"
                      placeholder="Your Company Name" />

                    </div>

                    <div className="space-y-2">
                      <label
                      htmlFor="subject"
                      className="text-xs font-bold text-brand-navy uppercase tracking-wider">

                        Subject *
                      </label>
                      <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-sm"
                      placeholder="How can we help you?" />

                    </div>

                    <div className="space-y-2">
                      <label
                      htmlFor="message"
                      className="text-xs font-bold text-brand-navy uppercase tracking-wider">

                        Message *
                      </label>
                      <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all resize-none text-sm"
                      placeholder="Tell us more about your project or inquiry...">
                    </textarea>
                    </div>

                    <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-brand-navy text-white rounded-lg font-medium hover:bg-brand-gold transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2 shadow-md">

                      {formStatus === 'submitting' ?
                    'Sending...' :
                    'Send Message'}
                    </button>
                  </form>
                }
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}
