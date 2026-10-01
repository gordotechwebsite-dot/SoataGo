import { Link } from 'react-router-dom'
import { CATEGORIES, type Place } from '../data/places'

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
  const meta = [CATEGORIES[place.category].label, place.duration].filter(Boolean).join(' · ')
  return (
    <Link to={`/lugar/${place.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-datil-100">
        <PlaceImage place={place} className="h-full w-full transition-transform duration-300 group-hover:scale-105" />
        {place.passBenefit && (
          <span className="absolute left-2 top-2 rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-stone-900">Con Pass</span>
        )}
      </div>
      <h3 className="mt-2 line-clamp-2 text-[15px] font-semibold leading-snug text-stone-900">{place.name}</h3>
      <p className="mt-0.5 truncate text-sm text-stone-500">{meta}</p>
      <p className="mt-0.5 text-sm text-stone-900">
        {place.price === 'gratis' ? <span className="font-semibold">Gratis</span> : place.priceLabel ?? 'De pago'}
      </p>
    </Link>
  )
}
