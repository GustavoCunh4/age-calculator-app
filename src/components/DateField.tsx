import { forwardRef, InputHTMLAttributes } from 'react'

type Props = {
  id: string
  label: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const DateField = forwardRef<HTMLInputElement, Props>(function DateField(
  { id, label, error, ...rest },
  ref
) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs tracking-[0.2em] text-slate-600 font-semibold">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        inputMode="numeric"
        className={`border rounded-lg px-4 py-3 text-lg font-semibold outline-none focus:ring-2 focus:ring-primary/40 ${
          error ? 'border-red-500' : 'border-slate-200'
        }`}
        {...rest}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  )
})

export type DateFormValues = {
  day: string
  month: string
  year: string
}
