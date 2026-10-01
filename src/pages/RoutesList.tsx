import { Link } from 'react-router-dom'
import { ROUTES } from '../data/routes'

export default function RoutesList() {
  return (
    <div className="px-4 py-4">
      <h1 className="text-2xl font-bold text-stone-900">Rutas sugeridas</h1>
      <p className="mt-1 text-sm text-stone-600">Itinerarios listos para que sepas exactamente a dónde ir y en qué orden.</p>
      <div className="mt-4 flex flex-col gap-4">
        {ROUTES.map((r) => (
          <Link key={r.id} to={`/rutas/${r.id}`} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-datil-100">
            <img src={r.image} alt={r.name} loading="lazy" className="h-40 w-full object-cover" />
            <div className="p-4">
              <span className="rounded-full bg-datil-100 px-2 py-0.5 text-xs font-semibold text-datil-700">{r.duration}</span>
              <h2 className="mt-2 text-lg font-bold text-stone-900">{r.name}</h2>
              <p className="text-sm text-stone-600">{r.summary}</p>
              <p className="mt-2 text-xs text-stone-500">{r.days.reduce((n, d) => n + d.stops.length, 0)} paradas</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
