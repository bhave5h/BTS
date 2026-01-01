import { Service } from "./services/Serviceshover";
import Video from "./works/videos";
import Ourteam from "./aboutus/page";
import ContactForm from "./contactus/page";

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
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20">
        <Video />
      </section>

      {/* TEAM SECTION */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20">
        <Ourteam />
      </section>

      {/* CONTACT SECTION */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20">
        <ContactForm />
      </section>
    </>
  );
}
