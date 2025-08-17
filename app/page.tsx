"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Building2, Target, Eye, Heart, Users, Phone, Mail, Linkedin, Menu, X, ArrowRight, Award, TrendingUp, Shield, Clock, CheckCircle, Star, Quote, ArrowUp, Zap, Globe2, BarChart3, UserCheck } from 'lucide-react';

const KiechIndustries = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'industries', 'services', 'achievements', 'testimonials', 'team', 'process', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      
      setShowScrollTop(window.scrollY > 300);

      // Animate counters when achievements section is visible
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const industries = [
    {
      title: "Agriculture",
      description: "Value chain analysis, productivity improvement, sustainable practices, and market expansion strategies.",
      icon: "🌾"
    },
    {
      title: "Real Estate", 
      description: "Project planning, risk management, and market feasibility studies for development.",
      icon: "🏗️"
    },
    {
      title: "Manufacturing",
      description: "Production optimization, supply chain management, and lean manufacturing practices.",
      icon: "⚙️"
    },
    {
      title: "Technology",
      description: "Digital transformation strategies, IT project management, and cybersecurity advisory.",
      icon: "💻"
    },
    {
      title: "Logistics",
      description: "End-to-end logistics consulting, supply chain optimization, and warehouse management.",
      icon: "🚛"
    },
    {
      title: "Energy & Power",
      description: "Energy project development, regulatory compliance, and sustainability solutions.",
      icon: "⚡"
    }
  ];

  const services = [
    { title: "Strategic Planning", icon: <Target className="w-6 h-6" /> },
    { title: "Operations Improvement", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Market Research", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Change Management", icon: <Users className="w-6 h-6" /> },
    { title: "Project Management", icon: <CheckCircle className="w-6 h-6" /> },
    { title: "Digital Transformation", icon: <Zap className="w-6 h-6" /> },
    { title: "Compliance Advisory", icon: <Shield className="w-6 h-6" /> },
    { title: "Capacity Building", icon: <UserCheck className="w-6 h-6" /> }
  ];

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

  const testimonials = [
    {
      quote: "KIECH Industries transformed our operations completely. Their strategic insights led to a 40% increase in efficiency.",
      author: "Sarah Johnson",
      position: "CEO, AgriTech Solutions",
      rating: 5
    },
    {
      quote: "The team's expertise in digital transformation helped us modernize our entire workflow. Exceptional service.",
      author: "Michael Chen",
      position: "Director, Manufacturing Corp",
      rating: 5
    },
    {
      quote: "Professional, reliable, and results-driven. They exceeded our expectations in every aspect of the project.",
      author: "Emma Davis",
      position: "COO, Logistics Network",
      rating: 5
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Kemi Adebayo",
      position: "Managing Director",
      expertise: "Strategic Leadership & Business Development",
      image: "👩‍💼"
    },
    {
      name: "Emeka Okafor",
      position: "Head of Operations",
      expertise: "Process Optimization & Change Management",
      image: "👨‍💼"
    },
    {
      name: "Fatima Al-Hassan",
      position: "Technology Director",
      expertise: "Digital Transformation & IT Strategy",
      image: "👩‍💻"
    },
    {
      name: "David Okoye",
      position: "Senior Consultant",
      expertise: "Market Research & Analytics",
      image: "👨‍🔬"
    }
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                KIECH Industries
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {['home', 'about', 'industries', 'services', 'achievements', 'testimonials', 'team', 'process', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                      activeSection === item 
                        ? 'text-blue-600 border-b-2 border-blue-600 transform scale-105' 
                        : 'text-gray-700 hover:text-blue-600 hover:scale-105'
                    }`}
                  >
                    {item === 'achievements' ? 'Stats' : item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'industries', 'services', 'achievements', 'testimonials', 'team', 'process', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 capitalize w-full text-left transition-colors duration-200"
                >
                  {item === 'achievements' ? 'Stats' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-screen">
          <div className="text-center w-full">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                KIECH Industries
                <span className="block text-3xl md:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                  Limited
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforming businesses through innovative consulting solutions across diverse industries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                >
                  Discover More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              KIECH Industries Limited is a dynamic management consulting firm committed to delivering 
              transformative solutions across diverse industries worldwide.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses across diverse sectors by providing strategic consulting services 
                that foster innovation, efficiency, and sustainable growth.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a leading management consulting firm renowned for excellence, impact, 
                and transformative solutions across global industries.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized consulting solutions across key industry sectors with deep expertise and proven results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose KIECH Industries?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Industry Expertise", desc: "Deep knowledge across multiple sectors with proven track record" },
                { title: "Customized Solutions", desc: "Every client engagement is unique and tailored to specific needs" },
                { title: "Results-Oriented", desc: "Measurable outcomes and ROI-driven strategies for sustainable growth" },
                { title: "Global Perspective", desc: "Combining local insights with international best practices" },
                { title: "Trusted Advisors", desc: "Building lasting relationships grounded in trust and performance" },
                { title: "Innovation Focus", desc: "Leveraging cutting-edge methodologies and emerging technologies" }
              ].map((point, index) => (
                <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{point.title}</h4>
                    <p className="text-gray-600 text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Award className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-2">{counters.projects}+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Users className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-2">{counters.clients}+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Clock className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-2">{counters.experience}+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Star className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold mb-2">{counters.satisfaction}%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear what our clients say about their transformative experiences with KIECH Industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <Quote className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and excellence at KIECH Industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.position}</div>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and lasting business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to transform your business? Connect with our team of experts and start your journey today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="group text-center">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Phone className="w-8 h-8 mx-auto mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="opacity-80 text-sm">+234 810 441 8967</p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Mail className="w-8 h-8 mx-auto mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="opacity-80 text-sm">info@kietchindustries.com</p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <Linkedin className="w-8 h-8 mx-auto mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="opacity-80 text-sm">[Insert LinkedIn URL]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                KIECH Industries
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses through innovative consulting solutions across diverse industries.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Strategic Planning</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Operations Improvement</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Digital Transformation</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Change Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Agriculture</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Technology</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Manufacturing</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">Energy & Power</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                  <Globe2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 KIECH Industries Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default KiechIndustries;