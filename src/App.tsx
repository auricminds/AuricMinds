import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import WorkPage from './pages/WorkPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'about' | 'mission' | 'work' | 'portfolio' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      document.documentElement.style.setProperty('--mouse-x', `${x * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'mission':
        return <MissionPage />;
      case 'work':
        return <WorkPage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(194,153,88,0.05),transparent_50%)]" />
      </div>

      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="relative z-10">
        <PageTransition isTransitioning={isTransitioning}>{renderPage()}</PageTransition>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
