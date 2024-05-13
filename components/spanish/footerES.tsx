import React from "react";

export default function Footer() {
  return (
    <footer className="mb-6 px-4 text-center text-gray-700 dark:text-white/50">
      <small className="mb-2 block text-xs">
        © 2024 Nicolás. Todos los derechos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este sitio web:</span> construido
        con React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React
        Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
