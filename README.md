# SoataGo

Guía turística y pase de experiencias (estilo City Pass) para Soatá, Boyacá (Colombia): qué hacer, qué comer, a dónde ir y qué experiencias gratuitas y de pago ofrece el municipio.

## Desarrollo

El mapa necesita `VITE_GOOGLE_MAPS_API_KEY` (Maps JavaScript API) en `.env.local` y en las variables de entorno de Vercel.

```bash
npm install
npm run dev      # servidor local
npm run build    # tsc + build de producción (PWA)
npm run lint
```

Stack: React + Vite + TypeScript + Tailwind, React Router, Google Maps (`@vis.gl/react-google-maps`) y vite-plugin-pwa.

## Contenido

- Lugares, gastronomía, experiencias y hospedaje: `src/data/places.ts`
- Rutas sugeridas: `src/data/routes.ts`
- Créditos de fotos (Wikimedia Commons, CC BY-SA): `src/data/credits.ts`

Los ítems con `pendingVerification: true` o `approx: true` deben validarse con los aliados (horarios, precios, ubicación exacta).
