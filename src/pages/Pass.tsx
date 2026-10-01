import { useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { Check, Info } from 'lucide-react'
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
    <div className="px-4 py-4">
      <h1 className="text-2xl font-bold text-stone-900">SoataGo Pass</h1>
      <p className="mt-1 text-sm text-stone-600">Un solo pase para las mejores experiencias de Soatá, con beneficios en comercios aliados.</p>

      {pass ? (
        <section className="mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-datil-600 to-datil-900 p-5 text-white shadow-lg">
          <p className="text-xs uppercase tracking-widest text-datil-200">{PLANS.find((p) => p.id === pass.plan)?.name}</p>
          <p className="mt-1 text-2xl font-extrabold">{pass.name}</p>
          <div className="mt-4 flex justify-center rounded-2xl bg-white p-4">
            <QRCodeSVG value={`soatago:${pass.code}`} size={180} fgColor="#3f2112" />
          </div>
          <p className="mt-3 text-center font-mono text-lg tracking-widest">{pass.code}</p>
          <p className="mt-1 text-center text-xs text-datil-100">Muestra este código en los comercios aliados.</p>
          <button onClick={reset} className="mt-4 w-full rounded-xl bg-white/15 py-2 text-sm">Quitar pase de este dispositivo</button>
        </section>
      ) : (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="mt-4 w-full rounded-2xl bg-white px-4 py-3 outline-none ring-1 ring-datil-100 focus:ring-datil-400"
          />
          <div className="mt-4 flex flex-col gap-4">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-5 ring-1 ${plan.highlight ? 'bg-white ring-2 ring-datil-500 shadow-md' : 'bg-white ring-datil-100'}`}
              >
                {plan.highlight && (
                  <span className="rounded-full bg-datil-500 px-2 py-0.5 text-xs font-semibold text-white">Recomendado</span>
                )}
                <div className="mt-2 flex items-baseline justify-between">
                  <h2 className="text-xl font-bold text-stone-900">{plan.name}</h2>
                  <p className="text-lg font-extrabold text-datil-700">{plan.price}</p>
                </div>
                <p className="text-sm text-stone-600">{plan.tagline}</p>
                <ul className="mt-3 space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-stone-700">
                      <Check className="h-4 w-4 text-palma-600" /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => activate(plan.id)}
                  className={`mt-4 w-full rounded-2xl py-3 font-semibold ${plan.highlight ? 'bg-datil-600 text-white' : 'bg-datil-100 text-datil-800'}`}
                >
                  {plan.price === 'Gratis' ? 'Activar gratis' : 'Obtener pase (demo)'}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-3 flex items-start gap-2 text-xs text-stone-500">
            <Info className="h-4 w-4 shrink-0" /> Versión de demostración: todavía no se procesan pagos. Precios y beneficios de referencia.
          </p>
        </>
      )}

      <section className="mt-6">
        <h2 className="text-lg font-bold text-stone-900">Beneficios del Pass</h2>
        <ul className="mt-2 divide-y divide-datil-100 rounded-2xl bg-white ring-1 ring-datil-100">
          {benefits.map((p) => (
            <li key={p.id}>
              <Link to={`/lugar/${p.id}`} className="block p-3">
                <p className="font-semibold text-stone-900">{p.name}</p>
                <p className="text-sm text-datil-700">{p.passBenefit}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
