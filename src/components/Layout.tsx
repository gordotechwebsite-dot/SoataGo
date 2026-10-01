import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Compass, Home, Map, Route as RouteIcon, Ticket } from 'lucide-react'

const NAV = [
  { to: '/', label: 'Inicio', icon: Home, end: true },
  { to: '/explorar', label: 'Explorar', icon: Compass },
  { to: '/rutas', label: 'Rutas', icon: RouteIcon },
  { to: '/mapa', label: 'Mapa', icon: Map },
  { to: '/pass', label: 'Pass', icon: Ticket },
]

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col bg-datil-50">
      <header className="sticky top-0 z-[1000] flex items-baseline justify-between border-b border-stone-300 bg-datil-50 px-4 py-3">
        <Link to="/" className="font-serif text-2xl font-semibold leading-none text-stone-900">
          SoataGo
        </Link>
        <Link to="/acerca" className="text-sm text-stone-600">
          Acerca de
        </Link>
      </header>
      <main className="flex-1 pb-24">
        <Outlet />
      </main>
      <nav className="fixed inset-x-0 bottom-0 z-[1000] border-t border-stone-300 bg-datil-50 pb-[env(safe-area-inset-bottom)]">
        <ul className="mx-auto flex max-w-3xl">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `-mt-px flex flex-col items-center gap-1 border-t-2 py-2 text-[11px] ${isActive ? 'border-datil-700 font-semibold text-datil-700' : 'border-transparent text-stone-500'}`
                }
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
