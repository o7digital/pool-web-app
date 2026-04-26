import { StatusPill } from './StatusPill'
import { SensorCard } from './SensorCard'

export function PoolCard({ pool }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-black text-slate-950">{pool.name}</h4>
          <p className="text-sm text-slate-500">
            {pool.location} · {pool.owner}
          </p>
        </div>
        <StatusPill status={pool.status} />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <SensorCard label="pH" value={pool.ph} status={pool.status === 'Critical' ? 'danger' : 'ok'} />
        <SensorCard
          label="Chlorine"
          value={pool.chlorine}
          status={pool.status === 'Warning' ? 'warn' : pool.status === 'Critical' ? 'danger' : 'ok'}
        />
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
        <span className="text-sm font-bold text-slate-600">Health score</span>
        <span className="text-xl font-black text-cyan-700">{pool.score}%</span>
      </div>
    </div>
  )
}
