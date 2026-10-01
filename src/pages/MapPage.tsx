import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'
import { CATEGORIES, PLACES, SOATA_CENTER, type Category } from '../data/places'

const markerIcons = Object.fromEntries(
  (Object.keys(CATEGORIES) as Category[]).map((c) => {
    const Icon = CATEGORIES[c].icon
    const svg = renderToStaticMarkup(<Icon size={18} color="#a65724" />)
    return [
      c,
      L.divIcon({
        className: '',
        html: `<div style="width:34px;height:34px;display:flex;align-items:center;justify-content:center;background:#fff;border:2px solid #a65724;border-radius:9999px;box-shadow:0 1px 4px rgba(0,0,0,.3)">${svg}</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
      }),
    ]
  }),
) as Record<Category, L.DivIcon>

export default function MapPage() {
  const [category, setCategory] = useState<Category | null>(null)
  const places = PLACES.filter((p) => !category || p.category === category)

  return (
    <div className="flex h-[calc(100vh-8.5rem)] flex-col">
      <div className="flex gap-2 overflow-x-auto px-4 py-2">
        <button
          onClick={() => setCategory(null)}
          className={`shrink-0 rounded-full px-3 py-1 text-sm ring-1 ${!category ? 'bg-datil-600 text-white ring-datil-600' : 'bg-white ring-datil-100'}`}
        >
          Todo
        </button>
        {(Object.keys(CATEGORIES) as Category[]).map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`shrink-0 rounded-full px-3 py-1 text-sm ring-1 ${category === c ? 'bg-datil-600 text-white ring-datil-600' : 'bg-white ring-datil-100'}`}
          >
            {CATEGORIES[c].label}
          </button>
        ))}
      </div>
      <MapContainer center={SOATA_CENTER} zoom={15} className="flex-1">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={markerIcons[p.category]}>
            <Popup>
              <p className="font-semibold">{p.name}</p>
              <p className="text-xs text-stone-500">{p.short}</p>
              <Link to={`/lugar/${p.id}`} className="text-sm font-semibold text-datil-600">Ver detalle</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
