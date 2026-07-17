import { useEffect, useRef, useState } from 'react';

// Animates a number from 0 to `end` once the element scrolls into view.
export default function useCounter(end, duration = 1000) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();
            const animate = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              setValue(Math.floor(progress * end));
              if (progress < 1) requestAnimationFrame(animate);
              else setValue(end);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return [ref, value];
}
