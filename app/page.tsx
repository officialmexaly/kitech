"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  Award,
  Users,
  Clock,
  Star,
  Building2,
  Target,
  TrendingUp,
  Globe,
  ShieldCheck,
  Zap,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from './components/ui/Card';
import IconWrapper from './components/ui/IconWrapper';
import SectionHeader from './components/ui/SectionHeader';
import Container from './components/ui/Container';
import GradientText from './components/ui/GradientText';
import Badge from './components/ui/Badge';
import ScrollAnimation from './components/ui/ScrollAnimation';



export default function HomePage() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const achievementsElement = document.getElementById('achievements');
      if (achievementsElement && !hasAnimated) {
        const rect = achievementsElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          animateCounters();
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { projects: 250, clients: 150, experience: 10, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        experience: Math.floor(targets.experience * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);
  };

  const highlights = [
    {
      icon: <Building2 className="w-full h-full" />,
      title: "Industries",
      number: "01",
      description: "Expert consulting across Agriculture, Real Estate, Manufacturing, Technology, Logistics, and Energy sectors.",
      link: "/industries"
    },
    {
      icon: <Target className="w-full h-full" />,
      title: "Services",
      number: "02",
      description: "Strategic planning, operations improvement, digital transformation, and comprehensive business solutions.",
      link: "/services"
    },
    {
      icon: <TrendingUp className="w-full h-full" />,
      title: "Our Approach",
      number: "03",
      description: "Data-driven strategies combined with industry expertise to deliver measurable results and sustainable growth.",
      link: "/about"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen relative overflow-hidden">
        {/* Professional gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-50)] via-white to-[var(--slate-50)]"></div>

        {/* Subtle diagonal pattern overlay - Corporate Professional */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--primary-900),
              var(--primary-900) 1px,
              transparent 1px,
              transparent 20px
            )`
          }}
        ></div>

        <Container className="relative py-20 flex items-center min-h-screen">
          <div className="text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Excellence Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2 glass-professional rounded-full mb-6 shadow-sm"
              >
                <Award className="w-4 h-4 text-[var(--primary-900)]" />
                <span className="text-sm font-semibold text-[var(--primary-900)]">
                  Excellence in Management Consulting
                </span>
              </motion.div>

              {/* Trust Indicator */}
              <p className="text-[var(--slate-600)] text-sm mb-6">
                Trusted by 150+ Organizations Since 2015
              </p>

              {/* Main Headline - Corporate Professional Sizing */}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--slate-950)] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                KIECH Industries
                <motion.span
                  className="block text-xl md:text-3xl lg:text-4xl mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <GradientText>Limited</GradientText>
                </motion.span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-xl md:text-2xl text-[var(--slate-600)] mb-10 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Transforming businesses through innovative consulting solutions across diverse industries
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link href="/about">
                  <Button
                    variant="default"
                    size="lg"
                  >
                    Discover More
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-[var(--slate-400)]" />
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white relative">
        <Container>
          <ScrollAnimation animation="slide-in-left">
            <SectionHeader
              eyebrow="What We Offer"
              heading="Comprehensive Consulting Solutions"
              description="Designed to drive your business forward with proven strategies and measurable results"
              align="center"
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} animation="zoom-in">
                <Link href={highlight.link} className="block h-full">
                  <Card
                    variant="corporate"
                    padding="lg"
                    hover={true}
                    className="h-full group cursor-pointer flex flex-col"
                  >
                    {/* Number prefix */}
                    <div className="flex items-start justify-between mb-6">
                      <IconWrapper
                        icon={highlight.icon}
                        shape="rounded"
                        size="lg"
                        variant="primary"
                        animate={true}
                      />
                      <span className="text-5xl font-bold text-[var(--primary-100)] leading-none">
                        {highlight.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--slate-950)] mb-4">
                      {highlight.title}
                    </h3>

                    <p className="text-[var(--slate-600)] leading-relaxed mb-6 flex-grow">
                      {highlight.description}
                    </p>

                    <div className="flex items-center text-[var(--primary-900)] font-semibold group-hover:translate-x-1 transition-transform duration-300 mt-auto">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Card>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements Section - Corporate Professional */}
      <section id="achievements" className="py-20 relative overflow-hidden bg-[var(--slate-50)]">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--primary-900) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        ></div>

        <Container className="relative">
          <ScrollAnimation animation="zoom-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--slate-950)]">Our Impact</h2>
              <div className="w-24 h-1 bg-[var(--primary-900)] mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-[var(--slate-600)] max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client success
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, value: counters.projects, suffix: '+', label: 'Projects Completed' },
              { icon: Users, value: counters.clients, suffix: '+', label: 'Happy Clients' },
              { icon: Clock, value: counters.experience, suffix: '+', label: 'Years Experience' },
              { icon: Star, value: counters.satisfaction, suffix: '%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} animation="fade-in-up">
                <motion.div
                  className="text-center group h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white p-8 rounded-2xl border-2 border-[var(--slate-200)] shadow-sm hover:border-[var(--primary-900)] hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="mb-4 flex justify-center">
                      <IconWrapper
                        icon={<stat.icon className="w-full h-full" />}
                        shape="rounded"
                        size="lg"
                        variant="primary"
                        animate={true}
                      />
                    </div>

                    <motion.div
                      className="text-4xl font-bold mb-2 text-[var(--primary-900)]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 }}
                    >
                      {stat.value}{stat.suffix}
                    </motion.div>
                    <div className="text-sm text-[var(--slate-600)] font-medium leading-tight">{stat.label}</div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-950)] mb-6">
                Why Industry Leaders Choose Us
              </h2>
              <div className="w-24 h-1 bg-[var(--primary-900)] mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Perspective",
                desc: "Combining international best practices with deep local market insights."
              },
              {
                icon: ShieldCheck,
                title: "Uncompromising Integrity",
                desc: "We adhere to the highest ethical standards in every engagement."
              },
              {
                icon: Zap,
                title: "Innovative Agility",
                desc: "Rapidly adapting strategies to meet the evolving demands of your industry."
              }
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <Card variant="default" padding="lg" hover={true} className="h-full text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-[var(--primary-50)] text-[var(--primary-900)]">
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--slate-950)] mb-3">{item.title}</h3>
                  <p className="text-[var(--slate-600)]">{item.desc}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--slate-50)] relative overflow-hidden">
        <Container>
          <ScrollAnimation animation="slide-in-right">
            <SectionHeader
              eyebrow="Testimonials"
              heading="What Our Clients Say"
              description="Trusted partners in success across the globe"
              align="center"
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "KIECH Industries transformed our supply chain logistics, saving us 30% in operational costs within the first year.",
                author: "Michael Roberts",
                role: "COO, Apex Logistics"
              },
              {
                quote: "Their strategic insight into the agricultural sector helped us expand into three new international markets.",
                author: "Sarah Jenkins",
                role: "Director, GreenLeaf Agribusiness"
              },
              {
                quote: "Professional, knowledgeable, and reliable. They truly understand the complexities of modern manufacturing.",
                author: "David Chen",
                role: "CEO, TechBuild Manufacturing"
              }
            ].map((testimonial, i) => (
              <ScrollAnimation key={i} delay={i * 0.1} animation="zoom-out">
                <Card variant="corporate" padding="lg" className="h-full italic relative">
                  <Quote className="w-10 h-10 text-[var(--primary-100)] absolute top-6 right-6" />
                  <p className="text-[var(--slate-700)] mb-6 z-10 relative">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-[var(--slate-950)]">{testimonial.author}</div>
                    <div className="text-sm text-[var(--primary-600)]">{testimonial.role}</div>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container size="lg" className="text-center">
          <ScrollAnimation animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--slate-950)] mb-6">
              Ready to <GradientText>Transform Your Business?</GradientText>
            </h2>
            <p className="text-xl text-[var(--slate-600)] mb-8 max-w-2xl mx-auto">
              Let's work together to achieve your goals and drive sustainable growth
            </p>
            <Link href="/contact">
              <Button
                variant="default"
                size="xl"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </ScrollAnimation>
        </Container>
      </section>
    </div>
  );
}
