import { useEffect, useState } from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import nanoBanana from '../assets/nano-banana-2025-10-22T15-31-52.png';


interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Female Model Portfolio Website',
      category: 'Web Development',
      year: '2025',
      tagline: 'Elegance in Every Frame.',
      description:
        'A luxury digital portfolio designed to reflect the timeless elegance and artistic vision of Malak Ghuneem — a modern Egyptian model redefining sophistication through every frame.',
      challenge:
        'The challenge was to translate Malak’s authentic style and versatility into a digital experience that feels as captivating and graceful as her presence in front of the camera.',
      approach:
        'Using pure HTML, CSS, and JavaScript, we crafted a minimalist yet luxurious interface that highlights visuals over noise. Every detail — from motion to typography — was carefully designed to evoke elegance, depth, and emotional connection.',
      result:
        'A stunning online identity that mirrors Malak’s artistry. The website delivers an immersive visual journey, increased her professional inquiries, and became the foundation of her digital brand.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: nanoBanana,
    },
    {
      id: 2,
      title: 'VÉRITÉ HOUSE — The Art of Digital Storytelling',
      category: 'Luxury Creative Agency Website',
      year: '2024',
      tagline: 'Where Creativity Meets Classic Luxury',
      description:
        'VÉRITÉ HOUSE is a high-end creative agency concept blending vintage elegance with modern minimalism. The website was designed as a cinematic experience — slow, emotional, and meticulously balanced between art direction and functionality. Inspired by old Parisian aesthetics and infused with AI-driven design logic, it redefines what a digital creative studio can feel like.',
      challenge:
        'Most agency websites feel cold, predictable, or overly corporate. The goal was to design a digital home that evokes emotion — something that feels more like a film than a website. The challenge was balancing luxury, storytelling, and seamless interactivity without losing performance or simplicity.',
      approach:
        'The project began with a deep exploration of timeless design — drawing from vintage editorial layouts, film typography, and natural motion flow. I combined smooth scroll animations, layered textures, and cinematic transitions to create a feeling of quiet sophistication. Every element — from the serif fonts to the golden accents — was chosen to reflect luxury and truth in creativity, aligning with the brand’s name Vérité (“truth” in French).',
      result:
        'A visually poetic website that blends art direction with interactive design. The final experience feels like walking through a digital atelier — immersive, emotive, and elegant. The design successfully communicates luxury without arrogance, artistry without chaos, and innovation without losing its soul."',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vanilla + GSAP for animation'],
      image: 'public/Verte Mock post.png',
    },
    {
      id: 3,
      title: 'THE EMPYRE CLUB — The Digital Society of Luxury',
      category: 'Luxury Lifestyle & Membership Experience Website',
      year: '2024',
      tagline: 'Exclusivity Redefined.',
      description:
        'THE EMPYRE CLUB is a digital concept for an elite members-only community — where art, technology, and prestige merge. The design captures the feeling of walking into a hidden world reserved for visionaries, artists, and innovators. Deep navy, gold, and ivory tones build an atmosphere of timeless elegance, while smooth motion and ambient soundscapes enhance the sense of secrecy and sophistication.',
      challenge:
        'The goal was to translate exclusivity into a digital form without feeling cold or uninviting. The challenge was finding the balance between mystery and clarity — designing an interface that feels private yet desirable, cinematic yet functional.',
      approach:
        'Inspired by private clubs, luxury watch brands, and secret societies, I designed an interface that relies on atmosphere and restraint. Using subtle gold animations, blurred glass textures, and soft audio cues, the experience immerses the user in the aura of The Empyre Club. Each section (Membership, Events, Gallery, The Experience) unfolds like chapters of a film — revealing more as you explore.',
      result:
        'A visually enchanting and emotionally driven digital experience that transforms the concept of a private club into an interactive story. The result is not just a website, but a mood — refined, cinematic, and unforgettable.',
      technologies: ['HTML5', 'CSS3', 'JavaScript (GSAP animations)', 'Tailwind CSS + custom luxury typography'],
      image: 'public/mock website post club 2.png',
    },
    {
      id: 4,
      title: 'NEONIX LABS — Engineering the Future',
      category: 'AI & Hardware Innovation Website',
      year: '2023',
      tagline: 'Tomorrow, Designed Today.',
      description:
        'NEONIX LABS represents the intersection of artificial intelligence, advanced hardware, and human-centered design. The website concept embodies a sleek, cyber-luxury aesthetic — merging neon vibrance with glassmorphic surfaces and fluid animations. Built as a futuristic interface for a next-gen innovation lab, it mirrors the precision and intelligence of the technologies it showcases.',
      challenge:
        'AI and hardware companies often struggle to communicate sophistication and warmth simultaneously. The challenge was to build a visual identity that feels powerful yet approachable — something that reflects high technology while maintaining a luxury experience. Balancing visual impact, interactivity, and seamless performance was key.',
      approach:
        'The creative direction drew from cyberpunk minimalism and real-world luxury tech brands like Tesla and Nothing. I used deep blacks with neon gradients to evoke futuristic energy, and glassmorphic layers to give depth and sophistication. Subtle particle motion and holographic lighting simulate a living interface — giving the sense that the site itself is intelligent.',
      result:
        'The final design achieves an immersive, cinematic experience that feels like entering the control room of the future. Every interaction, light reflection, and animation flows with intent. NEONIX LABS became a concept that redefines how high-tech brands can express luxury through motion, atmosphere, and intelligent simplicity."',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS + GSAP for glassmorphic motion', 'Three.js for 3D holographic particle effects'],
      image: 'public/mock website tech 2.png',
    },
    {
      id: 5,
      title: 'Social Video Repurposer',
      category: 'AI Automation',
      year: '2025',
      tagline: 'Transform long videos into viral, platform-ready clips — fully automated.',
      description:
        'A full AI system that ingests a long YouTube-style video and automatically: Detects highlight moments, Cuts clean short-form clips, Auto-generates animated captions, Adds your branding, Creates titles & hashtags, Exports in multiple aspect ratios (9:16 / 1:1 / 16:9), Produces a thumbnail for each clip. The workflow is completely hands-off. You drop a file in → you receive multiple quality clips ready to post on TikTok, Reels, and Shorts.',
      challenge:
        'Creators, businesses, and educators all face one pain',
      approach:
        'The system uses layered intelligence: 1-Full Transcription, 2-Semantic Highlight Detection, 3-Audio + Visual Peak Detection, 4-Clip Extraction, 5-AI Captions + Styling, 6-Thumbnail Detection, 7-Multi-Platform Export. The result feels like a small editing team compressed into one automation.',
      result:
        '1 long video = 3–7 viral short clips.',
      technologies: ['Whisper AI', 'OpenAI GPT reasoning', 'FFmpeg', 'Python (processing pipeline)', 'Scene detection AI'],
      image: 'public/Gemini_Generated_Image_p6d0jlp6d0jlp6d0.jpg',
    },
    {
      id: 6,
      title: 'Smart Outreach Engine',
      category: 'AI Automation',
      year: '2025',
      tagline: 'Human-level personalization at machine speed.',
      description:
        'The Smart Outreach Engine is a workflow that: Reads target leads (CSV, Airtable, CRM), Researches each company, Understands brand tone, Generates personalized messages, Writes subject lines + CTAs, Scores leads automatically, Exports ready-to-send emails & LinkedIn messages. It makes a full outreach campaign in minutes instead of days.',
      challenge:
        'Sales teams and freelancers waste time rewriting the same emails. Personalization is the only thing that works now — but it takes hours. The challenge was to build “personalization at scale.” Each message must feel hand-written.',
      approach:
        'We built a multi-layer engine: 1-Data Ingestion, 2-Lead Research, 3-Brand Voice Modeling, 4-AI Message Generation, 5-Lead Scoring, 6-Campaign Export. It becomes a digital sales assistant.',
      result:
        'Clients get: Higher reply rates, 70% faster outreach workflow, Personalized messages for every lead, Cleaner data + clearer priorities, The ability to run a full campaign in 10 minutes. Perfect for agencies, SaaS founders, coaches, and businesses.',
      technologies: ['GPT models', 'Python automation engine', 'Structured prompt system', 'CSV + CRM integration', 'Gmail/LinkedIn APIs'],
      image: 'public/Gemini_Generated_Image_cig2p9cig2p9cig2.jpg',
    },
  ];

  if (selectedProject !== null) {
    const project = projects[selectedProject];
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <button
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm uppercase tracking-widest text-gold-400">
                {project.category}
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">{project.year}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6">{project.title}</h1>
            <p className="text-2xl text-gold-400 italic font-light">{project.tagline}</p>
          </div>

          <div className="glass rounded-3xl overflow-hidden mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-12">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light text-gold-400 mb-6">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
            </div>

            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light text-gold-400 mb-6">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light text-gold-400 mb-6">Our Approach</h2>
              <p className="text-gray-300 leading-relaxed">{project.approach}</p>
            </div>

            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light text-gold-400 mb-6">The Result</h2>
              <p className="text-gray-300 leading-relaxed">{project.result}</p>
            </div>

            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light text-gold-400 mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 glass rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              Our Work
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-8">
              <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects that showcase the intersection of intelligence,
              elegance, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:glow-gold">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="text-gold-400 w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs uppercase tracking-wider text-gold-400">
                        {project.category}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-light mb-3 text-gray-100 group-hover:text-gold-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 text-gold-400 text-sm group-hover:gap-3 transition-all">
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 glass rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Let's Create Something <span className="text-gradient">Extraordinary</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Your project could be the next masterpiece in our portfolio. Let's discuss how we
                can bring your vision to life.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 glass glass-hover rounded-full text-gold-400 glow-gold-lg hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
