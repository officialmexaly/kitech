"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wheat,
  Building2,
  Cog,
  Laptop,
  Truck,
  Zap,
  Check,
  ArrowRight
} from 'lucide-react';
import Card from '../components/ui/Card';
import IconWrapper from '../components/ui/IconWrapper';
import { Button } from '@/components/ui/button';
import Container from '../components/ui/Container';
import GradientText from '../components/ui/GradientText';
import ScrollAnimation from '../components/ui/ScrollAnimation';



export default function IndustriesPage() {
  const industries = [
    {
      title: "Agriculture",
      description: "Value chain analysis, productivity improvement, sustainable practices, and market expansion strategies.",
      icon: <Wheat className="w-full h-full" />,
      accentColor: "#10B981",
      services: [
        "Farm management optimization",
        "Supply chain development",
        "Market access strategies",
        "Sustainable agriculture practices"
      ]
    },
    {
      title: "Real Estate",
      description: "Project planning, risk management, and market feasibility studies for development.",
      icon: <Building2 className="w-full h-full" />,
      accentColor: "#F59E0B",
      services: [
        "Property development consulting",
        "Market feasibility studies",
        "Investment analysis",
        "Risk management strategies"
      ]
    },
    {
      title: "Manufacturing",
      description: "Production optimization, supply chain management, and lean manufacturing practices.",
      icon: <Cog className="w-full h-full" />,
      accentColor: "#64748B",
      services: [
        "Production efficiency improvement",
        "Quality management systems",
        "Supply chain optimization",
        "Lean manufacturing implementation"
      ]
    },
    {
      title: "Technology",
      description: "Digital transformation strategies, IT project management, and cybersecurity advisory.",
      icon: <Laptop className="w-full h-full" />,
      accentColor: "#06B6D4",
      services: [
        "Digital transformation roadmaps",
        "IT infrastructure planning",
        "Cybersecurity assessments",
        "Technology adoption strategies"
      ]
    },
    {
      title: "Logistics",
      description: "End-to-end logistics consulting, supply chain optimization, and warehouse management.",
      icon: <Truck className="w-full h-full" />,
      accentColor: "#A855F7",
      services: [
        "Logistics network design",
        "Warehouse optimization",
        "Transportation management",
        "Last-mile delivery solutions"
      ]
    },
    {
      title: "Energy & Power",
      description: "Energy project development, regulatory compliance, and sustainability solutions.",
      icon: <Zap className="w-full h-full" />,
      accentColor: "#EAB308",
      services: [
        "Renewable energy project development",
        "Energy efficiency audits",
        "Regulatory compliance support",
        "Sustainability consulting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="pt-[200px] pb-20 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-50)] via-white to-[var(--slate-50)]"></div>

        <Container>
          <div className="text-center relative z-10 opacity-100">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--slate-950)] mb-6 leading-tight">
              Industries <GradientText>We Serve</GradientText>
            </h1>
            <p className="text-xl text-[var(--slate-600)] max-w-3xl mx-auto leading-relaxed">
              Specialized consulting solutions across key industry sectors with deep expertise and proven results.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-20 relative">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} animation="zoom-in">
                <Card
                  variant="bordered"
                  padding="lg"
                  hover={true}
                  className="h-full border-glow group"
                >
                  {/* Icon with industry-specific color */}
                  <div className="mb-6">
                    <IconWrapper
                      icon={industry.icon}
                      shape="rounded"
                      size="xl"
                      customColor={industry.accentColor}
                      animate={true}
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-[var(--slate-950)] mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-[var(--slate-600)] mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Services List */}
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--primary-900)] mb-3 uppercase tracking-wide">
                      Key Services
                    </h4>
                    <ul className="space-y-2">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start text-sm text-[var(--slate-600)]">
                          <Check
                            className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                            style={{ color: industry.accentColor }}
                          />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Professional gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-900)] to-[var(--primary-700)]"></div>

        <Container size="lg">
          <div className="relative text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Industry Expertise You Can Trust
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            >
              No matter your industry, we have the expertise to help you succeed
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services">
                <Button
                  variant="secondary"
                  size="lg"
                >
                  View Our Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="accent"
                  size="lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
