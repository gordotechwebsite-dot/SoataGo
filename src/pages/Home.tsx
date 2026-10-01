import { Link } from 'react-router-dom'
import { CATEGORIES, PLACES, type Category } from '../data/places'
import { ROUTES } from '../data/routes'
import PlaceCard from '../components/PlaceCard'

const QUICK: { cat: Category; title: string }[] = [
  { cat: 'experiencias', title: 'Qué hacer' },
  { cat: 'gastronomia', title: 'Qué comer' },
  { cat: 'cultura', title: 'Dónde ir' },
  { cat: 'naturaleza', title: 'Naturaleza' },
]

export default function Home() {
  const featured = PLACES.filter((p) => ['ruta-datil', 'mirador-santa-maria', 'canon-chicamocha', 'cocatedral'].includes(p.id))

  return (
    <div>
      <img src="/img/vista-panoramica.jpg" alt="Vista panorámica de Soatá" className="h-64 w-full object-cover sm:h-80" />
      <section className="px-4 pt-5">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Soatá, Boyacá · 1.950 m</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-[1.05] text-stone-900">La ciudad datilera de Colombia</h1>
        <p className="mt-3 text-stone-700">
          Templos coloniales, miradores sobre el cañón del Chicamocha y la tradición del dátil. Aquí está lo que vale la pena ver, comer y hacer.
        </p>
      </section>

      <section className="mx-4 mt-6 grid grid-cols-2 border-l border-t border-stone-300">
        {QUICK.map(({ cat, title }) => {
          const Icon = CATEGORIES[cat].icon
          return (
            <Link key={cat} to={`/explorar?categoria=${cat}`} className="flex items-center gap-3 border-b border-r border-stone-300 p-3 hover:bg-white">
              <Icon className="h-5 w-5 shrink-0 text-datil-700" strokeWidth={1.5} />
              <span className="flex-1 font-medium text-stone-900">{title}</span>
            </Link>
          )
        })}
      </section>

      <section className="mx-4 mt-6 bg-stone-900 p-5 text-datil-50">
        <p className="text-xs uppercase tracking-[0.2em] text-datil-200">Soata <span className="text-dinero-light">GoPass</span></p>
        <p className="mt-2 font-serif text-2xl leading-snug">Experiencias incluidas y descuentos en comercios de Soatá.</p>
        <Link to="/pass" className="mt-4 inline-block text-sm font-medium text-sky-300">
          Ver planes
        </Link>
      </section>

      <section className="px-4 pt-8">
        <div className="mb-3 flex items-baseline justify-between border-b border-stone-900 pb-2">
          <h2 className="font-serif text-2xl font-semibold text-stone-900">Planes sugeridos</h2>
          <Link to="/rutas" className="text-sm text-sky-600">Ver todas</Link>
        </div>
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2">
          {ROUTES.map((r) => (
            <Link key={r.id} to={`/rutas/${r.id}`} className="w-60 shrink-0 snap-start">
              <img src={r.image} alt={r.name} loading="lazy" className="h-36 w-full object-cover" />
              <p className="mt-2 text-[11px] uppercase tracking-wider text-stone-500">{r.duration}</p>
              <p className="font-serif text-lg font-semibold leading-snug text-stone-900">{r.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 pt-8">
        <div className="flex items-baseline justify-between border-b border-stone-900 pb-2">
          <h2 className="font-serif text-2xl font-semibold text-stone-900">Imperdibles</h2>
          <Link to="/explorar" className="text-sm text-sky-600">Explorar todo</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 pt-4 sm:grid-cols-3">
          {featured.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
      </section>

      <section className="px-4 pt-8 text-sm text-stone-700">
        <h2 className="border-b border-stone-900 pb-2 font-serif text-2xl font-semibold text-stone-900">Antes de llegar</h2>
        <dl className="divide-y divide-stone-300">
          <div className="grid grid-cols-[7rem_1fr] gap-2 py-2"><dt className="text-stone-500">Clima</dt><dd>Templado, unos 20 °C en promedio.</dd></div>
          <div className="grid grid-cols-[7rem_1fr] gap-2 py-2"><dt className="text-stone-500">Cómo llegar</dt><dd>Unas 2 horas desde Duitama y 2 h 45 min desde Tunja por la Troncal Central del Norte.</dd></div>
          <div className="grid grid-cols-[7rem_1fr] gap-2 py-2"><dt className="text-stone-500">Transporte</dt><dd>CootraSoatá y CootraDátil.</dd></div>
          <div className="grid grid-cols-[7rem_1fr] gap-2 py-2"><dt className="text-stone-500">Fiestas</dt><dd>Del 24 al 31 de diciembre, con el Carnaval de la Alegría el 30.</dd></div>
        </dl>
      </section>
    </div>
  )
}
