"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

type Props = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: Props) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);
  const reduceMotion = useReducedMotion();

  /* -------------------------------------------
     Generate rotations AFTER hydration
  -------------------------------------------- */
  useEffect(() => {
    setRotations(
      testimonials.map(
        () => Math.floor(Math.random() * 21) - 10
      )
    );
  }, [testimonials.length]);

  /* -------------------------------------------
     Navigation
  -------------------------------------------- */
  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  /* -------------------------------------------
     Autoplay
  -------------------------------------------- */
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  return (
    <section
      aria-label="Client testimonials"
      className={cn(
        "max-w-sm md:max-w-4xl mx-auto px-3 md:px-6 lg:px-2 py-2",
        className
      )}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* IMAGE STACK */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={false} // 🔥 IMPORTANT
                animate={{
                  opacity: index === active ? 1 : 0.6,
                  scale: index === active ? 1 : 0.95,
                  rotate:
                    index === active
                      ? 0
                      : rotations[index] ?? 0,
                  zIndex:
                    index === active
                      ? 999
                      : testimonials.length - index,
                  y:
                    index === active && !reduceMotion
                      ? [0, -80, 0]
                      : 0,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover"
                  priority={index === active}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>

            <p className="text-lg text-muted-foreground mt-8">
              {testimonials[active].quote}
            </p>
          </motion.div>

          {/* CONTROLS */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground" />
            </button>

            <button
              aria-label="Next testimonial"
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center"
            >
              <IconArrowRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
