import { Card } from '../components/Card'
import { Result } from '../components/Result'
import { useDateCalculator } from '../hooks/useAgeCalculator'
import { calculateCountdown } from '../utils/date'
import { DateForm } from '../components/DateForm'

export default function Event() {
  const { result, calc, resetResult } = useDateCalculator(calculateCountdown)

  const validateFutureYear = (value: string) => {
    const year = parseInt(value, 10)
    const now = new Date()
    return year >= now.getFullYear() || 'Ano deve ser atual ou futuro'
  }

  return (
    <div className="container-outer">
      <Card>
        <DateForm
          onCalculate={calc}
          resetResult={resetResult}
          yearValidate={validateFutureYear}
          submitAriaLabel="Calcular tempo até o evento"
        />
        <Result result={result} isValid={true} />
      </Card>
    </div>
  )
}


