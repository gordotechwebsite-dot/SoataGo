import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
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
      <section className="relative h-80 overflow-hidden">
        <img src="/img/vista-panoramica.jpg" alt="Vista panorámica de Soatá" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-datil-900/90 via-datil-900/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-sm font-medium uppercase tracking-widest text-datil-200">Soatá, Boyacá</p>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight">La Ciudad Datilera de Colombia te espera</h1>
          <p className="mt-2 text-sm text-datil-50/90">Qué hacer, qué comer y a dónde ir, todo en un solo lugar.</p>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-2 px-4 py-5">
        {QUICK.map(({ cat, title }) => {
          const Icon = CATEGORIES[cat].icon
          return (
          <Link
            key={cat}
            to={`/explorar?categoria=${cat}`}
            className="flex flex-col items-center gap-1 rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-datil-100"
          >
            <Icon className="h-6 w-6 text-datil-600" />
            <span className="text-xs font-semibold text-stone-700">{title}</span>
          </Link>
          )
        })}
      </section>

      <section className="px-4">
        <Link
          to="/pass"
          className="flex items-center gap-4 rounded-3xl bg-gradient-to-r from-datil-600 to-datil-500 p-5 text-white shadow-md"
        >
          <Sparkles className="h-10 w-10 shrink-0" />
          <div className="flex-1">
            <p className="text-lg font-bold">SoataGo Pass</p>
            <p className="text-sm text-datil-50/90">Experiencias incluidas y descuentos en comercios aliados.</p>
          </div>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>

      <section className="px-4 pt-6">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-bold text-stone-900">Rutas sugeridas</h2>
          <Link to="/rutas" className="text-sm font-medium text-datil-600">Ver todas</Link>
        </div>
        <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2">
          {ROUTES.map((r) => (
            <Link key={r.id} to={`/rutas/${r.id}`} className="relative h-40 w-60 shrink-0 snap-start overflow-hidden rounded-2xl">
              <img src={r.image} alt={r.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-0 p-3 text-white">
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs backdrop-blur">{r.duration}</span>
                <p className="mt-1 font-bold">{r.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 pt-6">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-bold text-stone-900">Imperdibles</h2>
          <Link to="/explorar" className="text-sm font-medium text-datil-600">Explorar todo</Link>
        </div>
        <div className="flex flex-col gap-3">
          {featured.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
      </section>

      <section className="mx-4 mt-6 rounded-2xl bg-palma-50 p-4 text-sm text-palma-900 ring-1 ring-palma-100">
        <p className="font-semibold">Datos útiles</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Altitud 1.950 m, temperatura promedio de 20 °C.</li>
          <li>Unas 2 horas desde Duitama y 2 h 45 min desde Tunja por la Troncal Central del Norte.</li>
          <li>Transporte intermunicipal: CootraSoatá y CootraDátil.</li>
          <li>Ferias y Fiestas del 24 al 31 de diciembre, con el Carnaval de la Alegría el 30.</li>
        </ul>
      </section>
    </div>
  )
}
