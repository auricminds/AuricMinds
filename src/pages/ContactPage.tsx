import { useEffect, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-8">
              Let's Build <span className="text-gradient">Brilliance</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Together, we can create something extraordinary. Share your vision, and let's explore
              the possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light text-gold-400 mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-gray-100 placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-gray-100 placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-gray-100 placeholder-gray-600 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-gold-500/20 border border-gold-500/30 rounded-lg text-gold-400 text-sm">
                    Thank you! We'll be in touch soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold-500/20 border border-gold-500 rounded-full text-gold-400 hover:bg-gold-500/30 hover:glow-gold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glass rounded-3xl p-12">
                <h2 className="text-3xl font-light text-gold-400 mb-8">Connect With Us</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                      <Mail className="text-gold-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-gray-100 font-medium mb-1">Email</h3>
                      <p className="text-gray-400">hello@auricminds.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                      <Phone className="text-gold-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-gray-100 font-medium mb-1">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-gold-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-gray-100 font-medium mb-1">Location</h3>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-12">
                <h3 className="text-xl font-light text-gold-400 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="glass rounded-3xl p-12">
                <h3 className="text-xl font-light text-gold-400 mb-4">Response Time</h3>
                <p className="text-gray-400 leading-relaxed">
                  We typically respond within 24 hours during business days. For urgent inquiries,
                  please mention "urgent" in your message subject.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Prefer to <span className="text-gradient">Schedule a Call</span>?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Sometimes a conversation is the best way to explore ideas. Book a complimentary
                consultation to discuss your project in detail.
              </p>
              <button className="px-10 py-5 glass glass-hover rounded-full text-gold-400 glow-gold-lg hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
