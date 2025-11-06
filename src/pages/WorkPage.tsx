import { useEffect, useState } from 'react';
import { Code, Smartphone, Cpu, MessageSquare, Palette, ArrowRight } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: string) => void;
}

export default function WorkPage({ onNavigate }: WorkPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      tagline: 'Digital spaces that breathe with intelligence',
      description:
        'From elegant landing pages to complex web applications, we craft digital experiences that combine cutting-edge technology with timeless design.',
      features: ['Custom Web Apps', 'E-commerce Platforms', 'Progressive Web Apps', 'API Integration'],
    },
    {
      icon: Smartphone,
      title: 'App Development',
      tagline: 'Mobile experiences that feel like magic',
      description:
        'Native and cross-platform applications that deliver seamless performance and intuitive interfaces across all devices.',
      features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'UI/UX Design', 'App Optimization'],
    },
    {
      icon: Cpu,
      title: 'AI Automations',
      tagline: 'Intelligence that works while you dream',
      description:
        'Harness the power of artificial intelligence to automate workflows, analyze data, and unlock new possibilities for your business.',
      features: ['Process Automation', 'Machine Learning', 'Data Analytics', 'Custom AI Models'],
    },
    {
      icon: MessageSquare,
      title: 'AI Consultations',
      tagline: 'Strategy meets innovation',
      description:
        'Expert guidance on integrating AI into your business, identifying opportunities, and developing roadmaps for intelligent transformation.',
      features: ['AI Strategy', 'Technology Roadmaps', 'Implementation Planning', 'Training & Support'],
    },
    {
      icon: Palette,
      title: 'Creative Integrations',
      tagline: 'Where artistry meets technology',
      description:
        'Holistic solutions that blend branding, design systems, and intelligent technology into cohesive, memorable experiences.',
      features: ['Brand Identity', 'Design Systems', 'Visual Strategy', 'Creative Direction'],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-gold-400 mb-4 block">
              What We Do
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-8">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We build intelligent systems for humans who value beauty and function in equal measure.
            </p>
          </div>

          <div className="space-y-12 mb-32">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-3xl overflow-hidden group transition-all duration-500 hover:glow-gold"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-12">
                  <div>
                    <div className="w-16 h-16 rounded-full glass mb-6 flex items-center justify-center group-hover:glow-gold transition-all duration-300">
                      <service.icon className="text-gold-400 w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light mb-3 text-gray-100 group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gold-400 text-sm italic mb-6">{service.tagline}</p>
                    <p className="text-gray-400 leading-relaxed mb-8">{service.description}</p>
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="flex items-center gap-2 text-gold-400 group-hover:gap-3 transition-all"
                    >
                      See Projects
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center">
                    <div className="w-full">
                      <h3 className="text-sm uppercase tracking-wider text-gold-400 mb-4">
                        Capabilities
                      </h3>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Ready to Start Your <span className="text-gradient">Project</span>?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Let's discuss how we can bring your vision to life with intelligence, elegance, and
                precision.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 glass glass-hover rounded-full text-gold-400 glow-gold-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
