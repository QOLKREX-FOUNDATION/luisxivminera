import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAN MATEO | Desarrollo responsable de recursos",
  description:
    "Exploración, planificación y operación minera con una mirada integral, foco en la seguridad y compromiso con el territorio.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
