"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#ffffff] text-black">
      {/* ================= MAIN ================= */}
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_0.6fr]">
          
          {/* ================= LEFT ================= */}
          <div className="flex flex-col gap-6">

            
          {/* logo */}
          <div className="flex justify-center sm:justify-start">
            <img src="/icons/brandlogo.png" alt="brand logo"/>
          </div>

          {/* COPY */}
          <div className="max-w-md text-center sm:text-left">
            <p className="text-lg md:text-xl font-semibold leading-snug">
              We help brands grow through thoughtful, scroll-stopping creative.
            </p>

            <p className="mt-3 text-sm md:text-base text-black/70">
              Monthly insights, case studies, and behind-the-scenes thinking.
            </p>
          </div>
        </div>


          {/* ================= MIDDLE ================= */}
          <div className="grid grid-cols-2 gap-10 text-center sm:text-left">
            <div>
              <h4 className="mb-4 text-sm font-extrabold uppercase tracking-widest">
                Explore
              </h4>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="/aboutus" className="hover:underline">About</a></li>
                <li><a href="/services" className="hover:underline">Services</a></li>
                <li><a href="/ourteam" className="hover:underline">Team</a></li>
                <li><a href="/clients" className="hover:underline">Clients</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-extrabold uppercase tracking-widest">
                Work
              </h4>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="/works" className="hover:underline">Case Studies</a></li>
                <li><a href="/works#featured" className="hover:underline">Featured</a></li>
                <li><a href="/contactus" className="hover:underline">Contact</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy</a></li>
              </ul>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex gap-4 lg:flex-col">
              {["i", "x", "l"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    bg-white
                    transition
                    hover:scale-105
                    shadow-md
                  "
                >
                  <img
                    src={`/icons/${icon}.png`}
                    alt="social"
                    className="h-4 w-4"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-black/20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-black/80">
            <span className="text-center">
              © {new Date().getFullYear()} BigTop Social — Nagpur
            </span>

            <nav className="flex gap-6">
              <a href="/terms" className="hover:underline">Terms</a>
              <a href="/privacy" className="hover:underline">Privacy</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
