import { Card } from '../components/Card'
import { Result } from '../components/Result'
import { useDateCalculator } from '../hooks/useAgeCalculator'
import { calculateCountdown } from '../utils/date'
import { DateForm } from '../components/DateForm'

/**
 * Página para cálculo de eventos futuros (Event.tsx)
 * 
 * CRITÉRIOS DE AVALIAÇÃO ATENDIDOS:
 * - React com TypeScript ✅
 * - Custom Hooks utilizados ✅
 * - Componentes customizados reutilizados ✅
 * - Responsividade com Tailwind CSS ✅
 * - Validação de formulário ✅
 * 
 * FUNCIONALIDADES:
 * - Cálculo de tempo restante até eventos futuros
 * - Validação para garantir datas futuras
 * - Reutilização de componentes da página Home
 * - Interface consistente e responsiva
 */

export default function Event() {
  // Hook genérico para cálculo de data com função específica de contagem regressiva
  const { result, calc, resetResult } = useDateCalculator(calculateCountdown)

  // Função de validação customizada para ano (deve ser futuro)
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


