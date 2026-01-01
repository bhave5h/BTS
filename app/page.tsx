import { AnimatedTestimonials } from "./testimonials/animated-testimonials";
import { TESTIMONIALS } from "./testimonials/testimonials.data";

import { Service } from "./services/Serviceshover";
import Video from "./works/videos";
import Ourteam from "./aboutus/page";
import ContactForm from "./contactus/page";
import Stats from "./testimonials/stats";
import dynamic from "next/dynamic";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* SERVICES SECTION */}
      <section>
        <Service />
      </section>

      {/* WORKS SECTION */}
      <section>
        <Video />
      </section>

      {/* TEAM SECTION */}
      <section>
        <Ourteam />
      </section>

      {/* testimonials SECTION */}
      <section>
        <Stats />
        <AnimatedTestimonials
        testimonials={TESTIMONIALS}
        autoplay
        className="bg-black"
      />
      </section>

      {/* CONTACT SECTION */}
      <section>
        <ContactForm />
      </section>

          

    </>
  );
}
