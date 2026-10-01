import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { CATEGORIES, type Place } from '../data/places'
import PriceBadge from './PriceBadge'

export function PlaceImage({ place, className = '' }: { place: Place; className?: string }) {
  if (place.image) return <img src={place.image} alt={place.name} loading="lazy" className={`object-cover ${className}`} />
  const Icon = CATEGORIES[place.category].icon
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-datil-200 to-palma-100 text-datil-600 ${className}`}>
      <Icon className="h-10 w-10" />
    </div>
  )
}

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link
      to={`/lugar/${place.id}`}
      className="group flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-datil-100 transition hover:shadow-md"
    >
      <PlaceImage place={place} className="h-28 w-28 shrink-0 sm:h-32 sm:w-36" />
      <div className="flex min-w-0 flex-1 flex-col gap-1 p-3">
        <div className="flex items-center gap-2">
          <PriceBadge price={place.price} />
          <span className="truncate text-xs text-stone-500">{CATEGORIES[place.category].label}</span>
        </div>
        <h3 className="line-clamp-2 font-semibold leading-tight text-stone-900 group-hover:text-datil-700">{place.name}</h3>
        <p className="line-clamp-2 text-sm text-stone-600">{place.short}</p>
        {place.duration && (
          <span className="mt-auto flex items-center gap-1 text-xs text-stone-500">
            <Clock className="h-3.5 w-3.5" /> {place.duration}
          </span>
        )}
      </div>
    </Link>
  )
}
