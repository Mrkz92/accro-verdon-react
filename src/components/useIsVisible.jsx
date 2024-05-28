import { useEffect, useRef, useState } from "react";

export default function useIsVisible() {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const observe = (element) => {
    if (observerRef.current && element) {
      observerRef.current.observe(element);
    }
  };

  return { isVisible, setIsVisible, observe };
}
