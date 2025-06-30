import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export const AnimatedCounter = ({ value, suffix = "", label }: AnimatedCounterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: isVisible ? 1 : 0 },
    config: { duration: 2000 },
    delay: 300,
    reset: true
  });

  return (
    <div ref={ref} className="text-center">
      <animated.span 
        className="text-4xl md:text-5xl font-bold text-accent-gold block mb-2"
      >
        {number.to(n => Math.floor(n * value).toLocaleString() + suffix)}
      </animated.span>
      <span className="text-sm text-text-light uppercase tracking-wider">{label}</span>
    </div>
  );
};

export default AnimatedCounter;
