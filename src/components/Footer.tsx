import { Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', value: 'home' },
    { label: 'Work', value: 'work' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Contact', value: 'contact' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/auric_minds?igsh=enFwY20xcHk3NTY0' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/auric-minds-a5a92b390?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJSE7lr7eTy6k5wneJrW%2Fpg%3D%3D' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <footer className="relative mt-32 border-t border-gold-500/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light text-gold-400 mb-4">AURIC MINDS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where intelligence meets artistry. Crafting the future of luxury technology.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-gold-400 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-gold-400 mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Auric Minds — Crafted with Intelligence By UssamaHussein
          </p>
        </div>
      </div>
    </footer>
  );
}
