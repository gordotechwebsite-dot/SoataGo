import { Link } from 'react-router-dom'
import { ROUTES } from '../data/routes'

export default function RoutesList() {
  return (
    <div className="px-4 py-5">
      <h1 className="font-serif text-3xl font-semibold text-stone-900">Rutas sugeridas</h1>
      <p className="mt-1 text-sm text-stone-600">Itinerarios con horario, parada por parada.</p>
      <div className="mt-5 flex flex-col">
        {ROUTES.map((r) => (
          <Link key={r.id} to={`/rutas/${r.id}`} className="group border-t border-stone-900 py-4">
            <img src={r.image} alt={r.name} loading="lazy" className="h-44 w-full object-cover" />
            <p className="mt-3 text-[11px] uppercase tracking-wider text-stone-500">
              {r.duration} · {r.days.reduce((n, d) => n + d.stops.length, 0)} paradas
            </p>
            <h2 className="font-serif text-2xl font-semibold text-stone-900">{r.name}</h2>
            <p className="mt-1 text-sm text-stone-600">{r.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
