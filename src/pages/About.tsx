import { PHOTO_CREDITS } from '../data/credits'

export default function About() {
  return (
    <div className="space-y-4 px-4 py-4 text-sm text-stone-700">
      <h1 className="text-2xl font-bold text-stone-900">Acerca de SoataGo</h1>
      <p>
        SoataGo es la guía turística y el pase de experiencias de Soatá, Boyacá. Nuestro objetivo es impulsar el turismo del municipio
        para que cada visitante sepa a dónde ir, qué hacer, qué comer y qué experiencias vivir.
      </p>
      <p>
        ¿Tienes un negocio o una experiencia en Soatá y quieres ser aliado del Pass? Escríbenos.
      </p>
      <section>
        <h2 className="text-lg font-bold text-stone-900">Créditos de fotos</h2>
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
