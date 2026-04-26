import { Icons } from '../icons'
import { MetricCard } from '../ui/MetricCard'

export function AdminPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricCard icon={Icons.gauge} label="Users" value="2,480" hint="owners + providers" />
      <MetricCard icon={Icons.chart} label="Subscriptions" value="384" hint="active plans" />
      <MetricCard icon={Icons.alert} label="System health" value="99.9%" hint="platform uptime" />
      <MetricCard icon={Icons.qr} label="Passports" value="1,204" hint="active pool identities" />
      <MetricCard icon={Icons.radar} label="Sensor feeds" value="684" hint="normalized streams" />
      <MetricCard icon={Icons.shield} label="GDPR exports" value="Ready" hint="data portability" />
    </div>
  )
}
