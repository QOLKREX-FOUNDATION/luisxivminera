import Image from "next/image";
import ContactForm from "./contact-form";
import HeroSlider from "./hero-slider";
import ProjectGallery from "./project-gallery";
import SiteHeader from "./site-header";

const focusAreas = [
  {
    icon: "◈",
    title: "Conocimiento del territorio",
    text: "Un análisis técnico y social para comprender cada entorno antes de avanzar.",
  },
  {
    icon: "⌖",
    title: "Seguridad en cada decisión",
    text: "La gestión de riesgos forma parte de nuestra cultura y de cada operación.",
  },
  {
    icon: "↗",
    title: "Mirada de largo plazo",
    text: "Planificamos considerando el ciclo completo y el futuro de cada proyecto.",
  },
];

const news = [
  {
    category: "Sostenibilidad",
    title: "Planificar el cierre desde el primer día",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    alt: "Cordillera de montañas bajo un cielo despejado",
  },
  {
    category: "Innovación",
    title: "Tecnología y conocimiento para explorar mejor",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=85",
    alt: "Profesional trabajando con tecnología industrial",
  },
  {
    category: "Comunidad",
    title: "El valor de escuchar a quienes conocen el territorio",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85",
    alt: "Personas reunidas en una conversación",
  },
];

function SectionHeading({
  kicker,
  title,
  highlight,
  description,
  centered = false,
}: {
  kicker: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`section-heading${centered ? " section-heading-centered" : ""}`}
    >
      <p className="section-kicker">{kicker}</p>
      <h2>
        {title}
        {highlight && (
          <>
            <br />
            <span>{highlight}</span>
          </>
        )}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function MiningIcon({
  type,
}: {
  type: "compass" | "helmet" | "leaf" | "truck";
}) {
  const icons = {
    compass: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
      </>
    ),
    helmet: (
      <>
        <path d="M4 14a8 8 0 0 1 16 0v2H4v-2Z" />
        <path d="M2.5 16h19M12 6v4m-6 1-1.5-1M18 11l1.5-1M8 6l1.5 2" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 4C11 4 5 7.5 5 14a6 6 0 0 0 6 6c6.5 0 9-7 9-16Z" />
        <path d="M4 21c3-5 6.5-8 12-11" />
      </>
    ),
    truck: (
      <>
        <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="18" cy="18" r="1.8" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="mining-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSlider />

        <section className="about-section section-pad" id="nosotros">
          <div className="container">
            <SectionHeading
              kicker="Quiénes somos"
              title="Lo que sabemos,"
              highlight="lo hacemos bien."
              description="Somos un equipo multidisciplinario que integra experiencia, conocimiento técnico y compromiso con las personas y el territorio."
            />
            <div className="about-content">
              <div className="about-accordion">
                <details open>
                  <summary>
                    <span>Exploración responsable</span>
                    <span className="accordion-toggle" aria-hidden="true" />
                  </summary>
                  <p>
                    Estudiamos el potencial geológico con rigor y una mirada
                    integral del entorno, para tomar decisiones informadas desde
                    el comienzo.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Planificación de proyectos</span>
                    <span className="accordion-toggle" aria-hidden="true" />
                  </summary>
                  <p>
                    Conectamos ingeniería, operación y gestión ambiental para
                    planificar cada etapa con objetivos claros.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Operaciones y seguridad</span>
                    <span className="accordion-toggle" aria-hidden="true" />
                  </summary>
                  <p>
                    Promovemos equipos preparados, procesos disciplinados y una
                    cultura que pone a las personas primero.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>Ambiente y comunidad</span>
                    <span className="accordion-toggle" aria-hidden="true" />
                  </summary>
                  <p>
                    Escuchamos a las comunidades y trabajamos para comprender y
                    gestionar los impactos de cada proyecto.
                  </p>
                </details>
              </div>
              <div className="about-photo">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
                  alt="Equipo técnico trabajando en un proyecto industrial"
                  fill
                  unoptimized
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                <span className="about-photo-label">
                  Experiencia en el terreno
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="planning-section section-pad" id="servicios">
          <div className="container planning-panel">
            <div className="planning-image">
              <Image
                src="https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?auto=format&fit=crop&w=1200&q=85"
                alt="Excavadora trabajando en una cantera de montaña"
                fill
                unoptimized
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <div className="planning-copy">
              <p className="section-kicker">Ingeniería &amp; operación</p>
              <h2>
                Gestión minera
                <br />
                <span>de principio a fin.</span>
              </h2>
              <p>
                Desde los primeros estudios hasta la operación, coordinamos
                especialistas y recursos para desarrollar cada proyecto con
                seguridad, eficiencia y una visión integral.
              </p>
              <a className="button button-orange" href="#contacto">
                Conocé nuestros servicios <span aria-hidden="true">→</span>
              </a>
            </div>
            <span className="planning-watermark" aria-hidden="true">
              MN
            </span>
          </div>
        </section>

        <section className="numbers-band" aria-label="Áreas de trabajo">
          <div className="container numbers-grid">
            <div className="number-item">
              <MiningIcon type="compass" />
              <strong>Exploración</strong>
              <span>Conocimiento geológico</span>
            </div>
            <div className="number-item">
              <MiningIcon type="helmet" />
              <strong>Seguridad</strong>
              <span>Personas primero</span>
            </div>
            <div className="number-item">
              <MiningIcon type="truck" />
              <strong>Operaciones</strong>
              <span>Eficiencia en el terreno</span>
            </div>
            <div className="number-item">
              <MiningIcon type="leaf" />
              <strong>Sostenibilidad</strong>
              <span>Compromiso a largo plazo</span>
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="proyectos">
          <div className="container">
            <SectionHeading
              kicker="Nuestros proyectos"
              title="Trabajo que transforma,"
              highlight="construido con propósito."
              description="Una selección de iniciativas y áreas de trabajo vinculadas al desarrollo responsable de recursos."
              centered
            />
            <ProjectGallery />
          </div>
        </section>

        <section className="features-section section-pad" id="enfoque">
          <div className="container">
            <SectionHeading
              kicker="Nuestro enfoque"
              title="¿Por qué trabajar"
              highlight="con SAN MATEO?"
              centered
            />
            <div className="features-grid">
              {focusAreas.map((feature, index) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-icon">
                    <span aria-hidden="true">{feature.icon}</span>
                  </div>
                  <span className="feature-number">0{index + 1}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <a
                    href="#contacto"
                    aria-label={`Conocer más: ${feature.title}`}
                  >
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section section-pad" id="equipo">
          <div className="container team-layout">
            <div className="team-copy">
              <SectionHeading
                kicker="Nuestro equipo"
                title="Personas que hacen"
                highlight="posible cada proyecto."
                description="La experiencia nace de las personas. Reunimos perfiles técnicos y operativos que trabajan en equipo, en cada etapa y en cada lugar."
              />
              <a className="button button-orange" href="#contacto">
                Conocé nuestro enfoque <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="team-photo">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85"
                alt="Profesionales de ingeniería trabajando en equipo"
                fill
                unoptimized
                sizes="(max-width: 760px) 100vw, 55vw"
              />
              <div className="team-photo-caption">
                <span>01 / 03</span>
                <strong>Conocimiento que se comparte.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="news-section section-pad" id="novedades">
          <div className="container">
            <div className="news-heading-row">
              <SectionHeading
                kicker="Ideas & actualidad"
                title="Historias desde"
                highlight="el territorio."
              />
              <a className="outline-link" href="#contacto">
                Ver todas las novedades <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="news-grid">
              {news.map((item, index) => (
                <article className="news-card" key={item.title}>
                  <a className="news-image" href="#contacto">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                    <span className="news-count">0{index + 1}</span>
                  </a>
                  <p className="news-category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <a className="news-read" href="#contacto">
                    Leer más <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
            <p className="content-note">
              Contenidos e imágenes de muestra; reemplazalos por información
              verificada de la empresa antes de publicar.
            </p>
          </div>
        </section>

        <section className="partners-band" aria-label="Compromisos de trabajo">
          <div className="container partners-inner">
            <p>Un compromiso compartido</p>
            <div className="partner-wordmarks">
              <span>SEGURIDAD</span>
              <span>TRANSPARENCIA</span>
              <span>INNOVACIÓN</span>
              <span>COMUNIDAD</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contacto">
          <div className="container contact-layout">
            <div className="contact-copy">
              <SectionHeading
                kicker="Hablemos"
                title="Cada proyecto"
                highlight="empieza conversando."
                description="¿Querés saber más sobre nuestro trabajo o explorar una oportunidad? Nuestro equipo está para escucharte."
              />
              <div className="contact-details">
                <a href="mailto:contacto@leonxivminera.com">
                  <span>Correo</span>
                  contacto@leonxivminera.com
                  <span aria-hidden="true">↗</span>
                </a>
                <a href="tel:+51987654321">
                  <span>Teléfono</span>
                  +51 987 654 321
                  <span aria-hidden="true">↗</span>
                </a>
                <p>
                  <span>Ubicación</span>PERÚ
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-columns">
          <div className="footer-about">
            <a className="footer-brand" href="#inicio">
              <Image
                src="/san-mateo-logo.png"
                alt="SAN MATEO"
                width={547}
                height={129}
              />
            </a>
            <p>
              Exploración responsable.
              <br />
              Valor a largo plazo.
            </p>
          </div>
          <div>
            <h2>Explorá</h2>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
          </div>
          <div>
            <h2>Conocenos</h2>
            <a href="#enfoque">Nuestro enfoque</a>
            <a href="#equipo">Equipo</a>
            <a href="#novedades">Novedades</a>
          </div>
          <div>
            <h2>Contacto</h2>
            <a href="mailto:contacto@leonxivminera.com">
              contacto@leonxivminera.com
            </a>
            <a href="tel:+51987654321">+51 987 654 321</a>
            <span>PERÚ</span>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <span>
              © {new Date().getFullYear()} SAN MATEO. Todos los derechos
              reservados.
            </span>
            <a href="#inicio">Volver arriba ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
