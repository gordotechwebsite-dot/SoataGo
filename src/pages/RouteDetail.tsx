import { Link, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { getRoute } from '../data/routes'
import { getPlace } from '../data/places'
import PriceBadge from '../components/PriceBadge'

export default function RouteDetail() {
  const { id = '' } = useParams()
  const route = getRoute(id)
  if (!route) return <p className="p-6 text-center text-stone-600">Ruta no encontrada.</p>

  return (
    <div>
      <div className="relative h-56">
        <img src={route.image} alt={route.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 p-5 text-white">
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs backdrop-blur">{route.duration}</span>
          <h1 className="mt-1 text-2xl font-extrabold">{route.name}</h1>
          <p className="text-sm text-white/85">{route.summary}</p>
        </div>
      </div>
      <div className="px-4 py-4">
        {route.days.map((day) => (
          <section key={day.title} className="mb-6">
            <h2 className="mb-3 text-lg font-bold text-datil-700">{day.title}</h2>
            <ol className="relative ml-3 border-l-2 border-datil-200">
              {day.stops.map((stop) => {
                const place = stop.placeId ? getPlace(stop.placeId) : undefined
                const body = (
                  <div className="flex items-center gap-2 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-datil-100">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-datil-600">{stop.time}</p>
                      <p className="font-semibold text-stone-900">{stop.title}</p>
                      <p className="text-sm text-stone-600">{stop.note}</p>
                      {place && <div className="mt-1"><PriceBadge price={place.price} /></div>}
                    </div>
                    {place && <ChevronRight className="h-5 w-5 text-stone-400" />}
                  </div>
                )
                return (
                  <li key={stop.time + stop.title} className="relative mb-3 pl-5">
                    <span className="absolute -left-[9px] top-4 h-4 w-4 rounded-full border-2 border-white bg-datil-500" />
                    {place ? <Link to={`/lugar/${place.id}`}>{body}</Link> : body}
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
