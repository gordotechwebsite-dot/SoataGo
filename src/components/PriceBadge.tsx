import type { Price } from '../data/places'

export default function PriceBadge({ price }: { price: Price }) {
  return price === 'gratis' ? (
    <span className="text-[11px] font-semibold uppercase tracking-wider text-palma-700">Gratis</span>
  ) : (
    <span className="text-[11px] font-semibold uppercase tracking-wider text-datil-700">De pago</span>
  )
}
