import { pools } from '../../data/mockData'
import { Icons } from '../icons'
import { MetricCard } from '../ui/MetricCard'
import { StatusPill } from '../ui/StatusPill'

export function ProviderPage() {
  const workload = [
    ['Marc D.', 82],
    ['Sarah L.', 64],
    ['John P.', 71],
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard icon={Icons.chart} label="Managed pools" value="128" hint="Active clients" />
        <MetricCard icon={Icons.alert} label="Urgent alerts" value="7" hint="Critical alerts" />
        <MetricCard icon={Icons.calendar} label="Today jobs" value="22" hint="8 completed" />
        <MetricCard icon={Icons.gauge} label="MRR" value="€18.4K" hint="Subscription revenue" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Pool portfolio</h3>
          <div className="mt-5 space-y-3">
            {pools.map((pool) => (
              <div key={pool.name} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div>
                  <div className="font-black">{pool.name}</div>
                  <div className="text-sm text-slate-500">{pool.location}</div>
                </div>
                <StatusPill status={pool.status} />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Technician workload</h3>
          <div className="mt-5 space-y-4">
            {workload.map(([tech, value]) => (
              <div key={tech}>
                <div className="flex justify-between text-sm font-bold">
                  <span>{tech}</span>
                  <span>{value}%</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-slate-100">
                  <div className="h-3 rounded-full bg-cyan-600" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
