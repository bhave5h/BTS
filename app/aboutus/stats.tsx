"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  label: string;
  suffix?: string;
};

const STATS: StatItem[] = [
  {
    value: 200,
    label: "Happy Clients",
    suffix: "+",
  },
  {
    value: 90,
    label: "Average Revenue Growth",
    suffix: "%",
  },
  {
    value: 350,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    value: 5,
    label: "Years of Experience",
    suffix: "+",
  },
];

export default function Stats() {
  return (
    <section className="bg-black text-white py-40">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="mb-2 text-4xl font-bold text-white heading"> OUR <span className="text-[#40BBFF]">ACHIEVEMENTS</span> </h1>

        {/* Subheading */}
        <p className="mt-2 max-w-3xl mx-auto text-2xl text-[#848484]">
          We've helped businesses increase their revenue on average by{" "}
          <span className="text-white font-semibold">90%</span> in their first
          year with us!
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------
   Counter Component
-------------------------------- */
function StatCounter({
  value,
  label,
  suffix = "",
}: StatItem) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // start when 50% visible
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 800;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [hasStarted, value]);

  return (
    <div ref={ref}>
      <div className="text-5xl md:text-6xl font-extrabold">
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-sm uppercase tracking-wide text-white/60">
        {label}
      </p>
    </div>
  );
}
