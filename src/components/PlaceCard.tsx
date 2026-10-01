import { Link } from 'react-router-dom'
import { CATEGORIES, type Place } from '../data/places'
import PriceBadge from './PriceBadge'

export function PlaceImage({ place, className = '' }: { place: Place; className?: string }) {
  if (place.image) return <img src={place.image} alt={place.name} loading="lazy" className={`object-cover ${className}`} />
  const Icon = CATEGORIES[place.category].icon
  return (
    <div className={`flex items-center justify-center bg-datil-100 text-datil-700 ${className}`}>
      <Icon className="h-8 w-8" strokeWidth={1.5} />
    </div>
  )
}

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link to={`/lugar/${place.id}`} className="group flex gap-4 border-b border-stone-300 py-4">
      <PlaceImage place={place} className="h-24 w-24 shrink-0 sm:h-28 sm:w-32" />
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-stone-500">
          <span className="truncate">{CATEGORIES[place.category].label}</span>
          <span aria-hidden>/</span>
          <PriceBadge price={place.price} />
        </p>
        <h3 className="mt-1 line-clamp-2 font-serif text-lg font-semibold leading-snug text-stone-900 group-hover:underline">{place.name}</h3>
        <p className="mt-0.5 line-clamp-2 text-sm text-stone-600">{place.short}</p>
        {place.duration && <p className="mt-auto pt-1 text-xs text-stone-500">{place.duration}</p>}
      </div>
    </Link>
  )
}
