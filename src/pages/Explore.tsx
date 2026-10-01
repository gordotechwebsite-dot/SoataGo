import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { CATEGORIES, PLACES, type Category, type Price } from '../data/places'
import PlaceCard from '../components/PlaceCard'

const chip = (active: boolean) =>
  `shrink-0 border px-3 py-1.5 text-sm ${active ? 'border-stone-900 bg-stone-900 text-datil-50' : 'border-stone-300 text-stone-700'}`

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
    <div className="px-4 py-5">
      <h1 className="font-serif text-3xl font-semibold text-stone-900">Explorar Soatá</h1>
      <label className="mt-4 flex items-center gap-2 border-b border-stone-900 py-2">
        <Search className="h-5 w-5 text-stone-500" strokeWidth={1.5} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar lugares, comida, experiencias..."
          className="w-full bg-transparent outline-none placeholder:text-stone-400"
        />
      </label>

      <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <button className={chip(!category)} onClick={() => update('categoria', null)}>Todo</button>
        {(Object.keys(CATEGORIES) as Category[]).map((c) => (
          <button key={c} className={chip(category === c)} onClick={() => update('categoria', category === c ? null : c)}>
            {CATEGORIES[c].label}
          </button>
        ))}
      </div>
      <div className="mt-2 flex gap-2">
        <button className={chip(!price)} onClick={() => update('precio', null)}>Todos los precios</button>
        <button className={chip(price === 'gratis')} onClick={() => update('precio', price === 'gratis' ? null : 'gratis')}>Gratis</button>
        <button className={chip(price === 'pago')} onClick={() => update('precio', price === 'pago' ? null : 'pago')}>De pago</button>
      </div>

      <p className="mt-5 border-b border-stone-900 pb-2 text-sm text-stone-500">{results.length} resultados</p>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 pt-4 sm:grid-cols-3">
        {results.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}
      </div>
      {results.length === 0 && <p className="py-10 text-center text-stone-500">No encontramos resultados con esos filtros.</p>}
    </div>
  )
}
