'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Icons } from '../icons'
import { FeatureCard } from '../ui/FeatureCard'
import { OverviewPage } from './OverviewPage'

export function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = useMemo(() => ['Product', 'Modules', 'Market', 'Pilot V1'], [])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dff9ff_0%,#f8fbff_34%,#ffffff_68%)] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
              <Icons.waves />
            </div>
            <div className="text-left">
              <div className="text-lg font-black">Pool Link</div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Multi-sensor SaaS</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="hover:text-cyan-700">
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/app" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white">
              Open app demo
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <Icons.close /> : <Icons.menu />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white p-5 md:hidden">
            <Link href="/app" className="block w-full rounded-full bg-slate-950 px-5 py-3 text-center font-bold text-white">
              Open app demo
            </Link>
          </div>
        )}
      </header>

      <section id="product" className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="absolute right-[-8rem] top-10 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-bold text-cyan-800">
              <Icons.check size={18} /> SaaS + IoT + AI for smart pool operations
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl">
              Smart pool management, powered by multi-sensor intelligence.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Pool Link centralizes water quality, maintenance, alerts, interventions and environmental performance in one
              scalable SaaS platform for owners, pool professionals and hospitality operators.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/app" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-7 py-4 font-bold text-white shadow-xl shadow-cyan-600/25">
                View product demo <Icons.arrow size={18} />
              </Link>
              <a href="#pilot-v1" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-slate-950 ring-1 ring-slate-200">
                Request pilot access
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {[
                ['4M+', 'pools in France'],
                ['B2B/B2C', 'hybrid market'],
                ['V1', 'pilot ready'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="text-2xl font-black">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-white/40 bg-white/90 shadow-2xl shadow-cyan-950/20">
              <div className="border-b border-slate-200 bg-slate-950 px-6 py-4 text-white">
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Pool Link OS</div>
                <div className="text-lg font-semibold">Live Operations Dashboard</div>
              </div>
              <div className="p-5">
                <OverviewPage />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:py-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 p-8 shadow-2xl shadow-slate-950/25 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Market problem</div>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Pool operations are still fragmented.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Manual logs, WhatsApp messages, scattered photos and untracked interventions create operational risk.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [Icons.shield, 'Owners', 'Simple health view, alerts, Pool Passport and trusted service history.'],
                [Icons.chart, 'Providers', 'Portfolio dashboard, interventions, reports, stocks and operations.'],
                [Icons.map, 'Hospitality', 'Multi-site supervision, compliance reports and operational standards.'],
              ].map(([Icon, title, detail]) => (
                <div key={title} className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                  <Icon className="mb-4 text-cyan-300" size={28} />
                  <h4 className="font-black text-white">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">Core modules</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">A complete product vision, delivered progressively.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Icons.gauge} title="Pool Health Dashboard">Real-time view of pH, chlorine, ORP, temperature, turbidity and swim-readiness.</FeatureCard>
            <FeatureCard icon={Icons.alert} title="Smart Alerts">Predictive alerts based on readings, thresholds and weather impact.</FeatureCard>
            <FeatureCard icon={Icons.qr} title="Pool Passport">Permanent digital identity attached to the pool, with QR code, history and transfer report.</FeatureCard>
            <FeatureCard icon={Icons.leaf} title="Eco-Score">Water, energy and chemical impact tracking with actionable recommendations.</FeatureCard>
            <FeatureCard icon={Icons.calendar} title="Provider Operations">Interventions, technicians, reports, checklists, photos and field workflows.</FeatureCard>
            <FeatureCard icon={Icons.radar} title="Multi-Sensor Data">Hardware-agnostic architecture designed for connected sensors and normalized data.</FeatureCard>
          </div>
        </div>
      </section>

      <section id="market" className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">Commercial scope</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Built for B2C, B2B and B2B2C deployment.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Private owners',
                'Pool service providers',
                'Hotels & residences',
                'Manufacturers & IoT partners',
                'Multi-site operators',
                'White label networks',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
                  <Icons.check className="text-emerald-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-cyan-950/10">
            <h3 className="text-2xl font-black text-slate-950">Pilot V1 roadmap</h3>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-cyan-50 p-5 ring-1 ring-cyan-100">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Step A</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-200">5–6 months</span>
                </div>
                <h4 className="text-xl font-black text-slate-950">Prototype + marketable V1</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">Demo, SaaS V1, first provider modules, Pool Passport foundation, Eco-Score V0, initial AI and multi-sensor architecture.</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Step B</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100 ring-1 ring-white/20">4–5 months</span>
                </div>
                <h4 className="text-xl font-black">Commercial industrialization</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">Advanced modules, marketplace, white label, internationalization, SaaS plans and commercial deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pilot-v1" className="px-5 pb-20 pt-8 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-600 via-sky-600 to-slate-950 p-8 text-white shadow-2xl shadow-cyan-950/30 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/20">
                <Icons.spark size={18} /> Pilot-ready product strategy
              </div>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">From prototype to marketable V1.</h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/app" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-slate-950">
                  Open SaaS demo <Icons.arrow size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
