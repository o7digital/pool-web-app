'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { alerts } from '../../data/mockData'
import { Icons } from '../icons'
import { FeatureCard } from '../ui/FeatureCard'

function HeroPreviewPanel() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/12 p-4 shadow-2xl shadow-cyan-950/35 backdrop-blur-xl md:p-6">
      <div className="mb-4 flex items-center justify-between border-b border-white/20 pb-4">
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-200">Pool Link OS</div>
          <div className="mt-1 text-lg font-black text-white">Live Operations Snapshot</div>
        </div>
        <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-100 ring-1 ring-emerald-300/40">Online</span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-950/45 p-4 ring-1 ring-white/20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/80">Pools monitored</div>
          <div className="mt-2 text-3xl font-black text-white">428</div>
          <div className="mt-1 text-xs text-cyan-50/75">Across FR / US / Canada</div>
        </div>
        <div className="rounded-2xl bg-slate-950/45 p-4 ring-1 ring-white/20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/80">Active alerts</div>
          <div className="mt-2 text-3xl font-black text-white">37</div>
          <div className="mt-1 text-xs text-cyan-50/75">12 predictive, 4 critical</div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {alerts.slice(0, 2).map((alert) => (
          <div key={alert} className="rounded-xl bg-white/10 p-3 text-xs font-semibold text-cyan-50 ring-1 ring-white/20">
            <Icons.alert className="mr-2 inline-flex text-amber-300" size={14} />
            {alert}
          </div>
        ))}
      </div>
    </div>
  )
}

export function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = useMemo(() => ['Product', 'Modules', 'Market', 'Pilot V1'], [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-[#f3fbff] text-slate-950">
      <section
        id="product"
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(110deg, rgba(2,12,30,0.9) 10%, rgba(2,29,58,0.68) 42%, rgba(2,12,30,0.82) 100%), url(/images/pool-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(103,232,249,0.24),transparent_46%)]" />
        <div className="absolute -bottom-40 left-[-10rem] h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/35 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 ring-1 ring-white/20 transition group-hover:bg-white/20">
                <Icons.waves />
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-white">Pool Link</div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Multi-sensor SaaS</div>
              </div>
            </Link>
            <nav className="hidden items-center gap-8 text-sm font-bold text-cyan-50/85 md:flex">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/app"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02]"
              >
                Open app demo
              </Link>
            </div>
            <button className="text-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <Icons.close /> : <Icons.menu />}
            </button>
          </div>
          {mobileOpen && (
            <div className="border-t border-white/10 bg-slate-950/85 p-5 md:hidden">
              <Link href="/app" className="block w-full rounded-full bg-cyan-300 px-5 py-3 text-center font-black text-slate-950">
                Open app demo
              </Link>
            </div>
          )}
        </header>

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-5 pb-16 pt-16 lg:grid-cols-[1fr_0.95fr] lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
              <Icons.check size={18} /> SaaS + IoT + AI for smart pool operations
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">
              Smart pool management, powered by multi-sensor intelligence.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-cyan-50/90 md:text-xl">
              Pool Link centralizes water quality, maintenance, alerts, interventions and environmental performance in one
              scalable SaaS platform for owners, pool professionals and hospitality operators.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 px-7 py-4 font-black text-slate-950 shadow-xl shadow-cyan-500/35 transition hover:-translate-y-0.5"
              >
                View product demo <Icons.arrow size={18} />
              </Link>
              <a
                href="#pilot-v1"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-4 font-bold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
              >
                Request pilot access
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {[
                ['4M+', 'pools in France'],
                ['B2B/B2C', 'hybrid market'],
                ['V1', 'pilot ready'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/20 bg-slate-950/35 p-4 shadow-lg backdrop-blur-md">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100/85">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <HeroPreviewPanel />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-slate-900 via-[#061b36] to-slate-900 p-8 shadow-2xl shadow-cyan-950/35 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Market problem</div>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Pool operations are still fragmented.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200/90">
                Manual logs, WhatsApp messages, scattered photos and untracked interventions create operational risk. Pool Link
                transforms this into a traceable, predictive and commercial operating system.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [Icons.shield, 'Owners', 'Simple health view, alerts, Pool Passport and trusted service history.'],
                [Icons.chart, 'Providers', 'Portfolio dashboard, interventions, reports, stocks and operations.'],
                [Icons.map, 'Hospitality', 'Multi-site supervision, compliance reports and operational standards.'],
              ].map(([Icon, title, detail]) => (
                <div key={title} className="rounded-3xl border border-white/15 bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur-sm">
                  <Icon className="mb-4 text-cyan-300" size={28} />
                  <h4 className="font-black text-white">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-200/85">{detail}</p>
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
            <p className="mt-5 text-lg leading-8 text-slate-600">A premium operational layer for residential, professional and hospitality pool ecosystems.</p>
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
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pool Link scales from pilot customers to full subscription operations, provider ecosystems and white-label distribution.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Private owners',
                'Pool service providers',
                'Hotels & residences',
                'Manufacturers & IoT partners',
                'Multi-site operators',
                'White label networks',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white p-4 font-bold text-slate-700 shadow-sm shadow-cyan-900/5 ring-1 ring-cyan-50">
                  <Icons.check className="text-emerald-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-cyan-950/10">
            <h3 className="text-2xl font-black text-slate-950">Pilot V1 roadmap</h3>
            <p className="mt-1 text-sm text-slate-500">Two-step delivery structure</p>
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a3155] via-cyan-700 to-slate-950 p-8 text-white shadow-2xl shadow-cyan-950/30 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/20">
                <Icons.spark size={18} /> Pilot-ready product strategy
              </div>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">From prototype to marketable V1.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50/95">A premium SaaS platform bridging sensor intelligence, operations, and commercial execution.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/app" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-slate-950 shadow-lg shadow-black/15">
                  Open SaaS demo <Icons.arrow size={18} />
                </Link>
                <a href="#product" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950/35 px-7 py-4 font-bold text-white ring-1 ring-white/25">
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
