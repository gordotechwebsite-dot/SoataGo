import { Link, useParams } from 'react-router-dom'
import { getRoute } from '../data/routes'
import { getPlace } from '../data/places'
import PriceBadge from '../components/PriceBadge'

export default function RouteDetail() {
  const { id = '' } = useParams()
  const route = getRoute(id)
  if (!route) return <p className="p-6 text-center text-stone-600">Ruta no encontrada.</p>

  return (
    <div>
      <img src={route.image} alt={route.name} className="h-56 w-full object-cover" />
      <div className="px-4 pt-5">
        <p className="text-[11px] uppercase tracking-wider text-stone-500">{route.duration}</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold leading-tight text-stone-900">{route.name}</h1>
        <p className="mt-2 text-stone-700">{route.summary}</p>
      </div>
      <div className="px-4 py-6">
        {route.days.map((day) => (
          <section key={day.title} className="mb-8">
            <h2 className="border-b border-stone-900 pb-2 font-serif text-xl font-semibold text-stone-900">{day.title}</h2>
            <ol>
              {day.stops.map((stop) => {
                const place = stop.placeId ? getPlace(stop.placeId) : undefined
                const body = (
                  <div className="grid grid-cols-[5.25rem_1fr] gap-3 border-b border-stone-300 py-3">
                    <p className="pt-0.5 text-sm font-semibold tabular-nums text-datil-700">{stop.time}</p>
                    <div>
                      <p className={`font-medium text-stone-900 ${place ? 'underline decoration-stone-300 underline-offset-4' : ''}`}>{stop.title}</p>
                      <p className="mt-0.5 text-sm text-stone-600">{stop.note}</p>
                      {place && <div className="mt-1"><PriceBadge price={place.price} /></div>}
                    </div>
                  </div>
                )
                return <li key={stop.time + stop.title}>{place ? <Link to={`/lugar/${place.id}`}>{body}</Link> : body}</li>
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
