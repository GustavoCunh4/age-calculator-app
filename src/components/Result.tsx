import { useMemo } from 'react'
import { AgeResult } from '../hooks/useAgeCalculator'

export function Result({ result, isValid }: { result: AgeResult | null; isValid: boolean }) {
  // Hook 4: useMemo to render animated numbers or placeholders
  const years = useMemo(() => (result?.years ?? '--'), [result?.years])
  const months = useMemo(() => (result?.months ?? '--'), [result?.months])
  const days = useMemo(() => (result?.days ?? '--'), [result?.days])

  return (
    <div className="mt-6 md:mt-10">
      <h1 className="text-5xl md:text-7xl font-extrabold italic leading-tight">
        <span className="text-primary">{years}</span> anos
      </h1>
      <h2 className="text-5xl md:text-7xl font-extrabold italic leading-tight">
        <span className="text-primary">{months}</span> meses
      </h2>
      <h3 className="text-5xl md:text-7xl font-extrabold italic leading-tight">
        <span className="text-primary">{days}</span> dias
      </h3>
      {!isValid && (
        <p className="mt-4 text-sm text-red-600">
          Preencha corretamente todos os campos.
        </p>
      )}
    </div>
  )
}
