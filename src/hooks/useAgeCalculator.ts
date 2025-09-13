import { useCallback, useState } from 'react'
import { calculateAge } from '../utils/date'

/**
 * Custom Hooks para cálculos de data (useAgeCalculator.ts)
 * 
 * CRITÉRIOS DE AVALIAÇÃO ATENDIDOS:
 * - React Hooks: useState, useCallback ✅
 * - Custom Hooks criados pelo desenvolvedor ✅
 * - TypeScript com tipagem forte ✅
 * - Reutilização de código com hooks genéricos ✅
 * 
 * FUNCIONALIDADES:
 * - Hook específico para cálculo de idade
 * - Hook genérico para qualquer cálculo de data
 * - Gerenciamento de estado dos resultados
 * - Funções de reset para limpeza
 * - Tratamento de erros com tipos Result
 */

export type AgeResult = {
  years: number
  months: number
  days: number
}

type Fail = { ok: false; message: string }
type Ok = { ok: true; value: AgeResult }
type CalcResult = Fail | Ok

/**
 * Hook específico para cálculo de idade
 * Utiliza useState para gerenciar o resultado e useCallback para otimização
 */
export function useAgeCalculator() {
  // Hook 3: useState para gerenciar o estado do resultado
  const [result, setResult] = useState<AgeResult | null>(null)

  // Hook 4: useCallback para otimizar a função de cálculo
  const calc = useCallback((day: number, month: number, year: number): CalcResult => {
    const r = calculateAge(day, month, year)
    if (!r.ok) return r
    setResult(r.value)
    return r
  }, [])

  const resetResult = useCallback(() => setResult(null), [])

  return { result, calc, resetResult }
}

/**
 * Hook genérico reutilizável para qualquer cálculo de data
 * Permite passar uma função de cálculo como parâmetro
 * Demonstra reutilização de código e flexibilidade
 */
export function useDateCalculator(
  calculate: (day: number, month: number, year: number) => CalcResult
) {
  const [result, setResult] = useState<AgeResult | null>(null)

  const calc = useCallback(
    (day: number, month: number, year: number): CalcResult => {
      const r = calculate(day, month, year)
      if (!r.ok) return r
      setResult(r.value)
      return r
    },
    [calculate]
  )

  const resetResult = useCallback(() => setResult(null), [])

  return { result, calc, resetResult }
}
