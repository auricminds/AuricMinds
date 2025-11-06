import { useEffect, useState } from 'react';
import { Heart, Lightbulb, Zap, Shield } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Precision',
      description: 'Every pixel, every interaction—crafted with meticulous attention to detail.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building trust through transparency, reliability, and ethical innovation.',
    },
    {
      icon: Heart,
      title: 'Artistry',
      description: 'Technology becomes art when function and beauty exist in perfect harmony.',
    },
    {
      icon: Zap,
      title: 'Evolution',
      description: "Constantly learning, adapting, and pushing the boundaries of what's possible.",
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
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-8">
              About <span className="text-gradient">Auric Minds</span>
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-4xl mx-auto mb-32">
            <div className="glass rounded-3xl p-12 mb-12">
              <h2 className="text-3xl font-light text-gold-400 mb-6">The Philosophy</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                In a world saturated with noise, we believe technology should be an extension of
                human intuition—elegant, intelligent, and effortless. Auric Minds was born from
                the vision that the most powerful solutions are those you barely notice, yet cannot
                imagine living without.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We don't just build products. We craft experiences that bridge the gap between
                human aspiration and technological possibility. Every line of code, every design
                decision, every interaction is infused with purpose and poetry.
              </p>
            </div>

            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light text-gold-400 mb-6">The Journey</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded at the intersection of luxury design and artificial intelligence, Auric
                Minds emerged from a simple question: What if technology could feel as refined as a
                handcrafted watch, as intuitive as breathing, as timeless as great architecture?
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our journey began with a commitment to excellence and a refusal to compromise. We
                studied the masters—from Swiss watchmakers to Italian designers, from Silicon
                Valley innovators to ancient philosophers. The result is a unique approach that
                honors tradition while embracing the future.
              </p>
            </div>
          </div>

          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
              Our <span className="text-gradient">Core Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass glass-hover rounded-2xl p-10 group transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-full glass mb-6 flex items-center justify-center group-hover:glow-gold transition-all duration-300">
                    <value.icon className="text-gold-400 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gold-400">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Building the <span className="text-gradient">Future of Connection</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                At Auric Minds, we're not just observers of the digital revolution—we're its
                architects. Join us in creating technology that elevates the human experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
