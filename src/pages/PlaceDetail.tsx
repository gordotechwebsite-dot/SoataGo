import { Link, useNavigate, useParams } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, Clock, MapPin, MessageCircle, Navigation, Ticket } from 'lucide-react'
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
          className="absolute left-3 top-3 rounded-full bg-white/90 p-2 shadow"
          aria-label="Volver"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>
      <div className="-mt-6 rounded-t-3xl bg-datil-50 px-5 pt-5 relative">
        <div className="flex items-center gap-2">
          <PriceBadge price={place.price} />
          <span className="text-sm text-stone-500">{CATEGORIES[place.category].label}</span>
        </div>
        <h1 className="mt-2 text-2xl font-extrabold leading-tight text-stone-900">{place.name}</h1>

        <div className="mt-3 flex flex-wrap gap-3 text-sm text-stone-600">
          {place.duration && (
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {place.duration}</span>
          )}
          {place.priceLabel && <span className="font-semibold text-datil-700">{place.priceLabel}</span>}
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {place.approx ? 'Ubicación aproximada' : 'Soatá, Boyacá'}
          </span>
        </div>

        <p className="mt-4 leading-relaxed text-stone-700">{place.description}</p>

        {place.passBenefit && (
          <Link to="/pass" className="mt-4 flex items-start gap-3 rounded-2xl bg-datil-100 p-4 text-datil-900">
            <Ticket className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-semibold">Beneficio SoataGo Pass</p>
              <p className="text-sm">{place.passBenefit}</p>
            </div>
          </Link>
        )}

        {place.tips && (
          <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-datil-100">
            <p className="font-semibold text-stone-900">Recomendaciones</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700">
              {place.tips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        )}

        {place.pendingVerification && (
          <p className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-xs text-amber-800 ring-1 ring-amber-200">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            Información en verificación. Horarios, precios y beneficios pueden cambiar.
          </p>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3 pb-4">
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-datil-600 py-3 font-semibold text-white">
            <Navigation className="h-5 w-5" /> Cómo llegar
          </a>
          <a href={`https://wa.me/?text=${shareText}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-palma-600 py-3 font-semibold text-white">
            <MessageCircle className="h-5 w-5" /> Compartir
          </a>
        </div>
      </div>
    </article>
  )
}
