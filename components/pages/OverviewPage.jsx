import { Icons } from '../icons'
import { alerts, pools } from '../../data/mockData'
import { MetricCard } from '../ui/MetricCard'
import { MiniChart } from '../ui/MiniChart'
import { PoolCard } from '../ui/PoolCard'

export function OverviewPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard icon={Icons.gauge} label="Pools monitored" value="428" hint="Across FR / US / Canada" />
        <MetricCard icon={Icons.alert} label="Active alerts" value="37" hint="12 predictive, 4 critical" />
        <MetricCard icon={Icons.leaf} label="Average Eco-Score" value="82/100" hint="Water + energy + chemistry" />
        <MetricCard icon={Icons.calendar} label="Today interventions" value="64" hint="89% completion forecast" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Portfolio health</h3>
          <p className="mt-1 text-sm text-slate-500">Live overview of the pool fleet.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {pools.map((pool) => (
              <PoolCard key={pool.name} pool={pool} />
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Smart alerts</h3>
          <div className="mt-5 space-y-3">
            {alerts.map((alert) => (
              <div key={alert} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                <Icons.alert className="mr-2 inline-flex text-amber-500" size={18} />
                {alert}
              </div>
            ))}
          </div>
          <div className="mt-5">
            <MiniChart />
          </div>
        </div>
      </div>
    </div>
  )
}
