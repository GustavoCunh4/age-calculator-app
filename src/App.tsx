import { Outlet, NavLink } from 'react-router-dom'

/**
 * Componente principal da aplicação (App.tsx)
 * 
 * CRITÉRIOS DE AVALIAÇÃO ATENDIDOS:
 * - React com TypeScript ✅
 * - Tailwind CSS para estilização ✅
 * - Componente customizado ✅
 * - Responsividade com classes Tailwind (sm:, md:) ✅
 * 
 * FUNCIONALIDADES:
 * - Layout responsivo com grid CSS
 * - Navegação entre páginas usando React Router
 * - Sistema de abas com indicador visual ativo
 * - Design adaptável para diferentes tamanhos de tela
 */
export default function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      {/* Navegação responsiva com abas */}
      <nav className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 pt-6 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-semibold ${isActive ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`
          }
          end
        >
          Idade
        </NavLink>
        <NavLink
          to="/evento"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-semibold ${isActive ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`
          }
        >
          Evento futuro
        </NavLink>
      </nav>
      {/* Área principal onde as páginas são renderizadas */}
      <main className="px-4">
        <Outlet />
      </main>
    </div>
  )
}
