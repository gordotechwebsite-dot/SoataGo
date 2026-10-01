import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { CATEGORIES, PLACES, type Category, type Price } from '../data/places'
import PlaceCard from '../components/PlaceCard'

const chip = (active: boolean) =>
  `shrink-0 rounded-full px-3 py-1.5 text-sm font-medium ring-1 transition ${
    active ? 'bg-datil-600 text-white ring-datil-600' : 'bg-white text-stone-600 ring-datil-100'
  }`

export default function Explore() {
  const [params, setParams] = useSearchParams()
  const category = params.get('categoria') as Category | null
  const price = params.get('precio') as Price | null
  const [query, setQuery] = useState('')

  const update = (key: string, value: string | null) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return PLACES.filter(
      (p) =>
        (!category || p.category === category) &&
        (!price || p.price === price) &&
        (!q || `${p.name} ${p.short}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(q)),
    )
  }, [category, price, query])

  return (
    <div className="px-4 py-4">
      <h1 className="text-2xl font-bold text-stone-900">Explorar Soatá</h1>
      <label className="mt-3 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 ring-1 ring-datil-100 focus-within:ring-datil-400">
        <Search className="h-5 w-5 text-stone-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar lugares, comida, experiencias..."
          className="w-full bg-transparent outline-none placeholder:text-stone-400"
        />
      </label>

      <div className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1">
        <button className={chip(!category)} onClick={() => update('categoria', null)}>Todo</button>
        {(Object.keys(CATEGORIES) as Category[]).map((c) => {
          const Icon = CATEGORIES[c].icon
          return (
            <button key={c} className={`${chip(category === c)} flex items-center gap-1.5`} onClick={() => update('categoria', category === c ? null : c)}>
              <Icon className="h-4 w-4" /> {CATEGORIES[c].label}
            </button>
          )
        })}
      </div>
      <div className="mt-2 flex gap-2">
        <button className={chip(!price)} onClick={() => update('precio', null)}>Todos los precios</button>
        <button className={chip(price === 'gratis')} onClick={() => update('precio', price === 'gratis' ? null : 'gratis')}>Gratis</button>
        <button className={chip(price === 'pago')} onClick={() => update('precio', price === 'pago' ? null : 'pago')}>De pago</button>
      </div>

      <p className="mt-4 text-sm text-stone-500">{results.length} resultados</p>
      <div className="mt-2 flex flex-col gap-3">
        {results.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}
        {results.length === 0 && <p className="py-10 text-center text-stone-500">No encontramos resultados con esos filtros.</p>}
      </div>
    </div>
  )
}
