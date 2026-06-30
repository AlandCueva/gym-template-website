import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Unobserve to keep the animated state once visible
        observer.unobserve(element);
      }
    }, options || { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

    observer.observe(element);

    return () => {
      if (element) {
        try {
          observer.unobserve(element);
        } catch (e) {
          // ignore
        }
      }
    };
  }, [options]);

  return { ref, isInView };
}
