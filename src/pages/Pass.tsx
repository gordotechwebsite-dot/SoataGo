import { useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { PLACES } from '../data/places'

interface Plan {
  id: string
  name: string
  price: string
  tagline: string
  features: string[]
  highlight?: boolean
}

const PLANS: Plan[] = [
  {
    id: 'libre',
    name: 'Pass Libre',
    price: 'Gratis',
    tagline: 'Para descubrir Soatá a tu ritmo.',
    features: ['Guía completa de lugares y comida', 'Rutas sugeridas', 'Mapa interactivo', 'Experiencias gratuitas'],
  },
  {
    id: 'datil',
    name: 'Pass Dátil',
    price: '$49.900 COP',
    tagline: 'El pase completo para vivir Soatá.',
    features: ['Todo lo del Pass Libre', 'Ruta del Dátil incluida', 'Avistamiento de aves incluido', 'Descuentos en comercios aliados', 'Válido por 3 días'],
    highlight: true,
  },
]

const STORAGE_KEY = 'soatago-pass'

interface StoredPass {
  plan: string
  name: string
  code: string
  createdAt: string
}

function loadPass(): StoredPass | null {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
  } catch {
    return null
  }
}

export default function Pass() {
  const [pass, setPass] = useState<StoredPass | null>(loadPass)
  const [name, setName] = useState('')
  const benefits = PLACES.filter((p) => p.passBenefit)

  const activate = (plan: string) => {
    const created: StoredPass = {
      plan,
      name: name.trim() || 'Visitante',
      code: `SG-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      createdAt: new Date().toISOString(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(created))
    setPass(created)
  }

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY)
    setPass(null)
  }

  return (
    <div className="px-4 py-5">
      <h1 className="font-serif text-3xl font-semibold text-stone-900">Soata <span className="text-dinero">GoPass</span></h1>
      <p className="mt-1 text-sm text-stone-600">Experiencias incluidas y descuentos en comercios de Soatá.</p>

      {pass ? (
        <section className="mt-5 border border-stone-900 bg-white">
          <div className="p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-datil-700">{PLANS.find((p) => p.id === pass.plan)?.name}</p>
            <p className="mt-1 font-serif text-3xl font-semibold text-stone-900">{pass.name}</p>
          </div>
          <div className="border-t border-dashed border-stone-400 p-5">
            <div className="flex justify-center">
              <QRCodeSVG value={`soatago:${pass.code}`} size={180} fgColor="#1c1917" />
            </div>
            <p className="mt-3 text-center font-mono text-lg tracking-widest text-stone-900">{pass.code}</p>
            <p className="mt-1 text-center text-xs text-stone-500">Muestra este código en los comercios aliados.</p>
          </div>
          <button onClick={reset} className="w-full border-t border-stone-300 py-3 text-sm text-stone-600">Quitar pase de este dispositivo</button>
        </section>
      ) : (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="mt-5 w-full border-b border-stone-900 bg-transparent py-2 outline-none placeholder:text-stone-400"
          />
          <div className="mt-5 flex flex-col gap-4">
            {PLANS.map((plan) => (
              <div key={plan.id} className={`bg-white p-5 ${plan.highlight ? 'border-2 border-stone-900' : 'border border-stone-300'}`}>
                {plan.highlight && <p className="text-[11px] font-semibold uppercase tracking-wider text-datil-700">El más completo</p>}
                <div className="mt-1 flex items-baseline justify-between gap-3">
                  <h2 className="font-serif text-2xl font-semibold text-stone-900">{plan.name}</h2>
                  <p className="font-semibold text-stone-900">{plan.price}</p>
                </div>
                <p className="text-sm text-stone-600">{plan.tagline}</p>
                <ul className="mt-3 divide-y divide-stone-200 border-y border-stone-200 text-sm text-stone-700">
                  {plan.features.map((f) => (
                    <li key={f} className="py-1.5">{f}</li>
                  ))}
                </ul>
                <button
                  onClick={() => activate(plan.id)}
                  className={`mt-4 w-full py-3 font-medium ${plan.highlight ? 'bg-stone-900 text-datil-50' : 'border border-stone-900 text-stone-900'}`}
                >
                  {plan.price === 'Gratis' ? 'Activar gratis' : 'Obtener pase (demo)'}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs italic text-stone-500">
            Versión de demostración: todavía no se procesan pagos. Precios y beneficios de referencia.
          </p>
        </>
      )}

      <section className="mt-8">
        <h2 className="border-b border-stone-900 pb-2 font-serif text-xl font-semibold text-stone-900">Beneficios del Pass</h2>
        <ul className="divide-y divide-stone-300">
          {benefits.map((p) => (
            <li key={p.id}>
              <Link to={`/lugar/${p.id}`} className="block py-3">
                <p className="font-medium text-stone-900">{p.name}</p>
                <p className="text-sm text-datil-700">{p.passBenefit}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
