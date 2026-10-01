import { BedDouble, Binoculars, Church, Mountain, TreePalm, UtensilsCrossed, type LucideIcon } from 'lucide-react'

export type Category = 'cultura' | 'naturaleza' | 'parques' | 'gastronomia' | 'experiencias' | 'hospedaje'
export type Price = 'gratis' | 'pago'

export interface Place {
  id: string
  name: string
  category: Category
  price: Price
  priceLabel?: string
  short: string
  description: string
  image?: string
  lat: number
  lng: number
  approx?: boolean
  duration?: string
  tips?: string[]
  passBenefit?: string
  pendingVerification?: boolean
}

export const CATEGORIES: Record<Category, { label: string; icon: LucideIcon }> = {
  cultura: { label: 'Cultura e historia', icon: Church },
  naturaleza: { label: 'Naturaleza', icon: Mountain },
  parques: { label: 'Parques', icon: TreePalm },
  gastronomia: { label: 'Qué comer', icon: UtensilsCrossed },
  experiencias: { label: 'Experiencias', icon: Binoculars },
  hospedaje: { label: 'Dónde dormir', icon: BedDouble },
}

export const SOATA_CENTER: [number, number] = [6.3351, -72.6806]

export const PLACES: Place[] = [
  {
    id: 'cocatedral',
    name: 'Cocatedral de la Inmaculada Concepción',
    category: 'cultura',
    price: 'gratis',
    short: 'El templo principal frente al Parque Simón Bolívar.',
    description:
      'Imponente templo de fachada en piedra con torres y cúpula, ubicado en el corazón de Soatá. Es el punto de partida ideal para recorrer el centro histórico a pie.',
    image: '/img/catedral.jpg',
    lat: 6.33495,
    lng: -72.67999,
    duration: '30 min',
    tips: ['Respeta los horarios de misa.', 'La mejor luz para fotos es al atardecer.'],
  },
  {
    id: 'parque-bolivar',
    name: 'Parque Simón Bolívar (Parque Principal)',
    category: 'parques',
    price: 'gratis',
    short: 'La plaza principal, rodeada de palmas y arquitectura colonial.',
    description:
      'El centro de la vida soatense. Aquí estan la Cocatedral, la Alcaldía y varios cafés. De noche se ilumina y en diciembre es el escenario del Carnaval de la Alegría.',
    image: '/img/parque-principal.jpg',
    lat: 6.33515,
    lng: -72.68067,
    duration: '30-60 min',
  },
  {
    id: 'parque-rondon',
    name: 'Parque Juan José Rondón',
    category: 'parques',
    price: 'gratis',
    short: 'Parque arbolado con la estatua del coronel Juan José Rondón.',
    description:
      'Un parque fresco y sombreado, perfecto para descansar entre parada y parada. Rinde homenaje al coronel Juan José Rondón, héroe de la Independencia.',
    image: '/img/parque-rondon.jpg',
    lat: 6.33339,
    lng: -72.68349,
    duration: '20 min',
  },
  {
    id: 'capilla-piedra',
    name: 'Capilla Nuestra Señora de la Piedra',
    category: 'cultura',
    price: 'gratis',
    short: 'Capilla tradicional de devoción soatense.',
    description:
      'Una de las capillas más queridas del municipio, a pocas cuadras del parque principal. Parada obligada en el recorrido religioso y patrimonial.',
    image: '/img/capilla-piedra.jpg',
    lat: 6.3336,
    lng: -72.68088,
    duration: '20 min',
  },
  {
    id: 'parroquia-carmen',
    name: 'Parroquia Nuestra Señora del Carmen',
    category: 'cultura',
    price: 'gratis',
    short: 'Templo de la Virgen del Carmen, patrona de los transportadores.',
    description:
      'Aquí se viven las Fiestas de Nuestra Señora del Carmen, organizadas por los gremios de transportadores con desfiles de tractocamiones y el famoso concurso de tractomulas.',
    image: '/img/iglesia.jpg',
    lat: 6.32924,
    lng: -72.6874,
    duration: '20 min',
  },
  {
    id: 'casona-bolivar',
    name: 'La Casona de Bolívar',
    category: 'cultura',
    price: 'gratis',
    short: 'Casa histórica ligada al paso del Libertador.',
    description:
      'Uno de los sitios históricos más reconocidos de Soatá. Pregunta en la Alcaldía o en la oficina de turismo por horarios de visita.',
    lat: 6.3352,
    lng: -72.6812,
    approx: true,
    duration: '30 min',
    pendingVerification: true,
  },
  {
    id: 'mirador-santa-maria',
    name: 'Mirador de Santa María',
    category: 'naturaleza',
    price: 'gratis',
    short: 'Monumento a la Virgen con vista sobre todo el pueblo.',
    description:
      'Una corta caminata de subida te lleva al monumento de la Virgen de Santa María, con una de las mejores panorámicas de Soatá y sus montañas.',
    image: '/img/hatillo.jpg',
    lat: 6.33677,
    lng: -72.68367,
    duration: '45 min',
    tips: ['Lleva agua y gorra.', 'Sube temprano o al atardecer para evitar el sol fuerte.'],
  },
  {
    id: 'parque-mirador',
    name: 'Parque El Mirador',
    category: 'parques',
    price: 'gratis',
    short: 'Mirador urbano para ver el atardecer.',
    description: 'Parque con vista abierta hacia el valle. Ideal para cerrar el día viendo cómo se encienden las luces del pueblo.',
    image: '/img/nocturna.jpg',
    lat: 6.33406,
    lng: -72.67927,
    duration: '30 min',
  },
  {
    id: 'loma-blanca',
    name: 'Parque Loma Blanca',
    category: 'parques',
    price: 'gratis',
    short: 'Zona verde al sur del casco urbano.',
    description: 'Espacio verde para caminar, hacer deporte o descansar en familia.',
    image: '/img/panoramica.jpg',
    lat: 6.32888,
    lng: -72.68475,
    duration: '30 min',
  },
  {
    id: 'santo-cristo',
    name: 'Alto del Santo Cristo',
    category: 'naturaleza',
    price: 'gratis',
    short: 'Capilla en lo alto con vista al cañón.',
    description:
      'Ruta de caminata hasta la Capilla del Santo Cristo. Es uno de los recorridos favoritos de los soatenses y regala vistas hacia el cañón del Chicamocha.',
    image: '/img/vista-panoramica.jpg',
    lat: 6.3217,
    lng: -72.70214,
    duration: '2-3 h ida y vuelta',
    tips: ['Usa zapatos de caminata.', 'Ve acompañado y avisa tu ruta.'],
  },
  {
    id: 'canon-chicamocha',
    name: 'Cañón del Chicamocha y Puente Pinzón',
    category: 'naturaleza',
    price: 'gratis',
    short: 'El río Chicamocha y su paisaje semidesértico.',
    description:
      'Bajando de Soatá hacia Puente Pinzón el clima cambia por completo: bosque seco, cactus y el imponente río Chicamocha. Un paisaje único en Boyacá, rodeado de quintas y casas de descanso.',
    image: '/img/canon2.jpg',
    lat: 6.3222,
    lng: -72.649,
    duration: 'Medio día',
    tips: ['Hace mucho calor: bloqueador e hidratación.', 'Se llega en carro, moto o bus intermunicipal.'],
  },
  {
    id: 'pisciclub',
    name: 'Pisciclub',
    category: 'experiencias',
    price: 'pago',
    priceLabel: 'Entrada con costo',
    short: 'Centro turístico y recreativo con piscinas.',
    description:
      'El Centro Turístico, Recreativo y Vacacional del Norte de Boyacá. Piscinas para disfrutar del clima cálido de Soatá en familia.',
    lat: 6.33193,
    lng: -72.68074,
    duration: 'Medio día',
    passBenefit: 'Descuento en la entrada con Soata GoPass (por confirmar con el aliado).',
    pendingVerification: true,
  },
  {
    id: 'ruta-datil',
    name: 'Ruta del Dátil',
    category: 'experiencias',
    price: 'pago',
    priceLabel: 'Desde $25.000 COP (referencia)',
    short: 'Conoce las palmas datileras y prueba los dulces de dátil.',
    description:
      'Soatá es la Ciudad Datilera de Colombia. En esta experiencia visitas palmas de dátil, aprendes cómo se procesa la fruta y pruebas los dulces y golosinas tradicionales con productores locales.',
    image: '/img/parque-principal.jpg',
    lat: 6.3348,
    lng: -72.6805,
    approx: true,
    duration: '2 h',
    passBenefit: 'Incluida en el Soata GoPass Dátil.',
    pendingVerification: true,
  },
  {
    id: 'aviturismo',
    name: 'Avistamiento de aves',
    category: 'experiencias',
    price: 'pago',
    priceLabel: 'Desde $40.000 COP (referencia)',
    short: 'Reinitas, tángaras y más en los bosques de Soatá.',
    description:
      'Los microclimas de Soatá, del bosque seco del Chicamocha al robledal de páramo, atraen una gran variedad de aves. Salida guiada temprano en la mañana con un guía local.',
    image: '/img/ave.jpg',
    lat: 6.3395,
    lng: -72.6865,
    approx: true,
    duration: '3 h',
    passBenefit: 'Incluida en el Soata GoPass Dátil.',
    pendingVerification: true,
  },
  {
    id: 'vereda-molinos',
    name: 'Día de campo en la vereda Los Molinos',
    category: 'experiencias',
    price: 'pago',
    priceLabel: 'Desde $35.000 COP (referencia)',
    short: 'Vida campesina, cabras y caminos de piedra.',
    description:
      'Visita una finca de la vereda Los Molinos, conoce la cria de cabras, los cultivos de la zona y comparte un almuerzo campesino con una familia soatense.',
    image: '/img/cabras.jpg',
    lat: 6.345,
    lng: -72.69,
    approx: true,
    duration: 'Medio día',
    passBenefit: '15% de descuento con Soata GoPass.',
    pendingVerification: true,
  },
  {
    id: 'tour-centro',
    name: 'Recorrido histórico a pie',
    category: 'experiencias',
    price: 'gratis',
    short: 'Autoguiado: templos, parques y casas coloniales.',
    description:
      'Sigue la ruta en el mapa: Cocatedral, Parque Simón Bolívar, Capilla de la Piedra, Parque Juan José Rondón y Parroquia del Carmen. Soatá fue fundada en 1545 y su nombre en muysccubun significa "labranza del sol".',
    image: '/img/presentacion.jpg',
    lat: 6.33515,
    lng: -72.68067,
    duration: '2 h',
  },
  {
    id: 'dulces-datil',
    name: 'Dulces y golosinas de dátil',
    category: 'gastronomia',
    price: 'pago',
    priceLabel: 'Desde $3.000 COP',
    short: 'El sabor insignia de la Ciudad Datilera de Colombia.',
    description:
      'No te vayas sin probar los dulces de dátil, junto con la panela y la miel de abejas de la región. Los encuentras en tiendas y puestos alrededor del parque principal.',
    lat: 6.3352,
    lng: -72.6809,
    approx: true,
    passBenefit: '10% de descuento en tiendas aliadas.',
  },
  {
    id: 'el-datil-restaurante',
    name: 'Restaurante El Dátil',
    category: 'gastronomia',
    price: 'pago',
    short: 'Parada gastronómica en la vía hacia el cañón.',
    description: 'Restaurante sobre la vía que baja hacia el Chicamocha. Ideal para almorzar en el recorrido hacia Puente Pinzón.',
    lat: 6.33306,
    lng: -72.66451,
    pendingVerification: true,
  },
  {
    id: 'bulevar-chicamocha',
    name: 'Bulevar del Chicamocha',
    category: 'gastronomia',
    price: 'pago',
    short: 'Comida con vista sobre la vía al cañón.',
    description: 'Restaurante en la salida hacia el cañón del Chicamocha.',
    lat: 6.33608,
    lng: -72.66566,
    pendingVerification: true,
  },
  {
    id: 'pescaderia-dorado',
    name: 'Restaurante Pescadería El Dorado',
    category: 'gastronomia',
    price: 'pago',
    short: 'Pescado y comida típica cerca del centro.',
    description: 'Restaurante a pocas cuadras del Parque Juan José Rondón.',
    lat: 6.33207,
    lng: -72.68372,
    pendingVerification: true,
  },
  {
    id: 'cachipay',
    name: 'Hotel y Restaurante Cachipay',
    category: 'hospedaje',
    price: 'pago',
    short: 'Hospedaje y restaurante en el casco urbano.',
    description: 'Opción de alojamiento con restaurante propio.',
    lat: 6.33552,
    lng: -72.67894,
    pendingVerification: true,
  },
  {
    id: 'hotel-las-palmas',
    name: 'Hotel Las Palmas',
    category: 'hospedaje',
    price: 'pago',
    short: 'A pasos del parque principal.',
    description: 'Hotel ubicado en el centro, cerca de la Cocatedral y del terminal de transporte.',
    lat: 6.33555,
    lng: -72.68052,
    pendingVerification: true,
  },
  {
    id: 'hotel-internacional',
    name: 'Hotel Internacional de Soatá',
    category: 'hospedaje',
    price: 'pago',
    short: 'Hotel cerca del Parque Juan José Rondón.',
    description: 'Hospedaje en el casco urbano.',
    lat: 6.33319,
    lng: -72.68301,
    pendingVerification: true,
  },
]

export const getPlace = (id: string) => PLACES.find((p) => p.id === id)
