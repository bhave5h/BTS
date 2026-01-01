import React from "react";
import PersonCard from "./PersonCard";
import "./aboutus.css";

export default function Ourteam() {
  return (
    <main className="ourteam-page">


      {/* Hero */}
      <section className="ourteam-hero container">
        <h1 className="ourteam-title">OUR TEAM</h1>
        <p className="ourteam-subtitle">
          We’re a crew of creators, strategists, editors, and growth marketers
          who live and breathe social media. From viral content to performance
          campaigns, we turn attention into engagement—and engagement into
          growth.
        </p>
      </section>

      {/* Team */}
      <section className="ourteam-section container">
        <h2 className="ourteam-section-title">Leadership & Team</h2>

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

        <p className="ourteam-note">
          More team members will be added here — these are sample placeholders.
        </p>
        
      </section>
    </main>
  );
}
