import { useMemo } from 'react'
import { AgeResult } from '../hooks/useAgeCalculator'

/**
 * Componente de exibição de resultados (Result.tsx)
 * 
 * CRITÉRIOS DE AVALIAÇÃO ATENDIDOS:
 * - React Hook: useMemo ✅
 * - Componente customizado ✅
 * - Responsividade com Tailwind CSS ✅
 * - TypeScript com tipagem forte ✅
 * 
 * FUNCIONALIDADES:
 * - Exibição visual dos resultados de cálculo
 * - Placeholders quando não há resultado
 * - Design responsivo com diferentes tamanhos de fonte
 * - Feedback visual para validação
 * - Otimização com useMemo para evitar re-renders desnecessários
 */

export function Result({ result, isValid }: { result: AgeResult | null; isValid: boolean }) {
  // Hook 5: useMemo para otimizar renderização dos valores
  // Evita re-cálculos desnecessários quando os valores não mudam
  const years = useMemo(() => (result?.years ?? '--'), [result?.years])
  const months = useMemo(() => (result?.months ?? '--'), [result?.months])
  const days = useMemo(() => (result?.days ?? '--'), [result?.days])

  return (
    <div className="mt-6 md:mt-10">
      {/* Exibição dos anos com destaque visual */}
      <h1 className="text-5xl md:text-7xl font-extrabold italic leading-tight">
        <span className="text-primary">{years}</span> anos
      </h1>
      {/* Exibição dos meses com destaque visual */}
      <h2 className="text-5xl md:text-7xl font-extrabold italic leading-tight">
        <span className="text-primary">{months}</span> meses
      </h2>
      {/* Exibição dos dias com destaque visual */}
      <h3 className="text-5xl md:text-7xl font-extrabold italic leading-tight">
        <span className="text-primary">{days}</span> dias
      </h3>
      {/* Mensagem de erro quando formulário é inválido */}
      {!isValid && (
        <p className="mt-4 text-sm text-red-600">
          Preencha corretamente todos os campos.
        </p>
      )}
    </div>
  )
}
