import { AnimatedTestimonials } from "./aboutus/animated-testimonials";
import { TESTIMONIALS } from "./aboutus/testimonials.data";
import { Service } from "./services/Serviceshover";
import Ourteam from "./team/page";
import ContactForm from "./contactus/page";
import Stats from "./aboutus/stats";
import ReelandVideo from "./works/reels";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/bg.mp4"
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
        <ReelandVideo />
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
