"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?auto=format&fit=crop&w=2200&q=90",
    alt: "Excavadora trabajando en una cantera al atardecer",
    eyebrow: "Minería con visión de futuro",
    heading: "Recursos que impulsan",
    highlight: "el futuro",
    description:
      "Exploramos el potencial del territorio y trabajamos para desarrollar recursos con responsabilidad.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1778146113906-366461e256cb?auto=format&fit=crop&w=2200&q=90",
    alt: "Instalaciones industriales en un paisaje minero",
    eyebrow: "Experiencia que abre caminos",
    heading: "Conocimiento que",
    highlight: "transforma",
    description:
      "Unimos talento, tecnología y experiencia para acompañar cada etapa del ciclo minero.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1626710214966-a95bc038cf85?auto=format&fit=crop&w=2200&q=90",
    alt: "Formaciones rocosas de una región minera",
    eyebrow: "Compromiso con el territorio",
    heading: "El desarrollo empieza",
    highlight: "escuchando",
    description:
      "Construimos relaciones de largo plazo con las comunidades y los entornos donde trabajamos.",
  },
];



export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [activeSlide]);

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };
  const slide = slides[activeSlide];

  return (
    <section className="hero" id="inicio" aria-label="Presentación">
      {slides.map((item, index) => (
        <div
          aria-hidden={index !== activeSlide}
          className={`hero-slide${index === activeSlide ? " hero-slide-active" : ""}`}
          key={item.image}
        >
          <Image
            className="hero-image"
            src={item.image}
            alt={item.alt}
            fill
            priority={index === 0}
            unoptimized
            sizes="100vw"
          />
        </div>
      ))}
      <div className="hero-shade" />
      <div className="hero-content container" key={activeSlide}>
        <p className="hero-eyebrow"><span />{slide.eyebrow}</p>
        <h1>
          {slide.heading} <span>{slide.highlight}</span>
        </h1>
        <p className="hero-description">{slide.description}</p>
        <div className="hero-actions">
          <a className="button button-orange" href="#proyectos">
            <span aria-hidden="true">➜</span> Conocé nuestros proyectos
          </a>
          <a className="button button-outline" href="#contacto">
            <span aria-hidden="true">◉</span> Contactanos
          </a>
        </div>
      </div>
      <div className="hero-pagination" aria-label="Elegir diapositiva">
        {slides.map((item, index) => (
          <button
            aria-label={`Ver diapositiva ${index + 1}: ${item.eyebrow}`}
            aria-current={index === activeSlide ? "true" : undefined}
            className={index === activeSlide ? "active" : ""}
            key={item.image}
            onClick={() => setActiveSlide(index)}
            type="button"
          />
        ))}
      </div>
      <div className="hero-bottom">
        <span className="hero-count">
          {String(activeSlide + 1).padStart(2, "0")}
          <i />
          {String(slides.length).padStart(2, "0")}
        </span>
        <div className="hero-arrows" aria-label="Controles del carrusel">
          <button type="button" onClick={() => changeSlide(-1)} aria-label="Diapositiva anterior">
            ‹
          </button>
          <button type="button" onClick={() => changeSlide(1)} aria-label="Siguiente diapositiva">
            ›
          </button>
        </div>
        <a className="hero-scroll" href="#nosotros">
          <span /> Deslizá para explorar
        </a>
      </div>
    </section>
  );
}
