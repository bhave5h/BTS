"use client";

import dynamic from "next/dynamic";
import Stats from "./stats";
import { TESTIMONIALS } from "./testimonials.data";

const AnimatedTestimonials = dynamic(
  () => import("./animated-testimonials").then(m => m.AnimatedTestimonials),
  { ssr: false }
);

export default function TestimonialsPage() {
  return (
    <main>
      <Stats />

      <AnimatedTestimonials
        testimonials={TESTIMONIALS}
        autoplay
      />
    </main>
  );
}
