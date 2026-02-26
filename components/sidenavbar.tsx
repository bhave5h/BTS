"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./sidebar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* MENU BUTTON */}
      {!open && (
        <button
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      )}

      {/* OVERLAY */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={handleClose}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="heading-h3 text-3xl font-extrabold">
            BIGTOP<span className="heading-highlight">SOCIAL</span>
          </h2>
        </div>

        {/* NAV LINKS */}
        <nav className="sidebar-nav simple-nav">
          <Link href="/" onClick={handleClose}>Home</Link>
          <Link href="/services" onClick={handleClose}>Services</Link>
          <Link href="/works" onClick={handleClose}>Work</Link>
          <Link href="/aboutus" onClick={handleClose}>About</Link>
          <Link href="/contactus" onClick={handleClose}>Contact</Link>
        </nav>
      </aside>
    </>
  );
}
