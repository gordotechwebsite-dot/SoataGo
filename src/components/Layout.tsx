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
      <header className="sticky top-0 z-[1000] flex items-center justify-between border-b border-datil-100 bg-datil-50/90 px-4 py-3 backdrop-blur">
        <Link to="/" className="flex items-center gap-2">
          <img src="/icon.svg" alt="" className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-tight text-datil-700">
            Soata<span className="text-palma-600">Go</span>
          </span>
        </Link>
        <Link to="/acerca" className="text-sm font-medium text-stone-500 hover:text-datil-600">
          Acerca de
        </Link>
      </header>
      <main className="flex-1 pb-24">
        <Outlet />
      </main>
      <nav className="fixed inset-x-0 bottom-0 z-[1000] border-t border-datil-100 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <ul className="mx-auto flex max-w-3xl justify-around">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 px-3 py-2 text-xs font-medium ${isActive ? 'text-datil-600' : 'text-stone-400'}`
                }
              >
                <Icon className="h-5 w-5" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
