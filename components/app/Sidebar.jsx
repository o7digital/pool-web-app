import Link from 'next/link'
import { Icons } from '../icons'
import { cx } from '../../lib/cx'

const items = [
  { href: '/app', icon: Icons.gauge, label: 'Overview' },
  { href: '/app/owner', icon: Icons.drop, label: 'Owner Dashboard' },
  { href: '/app/provider', icon: Icons.chart, label: 'Provider Dashboard' },
  { href: '/app/pool-passport', icon: Icons.qr, label: 'Pool Passport' },
  { href: '/app/eco-score', icon: Icons.leaf, label: 'Eco-Score' },
  { href: '/app/interventions', icon: Icons.calendar, label: 'Interventions' },
  { href: '/app/marketplace', icon: Icons.map, label: 'Marketplace' },
  { href: '/app/admin', icon: Icons.shield, label: 'Admin' },
]

export function Sidebar({ currentPath }) {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-slate-950 p-5 text-white lg:block">
      <Link href="/" className="mb-7 flex items-center gap-3 text-left">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500 text-white">
          <Icons.waves />
        </div>
        <div>
          <div className="font-black">Pool Link</div>
          <div className="text-xs text-cyan-200">SaaS demo app</div>
        </div>
      </Link>
      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon
          const active = currentPath === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                'flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition',
                active ? 'bg-white text-cyan-700' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              )}
            >
              <Icon size={18} /> {item.label}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
