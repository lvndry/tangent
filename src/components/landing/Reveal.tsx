"use client";

import { createElement, type CSSProperties, type ReactNode, useEffect, useRef } from "react";

type RevealTag = "div" | "h2" | "h3" | "p";

type RevealProps = {
  as?: RevealTag;
  index?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ as = "div", index = 0, className = "", children }: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref: elementRef,
      className: `reveal ${className}`.trim(),
      style: { "--index": index } as CSSProperties,
    },
    children,
  );
}
