import { Icons } from '../icons'

export function MetricCard({ icon: Icon, label, value, hint }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
          <Icon size={22} />
        </div>
        <Icons.spark className="text-slate-300" size={18} />
      </div>
      <div className="text-2xl font-black text-slate-950">{value}</div>
      <div className="mt-1 text-sm font-semibold text-slate-600">{label}</div>
      <div className="mt-3 text-xs text-slate-400">{hint}</div>
    </div>
  )
}
