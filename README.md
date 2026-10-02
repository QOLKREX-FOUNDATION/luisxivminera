# SAN MATEO

Sitio web adaptable para una empresa minera, creado con Next.js App Router,
TypeScript y CSS.

## Requisitos

- Node.js 20.9 o superior
- Yarn 1.22.18

## Desarrollo

En PowerShell, usá `yarn.cmd` para evitar el bloqueo de scripts `.ps1`:

```bash
yarn.cmd install
yarn.cmd dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Validación y producción

```bash
yarn.cmd lint
yarn.cmd build
yarn.cmd start
```

## Personalización antes de publicar

- Actualizá el correo, el teléfono y la ubicación de ejemplo en
  `src/app/page.tsx` y `src/app/contact-form.tsx`.
- Sustituí los proyectos ilustrativos por datos e imágenes autorizados y
  verificados de la empresa.
- El formulario prepara una consulta en la aplicación de correo del visitante;
  requiere configurar un servicio de recepción si se desea enviarla directamente
  desde la web.
