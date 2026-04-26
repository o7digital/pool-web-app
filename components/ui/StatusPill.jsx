import { cx } from '../../lib/cx'

export function StatusPill({ status }) {
  const style =
    status === 'Healthy'
      ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
      : status === 'Warning'
        ? 'bg-amber-50 text-amber-700 ring-amber-200'
        : status === 'Critical'
          ? 'bg-rose-50 text-rose-700 ring-rose-200'
          : 'bg-slate-50 text-slate-700 ring-slate-200'

  return <span className={cx('rounded-full px-3 py-1 text-xs font-bold ring-1', style)}>{status}</span>
}
