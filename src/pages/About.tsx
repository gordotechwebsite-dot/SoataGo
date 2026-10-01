import { PHOTO_CREDITS } from '../data/credits'

export default function About() {
  return (
    <div className="space-y-4 px-4 py-5 text-sm text-stone-700">
      <h1 className="font-serif text-3xl font-semibold text-stone-900">Acerca de SoataGo</h1>
      <p>
        SoataGo es la guía turística y el pase de experiencias de Soatá, Boyacá. La hicimos para que quien visite el
        municipio sepa a dónde ir, qué hacer y dónde comer.
      </p>
      <p>
        ¿Tienes un negocio o una experiencia en Soatá y quieres ser aliado del Pass? Escríbenos.
      </p>
      <section>
        <h2 className="border-b border-stone-900 pb-2 font-serif text-xl font-semibold text-stone-900">Créditos de fotos</h2>
        <p className="mt-1 text-xs text-stone-500">Fotografías de Wikimedia Commons bajo licencias Creative Commons. Mapa y ubicaciones: © colaboradores de OpenStreetMap.</p>
        <ul className="mt-2 space-y-1 text-xs">
          {PHOTO_CREDITS.map((c) => (
            <li key={c.file}>
              <a href={c.source} target="_blank" rel="noreferrer" className="text-datil-700 underline">{c.file.replace('/img/', '')}</a> · {c.author} · {c.license}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
