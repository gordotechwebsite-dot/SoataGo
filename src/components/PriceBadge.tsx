import type { Price } from '../data/places'

export default function PriceBadge({ price }: { price: Price }) {
  return price === 'gratis' ? (
    <span className="rounded-full bg-palma-100 px-2 py-0.5 text-xs font-semibold text-palma-700">Gratis</span>
  ) : (
    <span className="rounded-full bg-datil-100 px-2 py-0.5 text-xs font-semibold text-datil-700">De pago</span>
  )
}
