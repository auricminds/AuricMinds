import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isTransitioning: boolean;
}

export default function PageTransition({ children, isTransitioning }: PageTransitionProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShow(false);
    } else {
      const timer = setTimeout(() => setShow(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div
      className={`transition-all duration-700 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}
