import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import LogoSlider from '../components/LogoSlider';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProjects = [
    {
      title: 'Neural Interface',
      category: 'AI Development',
      description: 'Intelligent systems that adapt to human behavior',
    },
    {
      title: 'Quantum Commerce',
      category: 'Web Platform',
      description: 'Luxury e-commerce redefined with AI personalization',
    },
    {
      title: 'Ethereal Analytics',
      category: 'Data Visualization',
      description: 'Transform data into living, breathing insights',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>

        <div
          className={`relative z-10 text-center px-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <Sparkles className="text-gold-400 w-6 h-6 animate-glow" />
            <span className="text-sm uppercase tracking-widest text-gold-400">
              Welcome to the Future
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            <span className="text-gradient">AURIC MINDS</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Endless Minds, ONE Vision
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('work')}
              className="group px-8 py-4 glass glass-hover rounded-full flex items-center gap-2 glow-gold"
            >
              <span className="text-gold-400">Explore Our Work</span>
              <ArrowRight className="w-5 h-5 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full border border-gold-500/30 hover:border-gold-500/60 transition-all duration-300 text-gray-300 hover:text-gold-400"
            >
              Start a Project
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-gold-500 to-transparent animate-pulse" />
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Crafting <span className="text-gradient">Intelligent Experiences</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We merge cutting-edge technology with timeless design principles to create
              digital products that don't just work—they inspire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group glass glass-hover rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-widest text-gold-400">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-light mb-4 text-gray-100 group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="flex items-center gap-2 text-gold-400 text-sm group-hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-8 py-4 glass glass-hover rounded-full text-gold-400 hover:glow-gold transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Logo Slider as its own section far from portfolio */}
      <section className="py-12 px-6">
        <LogoSlider />
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Build <span className="text-gradient">Brilliance</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Let's create something extraordinary together.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-5 glass glass-hover rounded-full text-gold-400 glow-gold-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
