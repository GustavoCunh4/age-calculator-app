import { useCallback, useState } from 'react'
import { calculateAge } from '../utils/date'

export type AgeResult = {
  years: number
  months: number
  days: number
}

type Fail = { ok: false; message: string }
type Ok = { ok: true; value: AgeResult }
type CalcResult = Fail | Ok

export function useAgeCalculator() {
  const [result, setResult] = useState<AgeResult | null>(null)

  const calc = useCallback((day: number, month: number, year: number): CalcResult => {
    const r = calculateAge(day, month, year)
    if (!r.ok) return r
    setResult(r.value)
    return r
  }, [])

  const resetResult = useCallback(() => setResult(null), [])

  return { result, calc, resetResult }
}

// Generic reusable hook to calculate a date difference using a provided strategy
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
