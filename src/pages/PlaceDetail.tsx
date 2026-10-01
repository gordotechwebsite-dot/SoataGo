import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Navigation } from 'lucide-react'
import { CATEGORIES, getPlace } from '../data/places'
import PriceBadge from '../components/PriceBadge'
import { PlaceImage } from '../components/PlaceCard'

export default function PlaceDetail() {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const place = getPlace(id)

  if (!place) {
    return (
      <div className="p-6 text-center">
        <p className="text-stone-600">No encontramos este lugar.</p>
        <Link to="/explorar" className="mt-3 inline-block font-medium text-datil-600">Volver a explorar</Link>
      </div>
    )
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`
  const shareText = encodeURIComponent(`Mira este plan en Soatá: ${place.name} ${window.location.href}`)

  return (
    <article>
      <div className="relative">
        <PlaceImage place={place} className="h-72 w-full" />
        <button
          onClick={() => navigate(-1)}
          className="absolute left-3 top-3 border border-stone-900 bg-datil-50 p-2"
          aria-label="Volver"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
      <div className="px-5 pt-5">
        <p className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-stone-500">
          {CATEGORIES[place.category].label}
          <span aria-hidden>/</span>
          <PriceBadge price={place.price} />
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-stone-900">{place.name}</h1>

        <dl className="mt-4 divide-y divide-stone-300 border-y border-stone-300 text-sm">
          {place.duration && (
            <div className="grid grid-cols-[6rem_1fr] py-2"><dt className="text-stone-500">Duración</dt><dd>{place.duration}</dd></div>
          )}
          {place.priceLabel && (
            <div className="grid grid-cols-[6rem_1fr] py-2"><dt className="text-stone-500">Precio</dt><dd className="font-semibold text-datil-700">{place.priceLabel}</dd></div>
          )}
          <div className="grid grid-cols-[6rem_1fr] py-2">
            <dt className="text-stone-500">Ubicación</dt><dd>{place.approx ? 'Aproximada' : 'Soatá, Boyacá'}</dd>
          </div>
        </dl>

        <p className="mt-5 leading-relaxed text-stone-700">{place.description}</p>

        {place.passBenefit && (
          <Link to="/pass" className="mt-5 block border-l-4 border-datil-700 bg-white py-3 pl-4 pr-3 text-stone-900">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-datil-700">Con SoataGo Pass</p>
            <p className="mt-1 text-sm">{place.passBenefit}</p>
          </Link>
        )}

        {place.tips && (
          <div className="mt-6">
            <h2 className="font-serif text-xl font-semibold text-stone-900">Recomendaciones</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700">
              {place.tips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        )}

        {place.pendingVerification && (
          <p className="mt-5 text-xs italic text-stone-500">
            Información en verificación: horarios, precios y beneficios pueden cambiar.
          </p>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3 pb-4">
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-stone-900 py-3 font-medium text-datil-50">
            <Navigation className="h-4 w-4" strokeWidth={1.5} /> Cómo llegar
          </a>
          <a href={`https://wa.me/?text=${shareText}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border border-stone-900 py-3 font-medium text-stone-900">
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> Compartir
          </a>
        </div>
      </div>
    </article>
  )
}
