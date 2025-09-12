import { Card } from '../components/Card'
import { Result } from '../components/Result'
import { useAgeCalculator, useDateCalculator } from '../hooks/useAgeCalculator'
import { DateForm } from '../components/DateForm'

export default function Home() {
  const { result, calc, resetResult } = useAgeCalculator()
  const { result: sharedResult, resetResult: sharedReset } = useDateCalculator(calc)

  const validatePastYear = (value: string) => {
    const year = parseInt(value, 10)
    const now = new Date()
    return year <= now.getFullYear() || 'Não pode ser no futuro'
  }

  return (
    <div className="container-outer">
      <Card>
        <DateForm
          onCalculate={calc}
          resetResult={resetResult}
          yearValidate={validatePastYear}
          submitAriaLabel="Calcular idade"
        />
        <Result result={result ?? sharedResult} isValid={true} />
      </Card>
    </div>
  )
}
