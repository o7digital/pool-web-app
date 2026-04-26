import { pools } from '../../data/mockData'
import { Icons } from '../icons'
import { MetricCard } from '../ui/MetricCard'
import { MiniChart } from '../ui/MiniChart'

export function OwnerPage() {
  const pool = pools[0]

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] bg-gradient-to-br from-cyan-600 to-slate-950 p-7 text-white">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Owner workspace</div>
        <h3 className="mt-2 text-3xl font-black">{pool.name}</h3>
        <p className="mt-2 text-cyan-50">Swim-ready today. Weather impact forecast: chlorine to monitor in 36h.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard icon={Icons.gauge} label="Health" value="94%" hint="Ready for swimmers" />
        <MetricCard icon={Icons.drop} label="pH" value="7.3" hint="Optimal range" />
        <MetricCard icon={Icons.radar} label="ORP" value="715 mV" hint="Healthy oxidation" />
        <MetricCard icon={Icons.leaf} label="Eco" value="88/100" hint="Above average" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">7-day trend</h3>
          <MiniChart />
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Recommended actions</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800">No immediate correction required.</div>
            <div className="rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-800">Heat wave expected — monitor chlorine level.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
