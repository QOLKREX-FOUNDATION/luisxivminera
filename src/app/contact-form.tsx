"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Consulta web de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone || "No indicado"}\n\nProyecto:\n${message}`,
    );

    window.location.href = `mailto:contacto@mineranorte.com.ar?subject=${subject}&body=${body}`;
    setStatus("Se abrió tu aplicación de correo con los datos de la consulta.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="form-eyebrow">Escribinos</p>
      <label>
        <span>Nombre y apellido</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          placeholder="¿Cómo te llamás?"
          required
        />
      </label>
      <div className="form-row">
        <label>
          <span>Correo electrónico</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="nombre@correo.com"
            required
          />
        </label>
        <label>
          <span>Teléfono <em>(opcional)</em></span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+54 9 11..."
          />
        </label>
      </div>
      <label>
        <span>¿En qué podemos ayudarte?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Contanos brevemente sobre tu consulta..."
          required
        />
      </label>
      <button className="button button-accent form-submit" type="submit">
        Enviar consulta
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
          <path
            d="M3.5 10h13m-5-5 5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <p className="form-note" aria-live="polite">
        {status || "Al enviar, se abrirá tu aplicación de correo."}
      </p>
    </form>
  );
}
