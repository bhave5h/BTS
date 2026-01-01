"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./reels.module.css";

const AUTO_SCROLL_DELAY = 10000; // 10 seconds

interface Reel {
  id: number;
  src: string;
  title: string;
  featured?: boolean;
}

interface ReelStudioProps {
  reels?: Reel[];
  logos?: string[];
}

/* ---------------- DEFAULT DATA ---------------- */

const defaultReels: Reel[] = [
  { id: 1, src: "/videos/2.mp4", title: "1Brand Blueprint" },
  { id: 2, src: "/videos/2.mp4", title: "2Culture & Trends"},
  { id: 3, src: "/videos/2.mp4", title: "3Content Creation" },
  { id: 4, src: "/videos/2.mp4", title: "4Community Building" },
  { id: 5, src: "/videos/2.mp4", title: "5Creator Partnerships" },
  { id: 6, src: "/videos/2.mp4", title: "6Paid Performance" },
];

const defaultLogos: string[] = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

/* ---------------- COMPONENT ---------------- */

export default function ReelStudio({
  reels = defaultReels,
  logos = defaultLogos,
}: ReelStudioProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    return {
      canScrollLeft: el.scrollLeft > 5,
      canScrollRight: el.scrollLeft < max - 5,
    };
  };

  const scrollBySlide = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;

    const slide = el.querySelector(`.${styles.card}`) as HTMLElement;
    if (!slide) return;

    const gap = 16;
    const amount = slide.offsetWidth + gap;
    const max = el.scrollWidth - el.clientWidth;

    let target =
      el.scrollLeft + (direction === "right" ? amount : -amount);

    target = Math.max(0, Math.min(target, max));
    el.scrollTo({ left: target, behavior: "smooth" });

    restartAutoScroll();
  };

  const clearAutoScroll = () => {
    if (autoScrollTimeout.current) {
      clearTimeout(autoScrollTimeout.current);
      autoScrollTimeout.current = null;
    }
  };

  const restartAutoScroll = () => {
    clearAutoScroll();
    autoScrollTimeout.current = setTimeout(() => {
      const el = carouselRef.current;
      if (!el) return;

      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollBySlide("right");
      }
    }, AUTO_SCROLL_DELAY);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    restartAutoScroll();

    return () => {
      clearAutoScroll();
    };
  }, []);

  return (
    <section className={styles.studioMain}>
      {/* HEADING */}

        <div className="flex flex-col items-center text-center">
    
    <h1 className="mb-6 text-4xl font-bold text-white heading">
      WORKS
    </h1>

    <h2 className="mb-12 text-2xl md:text-3xl font-bold text-white">
    WHAT WE CAN DO <span className="text-[#40BBFF]">TOGETHER</span>
    </h2>
  </div>

      {/* REEL CAROUSEL */}
      <section className={styles.wrapper}>
        <div className={styles.track} ref={carouselRef}>
          <div className={styles.trackInner}>
            {[...reels, ...reels].map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
              >
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.video}
                />
                <div className={styles.overlay}>
                  <h3>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className={styles.logos}>
         <h1 className="mb-20 text-4xl font-bold text-white heading"> OUR <span className="text-[#40BBFF]">CLIENTS</span> </h1>

        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoBox}>
              <img
                src={`/clientlogo/${logo}`}
                alt="Client logo"
                loading="lazy"
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
