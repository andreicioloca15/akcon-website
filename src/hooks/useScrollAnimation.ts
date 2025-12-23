import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  distance?: number;
  delay?: number;
  threshold?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): React.RefObject<T> {
  const ref = useRef<T>(null);
  const { distance = 50, delay = 0, threshold = 0.1 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isMobile = window.innerWidth < 768;
    const adjustedDistance = isMobile ? distance * 0.5 : distance;
    const adjustedDelay = isMobile ? delay * 0.7 : delay;

    element.style.opacity = '0';
    element.style.transform = `translateY(${adjustedDistance}px) scale(0.95)`;
    element.style.transition = `opacity 0.6s ease-out ${adjustedDelay}ms, transform 0.6s ease-out ${adjustedDelay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0) scale(1)';
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [distance, delay, threshold]);

  return ref;
}

export function useStaggeredAnimation(count: number, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, i]));
            }, i * delay);
          }
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [count, delay, hasAnimated]);

  return { elementRef, visibleItems };
}

export function useAnimatedCounter(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();

    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      const currentCount = start + (end - start) * easedProgress;
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return { count, elementRef };
}
