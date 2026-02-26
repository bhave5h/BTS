"use client";

import styles from "./reels.module.css";
import { motion } from "framer-motion";

interface Reel {
  id: number;
  src: string;
  title: string;
}

const reels: Reel[] = [
  { id: 1, src: "/work/1.mp4", title: "Brand Blueprint" },
  { id: 2, src: "/work/2.mp4", title: "Culture & Trends" },
  { id: 3, src: "/work/3.mp4", title: "Content Creation" },
  { id: 4, src: "/work/4.mp4", title: "Community Building" }
];

export default function ReelStudio() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      
      {/* ================= REEL SLIDER ================= */}
      <div className="mx-auto w-full max-w-[1000px] overflow-hidden">

         <div className="flex flex-col items-center text-center">
    
    <h1 className="mb-6 text-4xl font-bold text-white heading">
      WORKS
    </h1>

    <h2 className="mb-12 text-2xl md:text-3xl font-bold text-white">
    WHAT WE CAN DO <span className="text-[#40BBFF]">TOGETHER</span>
    </h2>
  </div>
        <div
          className="
            reel-track
            animate-reel
            flex
            w-max
            gap-28 md:gap-22
            py-12
            hover:[animation-play-state:paused]
          "
        >
          {[...reels, ...reels].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="
                relative
                flex-shrink-0
                w-[200px] sm:w-[220px]
                aspect-[9/16]
                rounded-xl
                bg-black
                cursor-pointer
                shadow-[0_18px_48px_rgba(0,0,0,0.55)]
                overflow-hidden
              "
            >
              {/* VIDEO */}
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  flex items-end
                  bg-gradient-to-t
                  from-black/70
                  via-black/30
                  to-transparent
                  p-4
                "
              >
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
