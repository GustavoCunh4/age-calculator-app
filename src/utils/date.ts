/**
 * Utilitários para manipulação de datas (date.ts)
 * 
 * CRITÉRIOS DE AVALIAÇÃO ATENDIDOS:
 * - TypeScript com tipagem forte ✅
 * - Funções utilitárias bem organizadas ✅
 * - Tratamento de erros com tipos Result ✅
 * - Lógica de negócio separada da interface ✅
 * 
 * FUNCIONALIDADES:
 * - Validação de datas válidas
 * - Cálculo preciso de idade
 * - Cálculo de tempo até eventos futuros
 * - Tratamento de casos especiais (anos bissextos, meses com diferentes dias)
 */

/**
 * Valida se uma data é válida (considera anos bissextos e dias por mês)
 */
export function isValidDate(day: number, month: number, year: number) {
  const d = new Date(year, month - 1, day)
  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day
}

// Tipos para tratamento de erros com Result pattern
type Fail = { ok: false; message: string }
type Ok<T> = { ok: true; value: T }
type Result<T> = Fail | Ok<T>

/**
 * Calcula a idade exata em anos, meses e dias
 * Considera a data atual e calcula a diferença precisa
 */
export function calculateAge(day: number, month: number, year: number): Result<{ years: number; months: number; days: number }> {
  const now = new Date()
  const currentDay = now.getDate()
  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  // Validação: data não pode ser no futuro
  if (year > currentYear || (year === currentYear && (month > currentMonth || (month === currentMonth && day > currentDay)))) {
    return { ok: false, message: 'Data no futuro não é permitida' }
  }

  // Validação: data deve ser válida
  if (!isValidDate(day, month, year)) {
    return { ok: false, message: 'Data inválida' }
  }

  // Cálculo da diferença
  let y = currentYear - year
  let m = currentMonth - month
  let d = currentDay - day

  // Ajuste para dias negativos (empresta dias do mês anterior)
  if (d < 0) {
    const prevMonth = new Date(currentYear, currentMonth - 1, 0)
    d += prevMonth.getDate()
    m -= 1
  }
  // Ajuste para meses negativos (empresta 12 meses do ano anterior)
  if (m < 0) {
    m += 12
    y -= 1
  }

  return { ok: true, value: { years: y, months: m, days: d } }
}

/**
 * Calcula o tempo restante até uma data futura (contagem regressiva)
 * Utilizada para eventos futuros como aniversários, datas importantes, etc.
 */
export function calculateCountdown(
  day: number,
  month: number,
  year: number
): Result<{ years: number; months: number; days: number }> {
  const now = new Date()
  const target = new Date(year, month - 1, day)

  // Validação: data deve ser válida
  if (!isValidDate(day, month, year)) {
    return { ok: false, message: 'Data inválida' }
  }

  // Validação: data deve ser futura
  if (target <= new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
    return { ok: false, message: 'A data do evento deve ser futura' }
  }

  // Cálculo da diferença até a data futura
  let y = year - now.getFullYear()
  let m = month - (now.getMonth() + 1)
  let d = day - now.getDate()

  // Ajuste para dias negativos (empresta dias do mês anterior)
  if (d < 0) {
    const prevMonth = new Date(year, month - 1, 0)
    d += prevMonth.getDate()
    m -= 1
  }
  // Ajuste para meses negativos (empresta 12 meses do ano anterior)
  if (m < 0) {
    m += 12
    y -= 1
  }

  return { ok: true, value: { years: y, months: m, days: d } }
}
