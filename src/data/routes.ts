export interface Stop {
  time: string
  placeId?: string
  title: string
  note: string
}

export interface TourRoute {
  id: string
  name: string
  duration: string
  summary: string
  image: string
  days: { title: string; stops: Stop[] }[]
}

export const ROUTES: TourRoute[] = [
  {
    id: 'un-dia',
    name: 'Soatá en 1 día',
    duration: '1 día',
    summary: 'Lo esencial: centro histórico, dátil, mirador y atardecer.',
    image: '/img/parque-principal.jpg',
    days: [
      {
        title: 'Día 1',
        stops: [
          { time: '8:00 a. m.', title: 'Desayuno boyacense', note: 'Arranca con un buen desayuno en algún café del parque principal.' },
          { time: '9:00 a. m.', placeId: 'cocatedral', title: 'Cocatedral de la Inmaculada Concepción', note: 'Inicio del recorrido histórico.' },
          { time: '9:30 a. m.', placeId: 'tour-centro', title: 'Recorrido histórico a pie', note: 'Parques, capillas y casas coloniales.' },
          { time: '11:30 a. m.', placeId: 'ruta-datil', title: 'Ruta del Dátil', note: 'Conoce las palmas y prueba los dulces.' },
          { time: '1:00 p. m.', placeId: 'pescaderia-dorado', title: 'Almuerzo', note: 'Comida típica cerca del centro.' },
          { time: '3:00 p. m.', placeId: 'pisciclub', title: 'Tarde de piscina en el Pisciclub', note: 'Disfruta el clima cálido.' },
          { time: '5:30 p. m.', placeId: 'mirador-santa-maria', title: 'Atardecer en el Mirador de Santa María', note: 'La mejor vista del pueblo.' },
        ],
      },
    ],
  },
  {
    id: 'fin-de-semana',
    name: 'Fin de semana en Soatá',
    duration: '2 días',
    summary: 'Pueblo, campo y el cañón del Chicamocha.',
    image: '/img/canon2.jpg',
    days: [
      {
        title: 'Sábado: pueblo y tradición',
        stops: [
          { time: '9:00 a. m.', placeId: 'tour-centro', title: 'Recorrido histórico a pie', note: 'Centro histórico y templos.' },
          { time: '11:30 a. m.', placeId: 'ruta-datil', title: 'Ruta del Dátil', note: 'Dulces y productores locales.' },
          { time: '1:00 p. m.', title: 'Almuerzo en el centro', note: 'Busca los restaurantes aliados en la sección Qué comer.' },
          { time: '3:00 p. m.', placeId: 'vereda-molinos', title: 'Día de campo en Los Molinos', note: 'Vida campesina y cabras.' },
          { time: '6:00 p. m.', placeId: 'parque-mirador', title: 'Atardecer en el Parque El Mirador', note: 'Mira encenderse las luces del pueblo.' },
        ],
      },
      {
        title: 'Domingo: naturaleza',
        stops: [
          { time: '6:00 a. m.', placeId: 'aviturismo', title: 'Avistamiento de aves', note: 'Salida temprano con guía local.' },
          { time: '10:00 a. m.', placeId: 'canon-chicamocha', title: 'Bajada al Cañón del Chicamocha', note: 'Paisaje semidesértico y el río.' },
          { time: '1:00 p. m.', placeId: 'el-datil-restaurante', title: 'Almuerzo en la vía al cañón', note: 'Parada gastronómica.' },
          { time: '4:00 p. m.', placeId: 'dulces-datil', title: 'Compra tus dulces de dátil', note: 'Para llevar a casa.' },
        ],
      },
    ],
  },
  {
    id: 'caminantes',
    name: 'Ruta de caminantes',
    duration: 'Medio día',
    summary: 'Subidas, capillas en lo alto y vistas al cañón.',
    image: '/img/vista-panoramica.jpg',
    days: [
      {
        title: 'Mañana',
        stops: [
          { time: '6:30 a. m.', placeId: 'santo-cristo', title: 'Caminata al Alto del Santo Cristo', note: 'Sal temprano, lleva agua.' },
          { time: '10:00 a. m.', placeId: 'parque-rondon', title: 'Descanso en el Parque Juan José Rondón', note: 'Sombra y un jugo.' },
          { time: '11:00 a. m.', placeId: 'mirador-santa-maria', title: 'Mirador de Santa María', note: 'Remata con la vista del pueblo.' },
        ],
      },
    ],
  },
]

export const getRoute = (id: string) => ROUTES.find((r) => r.id === id)
