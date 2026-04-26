import { Icons } from '../icons'
import { MetricCard } from '../ui/MetricCard'
import { MiniChart } from '../ui/MiniChart'

export function EcoScorePage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard icon={Icons.leaf} label="Global Eco-Score" value="88/100" hint="Excellent" />
        <MetricCard icon={Icons.drop} label="Water" value="-22%" hint="vs similar pools" />
        <MetricCard icon={Icons.spark} label="Energy" value="-14%" hint="optimized filtration" />
        <MetricCard icon={Icons.alert} label="Waste alerts" value="2" hint="this season" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Environmental trend</h3>
          <MiniChart />
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black">Recommendations</h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-cyan-50 p-4 text-sm font-bold text-cyan-900">Shift filtration to off-peak hours.</div>
            <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-900">Cover pool overnight to reduce evaporation.</div>
            <div className="rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-900">Local drought watch: monitor refill frequency.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
