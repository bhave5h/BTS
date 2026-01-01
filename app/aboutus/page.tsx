import React from "react";
import PersonCard from "./PersonCard";
import "./aboutus.css";

export default function Ourteam() {
  return (
    <main className="ourteam-page">

      {/* Hero */}
      <section className="ourteam-hero container">
        <h1 className="mb-2 text-4xl font-bold text-white heading"> OUR <span className="text-[#40BBFF]">TEAM</span> </h1>
        <p className="mt-2 max-w-3xl mx-auto text-2xl text-[#848484]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas voluptas unde consequatur dolorum corporis, sunt beatae sint quae distinctio!
        </p>
      </section>

      {/* Team */}
      <section className="ourteam-section container">

        <div className="people-grid">
          <PersonCard
            name="Shobhit"
            role="Founder"
            imgSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
          />
          <PersonCard
            name="Co-Founder Name"
            role="Co-Founder"
            imgSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
          />
          <PersonCard
            name="CTO Name"
            role="CTO"
            imgSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
          />
          <PersonCard
            name="Head of Design"
            role="Head of Design"
            imgSrc="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
          />
        </div>

        
      </section>
    </main>
  );
}
