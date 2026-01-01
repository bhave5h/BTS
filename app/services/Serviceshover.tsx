"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  discription: string;
  images: [ImageSource, ImageSource];
}

/* ---------------- ITEM ---------------- */

function RevealImageListItem({
  text,
  discription,
  images,
}: ShowImageListItemProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative group p-6"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={(e) =>
        setPos({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      {/* TEXT */}
      <h2
        className=" font-bold
          text-2xl sm:text-3xl md:text-3xl
          text-white leading-tight
          transition-opacity duration-300
          group-hover:opacity-40
        "> {text}
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-1 max-w-md text-m text-gray-400 leading-relaxed">
        {discription}
      </p>

      {/* CURSOR IMAGES (ALWAYS RENDERED) */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {/* Image 1 */}
        <img
          src={images[0].src}
          alt={images[0].alt}
          style={{
            transform: `translate(${pos.x + 24}px, ${pos.y - 40}px) scale(${active ? 1 : 0.9})`,
            opacity: active ? 1 : 0,
          }}
          className="
            absolute w-24 h-24 object-cover rounded-md
            shadow-xl
            transition-all duration-300 ease-out
          "
        />

        {/* Image 2 */}
        <img
          src={images[1].src}
          alt={images[1].alt}
          style={{
            transform: `translate(${pos.x + 48}px, ${pos.y - 12}px) rotate(12deg) scale(${active ? 1 : 0.9})`,
            opacity: active ? 1 : 0,
          }}
          className="
            absolute w-24 h-24 object-cover rounded-md
            shadow-xl
            transition-all duration-400 ease-out
          "
        />
      </div>
    </div>
  );
}


/* ---------------- LIST ---------------- */

function Service() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Social Media Marketing",
      discription:
        "Build brand awareness and audience engagement through high-impact content and strategic campaigns.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=300&auto=format&fit=crop&q=60",
          alt: "Social media",
        },
        {
          src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=300&auto=format&fit=crop&q=60",
          alt: "Marketing",
        },
      ],
    },
    {
      text: "Performance Marketing",
      discription:
        "Data-driven ad campaigns focused on ROI, conversions, and measurable growth.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=300&auto=format&fit=crop&q=60",
          alt: "Ads",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&auto=format&fit=crop&q=60",
          alt: "Analytics",
        },
      ],
    },
    {
      text: "Web Development",
      discription:
        "High-performance websites built with modern technologies and clean UI systems.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=300&auto=format&fit=crop&q=60",
          alt: "Development",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&auto=format&fit=crop&q=60",
          alt: "Code",
        },
      ],
    },
    {
      text: "Search Engine Optimization",
      discription:
        "SEO to improve visibility, rankings, and organic traffic.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=300&auto=format&fit=crop&q=60",
          alt: "SEO",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&auto=format&fit=crop&q=60",
          alt: "Search",
        },
      ],
    },
    {
      text: "Influencer Marketing",
      discription:
        "Collaborations with creators to build trust and amplify brand reach.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=300&auto=format&fit=crop&q=60",
          alt: "Influencers",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&auto=format&fit=crop&q=60",
          alt: "Creators",
        },
      ],
    },
    {
      text: "Photography",
      discription:
        "Crafting strong visual identities that connect emotionally with your audience.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=300&auto=format&fit=crop&q=60",
          alt: "Brand",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=300&auto=format&fit=crop&q=60",
          alt: "Identity",
        },
      ],
    },
  ];

  return (
<section className=" px-6 py-16">
  <div className="flex flex-col items-center text-center">
    
    <h1 className="mb-6 text-4xl font-bold text-white">
      OUR <span className="text-[#40BBFF]">SERVICES</span>
    </h1>

    <h2 className="mb-12 text-2xl md:text-3xl font-bold text-white">
    MAKING YOUR BRAND THE MAIN <br />
    <span className="italic text-[#40BBFF]">"MAIN CHARACTER"</span>
    </h2>
  </div>

  <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
    {items.map((item) => (
      <RevealImageListItem key={item.text} {...item} />
       ))}
  </div>
</section>
  );
}

export { Service };
