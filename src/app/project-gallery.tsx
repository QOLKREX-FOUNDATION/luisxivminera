"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Exploración en la Puna",
    category: "Exploración",
    region: "Región andina",
    image:
      "https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?auto=format&fit=crop&w=900&q=85",
    alt: "Excavadora trabajando en una cantera de montaña",
  },
  {
    title: "Operación Quebrada",
    category: "Operaciones",
    region: "Cordillera",
    image:
      "https://images.unsplash.com/photo-1778146113906-366461e256cb?auto=format&fit=crop&w=900&q=85",
    alt: "Infraestructura industrial minera",
  },
  {
    title: "Estudios de terreno",
    category: "Ingeniería",
    region: "Territorio norte",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
    alt: "Equipo técnico relevando un proyecto",
  },
  {
    title: "Geología regional",
    category: "Exploración",
    region: "Zona cordillerana",
    image:
      "https://images.unsplash.com/photo-1626710214966-a95bc038cf85?auto=format&fit=crop&w=900&q=85",
    alt: "Formación geológica en zona cordillerana",
  },
];

const categories = ["Todos", "Exploración", "Operaciones", "Ingeniería"];

export default function ProjectGallery() {
  const [category, setCategory] = useState("Todos");
  const visibleProjects =
    category === "Todos"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <>
      <div className="project-filters" aria-label="Filtrar proyectos">
        {categories.map((item) => (
          <button
            aria-pressed={category === item}
            className={category === item ? "active" : ""}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <a className="project-image" href="#contacto">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                unoptimized
                sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 25vw"
              />
              <span className="project-image-overlay" />
              <span className="project-index">0{index + 1}</span>
              <span className="project-zoom" aria-hidden="true">↗</span>
              <span className="project-image-title">{project.title}</span>
            </a>
            <div className="project-caption">
              <div><h3>{project.title}</h3><p>{project.region}</p></div>
              <span>{project.category}</span>
            </div>
          </article>
        ))}
      </div>
      <p className="content-note">
        Proyectos e imágenes de muestra; reemplazalos por información
        verificada de la empresa antes de publicar.
      </p>
    </>
  );
}
