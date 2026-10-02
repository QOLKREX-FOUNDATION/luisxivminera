"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Inicio", "#inicio"],
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Proyectos", "#proyectos"],
  ["Equipo", "#equipo"],
  ["Novedades", "#novedades"],
  ["Contacto", "#contacto"],
];

function Brand() {
  return (
    <a className="site-brand" href="#inicio" aria-label="SAN MATEO, inicio">
      <Image
        src="/san-mateo-logo.png"
        alt="SAN MATEO"
        width={547}
        height={129}
        priority
      />
    </a>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 50);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header-scrolled" : ""}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href="tel:+51987654321">
              <span aria-hidden="true">☎</span> +51 987 654 321
            </a>
            <a href="mailto:contacto@leonxivminera.com">
              <span aria-hidden="true">✉</span> contacto@leonxivminera.com
            </a>
          </div>
          <div className="topbar-social" aria-label="Redes sociales">
            <a href="#contacto" aria-label="LinkedIn">
              in
            </a>
            <a href="#contacto" aria-label="Instagram">
              ◎
            </a>
            <a href="#contacto" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>
      </div>
      <div className="nav-shell">
        <div className="container nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            {links.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contacto">
            Hablemos <span aria-hidden="true">↗</span>
          </a>
          <div className={`mobile-menu${menuOpen ? " mobile-menu-open" : ""}`}>
            <button
              aria-label={
                menuOpen
                  ? "Cerrar menú de navegación"
                  : "Abrir menú de navegación"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="mobile-menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            {menuOpen && (
              <nav id="mobile-navigation" aria-label="Navegación móvil">
                {links.map(([label, href]) => (
                  <a href={href} key={label} onClick={() => setMenuOpen(false)}>
                    {label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
