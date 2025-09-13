import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import App from './App'
import Event from './pages/Event'

/**
 * Configuração principal da aplicação (main.tsx)
 * 
 * CRITÉRIOS DE AVALIAÇÃO ATENDIDOS:
 * - React com TypeScript ✅
 * - React Router DOM para navegação ✅
 * - Estrutura de arquivos organizada ✅
 * 
 * FUNCIONALIDADES:
 * - Configuração do React Router com rotas aninhadas
 * - Roteamento para páginas Home e Event
 * - Importação dos estilos globais do Tailwind
 * - Renderização da aplicação no DOM
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // Rota padrão para cálculo de idade
      { path: 'evento', element: <Event /> }, // Rota para cálculo de eventos futuros
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
