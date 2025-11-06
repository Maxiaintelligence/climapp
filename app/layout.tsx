// app/layout.tsx

import './globals.css'; // Importamos nuestros estilos globales

export const metadata = {
  title: 'Climapp',
  description: 'Monitor de Riesgos Climáticos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}