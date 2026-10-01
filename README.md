# SoataGo

Guía turística y pase de experiencias (estilo City Pass) para Soatá, Boyacá (Colombia): qué hacer, qué comer, a dónde ir y qué experiencias gratuitas y de pago ofrece el municipio.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # tsc + build de producción (PWA)
npm run lint
```

Stack: React + Vite + TypeScript + Tailwind, React Router, Leaflet (OpenStreetMap) y vite-plugin-pwa.

## Contenido

- Lugares, gastronomía, experiencias y hospedaje: `src/data/places.ts`
- Rutas sugeridas: `src/data/routes.ts`
- Créditos de fotos (Wikimedia Commons, CC BY-SA): `src/data/credits.ts`

Los ítems con `pendingVerification: true` o `approx: true` deben validarse con los aliados (horarios, precios, ubicación exacta).
