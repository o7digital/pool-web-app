import { cx } from '../../lib/cx'

export function SensorCard({ label, value, status = 'ok' }) {
  const color = status === 'ok' ? 'bg-emerald-500' : status === 'warn' ? 'bg-amber-500' : 'bg-rose-500'

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</span>
        <span className={cx('h-2.5 w-2.5 rounded-full', color)} />
      </div>
      <div className="mt-2 text-xl font-black text-slate-950">{value}</div>
    </div>
  )
}
