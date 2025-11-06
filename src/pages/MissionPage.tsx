import { useEffect, useState } from 'react';
import { Target, Eye, TrendingUp } from 'lucide-react';

export default function MissionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    {
      phase: 'Foundation',
      year: '2024',
      title: 'The Beginning',
      description: 'Establishing our core values and building foundational systems',
    },
    {
      phase: 'Growth',
      year: '2025',
      title: 'Expansion',
      description: 'Scaling operations and delivering transformative solutions worldwide',
    },
    {
      phase: 'Innovation',
      year: '2026',
      title: 'Evolution',
      description: 'Pioneering new AI technologies and redefining industry standards',
    },
    {
      phase: 'Legacy',
      year: '2030',
      title: 'Global Impact',
      description: 'Becoming a beacon of intelligent, elegant innovation across industries',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-gold-400 mb-4 block">
              Our Purpose
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-8">
              Mission & <span className="text-gradient">Vision</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="glass rounded-3xl p-12 group hover:glow-gold transition-all duration-500">
              <div className="w-16 h-16 rounded-full glass mb-8 flex items-center justify-center">
                <Target className="text-gold-400 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-light text-gold-400 mb-6">Our Mission</h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-6 font-light">
                To Craft Technology That Feels Alive.
              </p>
              <p className="text-gray-400 leading-relaxed">
                To craft safe, elegant, and intelligent tech that empowers creators and brands — blending retro soul with modern innovation to make life simpler, richer, and more human.
              </p>
            </div>

            <div className="glass rounded-3xl p-12 group hover:glow-gold transition-all duration-500">
              <div className="w-16 h-16 rounded-full glass mb-8 flex items-center justify-center">
                <Eye className="text-gold-400 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-light text-gold-400 mb-6">Our Vision</h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-6 font-light">
                To Become a Global Ecosystem of Intelligent, Elegant Innovation.
              </p>
              <p className="text-gray-400 leading-relaxed">
                To become the world’s most trusted innovation studio — where design, software, and hardware meet in harmony, creating a safer and more beautifully connected world.
              </p>
            </div>
          </div>

          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <TrendingUp className="text-gold-400 w-8 h-8" />
                <h2 className="text-4xl md:text-5xl font-light">
                  Our <span className="text-gradient">Journey</span>
                </h2>
              </div>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                From foundation to legacy, every phase is guided by our commitment to precision and
                artistry.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-16 ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="ml-16 md:ml-0 md:pl-16">
                    <div
                      className={`glass glass-hover rounded-2xl p-8 ${
                        index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-light text-gold-400/30">{item.year}</span>
                        <span className="text-xs uppercase tracking-widest text-gold-400">
                          {item.phase}
                        </span>
                      </div>
                      <h3 className="text-2xl font-light text-gold-400 mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full bg-gold-500 -translate-x-1/2 glow-gold" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Join Us on This <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                The future isn't something we wait for—it's something we create. Together, we're
                building technology that transcends expectations and redefines possibilities.
              </p>
              <div className="inline-flex items-center gap-2 text-gold-400 text-sm">
                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span>Currently in Foundation Phase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
