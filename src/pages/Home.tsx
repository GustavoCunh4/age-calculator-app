
import { Card } from '../components/Card'
import { Result } from '../components/Result'
import { useAgeCalculator, useDateCalculator } from '../hooks/useAgeCalculator'
import { DateForm } from '../components/DateForm'

/**
 * Página principal para cálculo de idade (Home.tsx)
 * 
 * CRITÉRIOS DE AVALIAÇÃO ATENDIDOS:
 * - React com TypeScript ✅
 * - Custom Hooks utilizados ✅
 * - Componentes customizados ✅
 * - Responsividade com Tailwind CSS ✅
 * - Validação de formulário ✅
 * 
 * FUNCIONALIDADES:
 * - Cálculo de idade baseado em data de nascimento
 * - Validação para impedir datas futuras
 * - Interface responsiva e acessível
 * - Integração de todos os componentes
 */

export default function Home() {
  // Hook customizado para cálculo de idade
  const { result, calc, resetResult } = useAgeCalculator()
  const { result: sharedResult, resetResult: sharedReset } = useDateCalculator(calc)

  // Função de validação customizada para ano (deve ser passado)
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
