export function isValidDate(day: number, month: number, year: number) {
  const d = new Date(year, month - 1, day)
  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day
}

type Fail = { ok: false; message: string }
type Ok<T> = { ok: true; value: T }
type Result<T> = Fail | Ok<T>

export function calculateAge(day: number, month: number, year: number): Result<{ years: number; months: number; days: number }> {
  const now = new Date()
  const currentDay = now.getDate()
  const currentMonth = now.getMonth() + 1
  const currentYear = now.getFullYear()

  if (year > currentYear || (year === currentYear && (month > currentMonth || (month === currentMonth && day > currentDay)))) {
    return { ok: false, message: 'Data no futuro não é permitida' }
  }

  if (!isValidDate(day, month, year)) {
    return { ok: false, message: 'Data inválida' }
  }

  let y = currentYear - year
  let m = currentMonth - month
  let d = currentDay - day

  if (d < 0) {
    // Borrow days from previous month
    const prevMonth = new Date(currentYear, currentMonth - 1, 0)
    d += prevMonth.getDate()
    m -= 1
  }
  if (m < 0) {
    m += 12
    y -= 1
  }

  return { ok: true, value: { years: y, months: m, days: d } }
}

// Calculate remaining time from now until a future date (years, months, days)
export function calculateCountdown(
  day: number,
  month: number,
  year: number
): Result<{ years: number; months: number; days: number }> {
  const now = new Date()
  const target = new Date(year, month - 1, day)

  if (!isValidDate(day, month, year)) {
    return { ok: false, message: 'Data inválida' }
  }

  // If target date is in the past or today, it's not a future event
  if (target <= new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
    return { ok: false, message: 'A data do evento deve ser futura' }
  }

  let y = year - now.getFullYear()
  let m = month - (now.getMonth() + 1)
  let d = day - now.getDate()

  if (d < 0) {
    // Borrow days from previous month relative to target
    const prevMonth = new Date(year, month - 1, 0)
    d += prevMonth.getDate()
    m -= 1
  }
  if (m < 0) {
    m += 12
    y -= 1
  }

  return { ok: true, value: { years: y, months: m, days: d } }
}
