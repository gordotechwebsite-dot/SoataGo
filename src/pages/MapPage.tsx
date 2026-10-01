import { useState } from 'react'
import { Link } from 'react-router-dom'
import { APIProvider, InfoWindow, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps'
import { renderToStaticMarkup } from 'react-dom/server'
import { CATEGORIES, PLACES, SOATA_CENTER, type Category, type Place } from '../data/places'

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined

const markerUrls = Object.fromEntries(
  (Object.keys(CATEGORIES) as Category[]).map((c) => {
    const Icon = CATEGORIES[c].icon
    const icon = renderToStaticMarkup(<Icon size={16} x={6} y={6} color="#fdf6ef" strokeWidth={1.75} />)
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><rect x="0.75" y="0.75" width="26.5" height="26.5" fill="#83421f" stroke="#fdf6ef" stroke-width="1.5"/>${icon}</svg>`
    return [c, `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`]
  }),
) as Record<Category, string>

const MAP_STYLES: google.maps.MapTypeStyle[] = [
  { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
]

function Markers({ places }: { places: Place[] }) {
  const [selected, setSelected] = useState<Place | null>(null)
  const anchor = new google.maps.Point(14, 14)

  return (
    <>
      {places.map((p) => (
        <Marker
          key={p.id}
          position={{ lat: p.lat, lng: p.lng }}
          title={p.name}
          icon={{ url: markerUrls[p.category], anchor }}
          onClick={() => setSelected(p)}
        />
      ))}
      {selected && places.includes(selected) && (
        <InfoWindow position={{ lat: selected.lat, lng: selected.lng }} pixelOffset={[0, -14]} onCloseClick={() => setSelected(null)}>
          <div className="max-w-[14rem] font-sans">
            <p className="font-serif text-base font-semibold text-stone-900">{selected.name}</p>
            <p className="mt-0.5 text-xs text-stone-600">{selected.short}</p>
            <Link to={`/lugar/${selected.id}`} className="mt-1 inline-block text-sm font-medium text-datil-700">Ver detalle</Link>
          </div>
        </InfoWindow>
      )}
    </>
  )
}

export default function MapPage() {
  const [category, setCategory] = useState<Category | null>(null)
  const places = PLACES.filter((p) => !category || p.category === category)

  return (
    <div className="flex h-[calc(100vh-8.5rem)] flex-col">
      <div className="flex gap-2 overflow-x-auto px-4 py-2">
        <button
          onClick={() => setCategory(null)}
          className={`shrink-0 border px-3 py-1 text-sm ${!category ? 'border-stone-900 bg-stone-900 text-datil-50' : 'border-stone-300 text-stone-700'}`}
        >
          Todo
        </button>
        {(Object.keys(CATEGORIES) as Category[]).map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`shrink-0 border px-3 py-1 text-sm ${category === c ? 'border-stone-900 bg-stone-900 text-datil-50' : 'border-stone-300 text-stone-700'}`}
          >
            {CATEGORIES[c].label}
          </button>
        ))}
      </div>
      {API_KEY ? (
        <APIProvider apiKey={API_KEY} language="es" region="CO">
          <GoogleMap
            className="flex-1"
            defaultCenter={{ lat: SOATA_CENTER[0], lng: SOATA_CENTER[1] }}
            defaultZoom={15}
            gestureHandling="greedy"
            mapTypeControl={false}
            streetViewControl={false}
            fullscreenControl={false}
            styles={MAP_STYLES}
          >
            <Markers places={places} />
          </GoogleMap>
        </APIProvider>
      ) : (
        <p className="p-6 text-center text-sm text-stone-500">El mapa no está disponible en este momento.</p>
      )}
    </div>
  )
}
