'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Icons } from '../icons'
import { FeatureCard } from '../ui/FeatureCard'

const content = {
  fr: {
    nav: ['Produit', 'Modules', 'Marché', 'V1 pilote'],
    brandSub: 'SaaS multi-capteurs',
    openDemo: 'Ouvrir la démo app',
    badge: 'SaaS + IoT + IA pour la gestion intelligente des piscines',
    heroTitle: 'La gestion intelligente des piscines, pilotée par la donnée multi-capteurs.',
    heroSubtitle:
      'Pool Link centralise la qualité de l’eau, la maintenance, les alertes, les interventions et la performance environnementale dans une plateforme SaaS conçue pour les propriétaires, les piscinistes et les opérateurs hôteliers.',
    heroCta1: 'Voir la démo produit',
    heroCta2: 'Demander un accès pilote',
    stats: [
      ['4M+', 'piscines en France'],
      ['B2B/B2C', 'marché hybride'],
      ['V1', 'prête pour pilotes'],
    ],
    previewTitle: 'Aperçu opérationnel en temps réel',
    online: 'En ligne',
    poolsMonitored: 'Piscines suivies',
    activeAlerts: 'Alertes actives',
    across: 'France / USA / Canada',
    alertsHint: '12 prédictives, 4 critiques',
    previewAlerts: [
      'Vague de chaleur prévue dans 36h — le niveau de chlore doit être surveillé.',
      'La piscine Villa Azure est prête à accueillir des baigneurs aujourd’hui.',
    ],
    marketKicker: 'Problème marché',
    marketTitle: 'La gestion des piscines reste encore fragmentée.',
    marketText:
      'Carnets papier, échanges WhatsApp, photos dispersées et interventions non historisées créent un risque opérationnel. Pool Link transforme cette gestion dispersée en plateforme SaaS traçable, prédictive et commercialisable.',
    audiences: [
      ['Propriétaires', 'Vue santé simplifiée, alertes, Pool Passport et historique fiable.'],
      ['Piscinistes', 'Dashboard portefeuille, interventions, rapports, stocks et opérations terrain.'],
      ['Hôtellerie', 'Supervision multi-sites, rapports de conformité et standards opérationnels.'],
    ],
    modulesKicker: 'Modules clés',
    modulesTitle: 'Une vision produit complète, livrée progressivement.',
    modulesSub: 'Une couche opérationnelle premium pour les écosystèmes piscine résidentiels, professionnels et hôteliers.',
    modules: [
      ['Dashboard santé piscine', 'Vue en temps réel du pH, chlore, ORP, température, turbidité et niveau de baignabilité.'],
      ['Alertes intelligentes', 'Alertes prédictives basées sur les mesures, les seuils et l’impact météo.'],
      ['Pool Passport', 'Identité numérique permanente de la piscine, avec QR code, historique et rapport de transfert.'],
      ['Eco-Score', 'Suivi de l’eau, de l’énergie et des produits chimiques avec recommandations actionnables.'],
      ['Opérations piscinistes', 'Interventions, techniciens, rapports, checklists, photos et opérations terrain.'],
      ['Données multi-capteurs', 'Architecture indépendante des fabricants, conçue pour les capteurs connectés et la normalisation des données.'],
    ],
    scopeKicker: 'Portée commerciale',
    scopeTitle: 'Pensé pour un déploiement B2C, B2B et B2B2C.',
    scopeText:
      'Pool Link peut démarrer avec des clients pilotes, puis évoluer vers des abonnements, des outils piscinistes, des contrats hôteliers, une marketplace et une distribution en marque blanche.',
    scopeList: [
      'Propriétaires particuliers',
      'Piscinistes professionnels',
      'Hôtels & résidences',
      'Fabricants & partenaires IoT',
      'Gestionnaires multi-sites',
      'Réseaux en marque blanche',
    ],
    roadmapTitle: 'Roadmap V1 pilote',
    roadmapSub: 'Structure de livraison en deux étapes',
    stepA: 'Étape A',
    stepATitle: 'Prototype + V1 commercialisable',
    stepAText:
      'Démo, V1 SaaS, premiers modules piscinistes, base Pool Passport, Eco-Score V0, IA initiale et architecture multi-capteurs.',
    stepB: 'Étape B',
    stepBTitle: 'Industrialisation commerciale',
    stepBText:
      'Modules avancés, marketplace, marque blanche, internationalisation, plans SaaS et déploiement commercial.',
    finalBadge: 'Stratégie produit prête pour pilotes',
    finalTitle: 'Du prototype à la V1 commercialisable.',
    finalText:
      'Une plateforme SaaS premium qui relie intelligence capteurs, opérations terrain et exécution commerciale.',
    finalCta: 'Ouvrir la démo SaaS',
    backToTop: 'Retour en haut',
  },
  en: {
    nav: ['Product', 'Modules', 'Market', 'Pilot V1'],
    brandSub: 'Multi-sensor SaaS',
    openDemo: 'Open app demo',
    badge: 'SaaS + IoT + AI for smart pool operations',
    heroTitle: 'Smart pool management, powered by multi-sensor intelligence.',
    heroSubtitle:
      'Pool Link centralizes water quality, maintenance, alerts, interventions and environmental performance in one scalable SaaS platform for owners, pool professionals and hospitality operators.',
    heroCta1: 'View product demo',
    heroCta2: 'Request pilot access',
    stats: [
      ['4M+', 'pools in France'],
      ['B2B/B2C', 'hybrid market'],
      ['V1', 'ready for pilots'],
    ],
    previewTitle: 'Live Operations Snapshot',
    online: 'Online',
    poolsMonitored: 'Pools monitored',
    activeAlerts: 'Active alerts',
    across: 'France / US / Canada',
    alertsHint: '12 predictive, 4 critical',
    previewAlerts: [
      'Heat wave expected in 36h — chlorine levels should be monitored.',
      'Villa Azure Pool is ready for swimmers today.',
    ],
    marketKicker: 'Market problem',
    marketTitle: 'Pool operations are still fragmented.',
    marketText:
      'Manual logs, WhatsApp messages, scattered photos and untracked interventions create operational risk. Pool Link turns this fragmented management into a traceable, predictive and market-ready SaaS platform.',
    audiences: [
      ['Owners', 'Simplified health view, alerts, Pool Passport and trusted service history.'],
      ['Providers', 'Portfolio dashboard, interventions, reports, stocks and field operations.'],
      ['Hospitality', 'Multi-site supervision, compliance reports and operational standards.'],
    ],
    modulesKicker: 'Core modules',
    modulesTitle: 'A complete product vision, delivered progressively.',
    modulesSub: 'A premium operational layer for residential, professional and hospitality pool ecosystems.',
    modules: [
      ['Pool Health Dashboard', 'Real-time view of pH, chlorine, ORP, temperature, turbidity and swim-readiness.'],
      ['Smart Alerts', 'Predictive alerts based on readings, thresholds and weather impact.'],
      ['Pool Passport', 'Permanent digital identity attached to the pool, with QR code, history and transfer report.'],
      ['Eco-Score', 'Water, energy and chemical impact tracking with actionable recommendations.'],
      ['Provider Operations', 'Interventions, technicians, reports, checklists, photos and field workflows.'],
      ['Multi-Sensor Data', 'Hardware-agnostic architecture designed for connected sensors and normalized data.'],
    ],
    scopeKicker: 'Commercial scope',
    scopeTitle: 'Designed for B2C, B2B and B2B2C deployment.',
    scopeText:
      'Pool Link can start with pilot customers, then scale into subscriptions, provider tools, hospitality contracts, a marketplace and white-label distribution.',
    scopeList: [
      'Private owners',
      'Pool service providers',
      'Hotels & residences',
      'Manufacturers & IoT partners',
      'Multi-site operators',
      'White label networks',
    ],
    roadmapTitle: 'Pilot V1 roadmap',
    roadmapSub: 'Two-step delivery structure',
    stepA: 'Step A',
    stepATitle: 'Prototype + marketable V1',
    stepAText:
      'Demo, SaaS V1, first provider modules, Pool Passport foundation, Eco-Score V0, initial AI and multi-sensor architecture.',
    stepB: 'Step B',
    stepBTitle: 'Commercial industrialization',
    stepBText:
      'Advanced modules, marketplace, white label, internationalization, SaaS plans and commercial deployment.',
    finalBadge: 'Pilot-ready product strategy',
    finalTitle: 'From prototype to marketable V1.',
    finalText:
      'A premium SaaS platform that connects sensor intelligence, field operations and commercial execution.',
    finalCta: 'Open SaaS demo',
    backToTop: 'Back to top',
  },
}

function HeroPreviewPanel({ t }) {
  return (
    <div className="relative -mt-4 overflow-hidden rounded-[1.9rem] border border-white/45 bg-white/18 p-4 shadow-[0_38px_80px_-34px_rgba(2,16,38,0.9)] backdrop-blur-xl md:p-6 lg:mt-16">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/30 blur-2xl" />
      <div className="mb-4 flex items-center justify-between border-b border-white/25 pb-4">
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100">Pool Link OS</div>
          <div className="mt-1 text-lg font-black text-white">{t.previewTitle}</div>
        </div>
        <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-100 ring-1 ring-emerald-300/40">{t.online}</span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-950/62 p-4 ring-1 ring-white/22">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/80">{t.poolsMonitored}</div>
          <div className="mt-2 text-3xl font-black text-white">428</div>
          <div className="mt-1 text-xs text-cyan-50/80">{t.across}</div>
        </div>
        <div className="rounded-2xl bg-slate-950/62 p-4 ring-1 ring-white/22">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/80">{t.activeAlerts}</div>
          <div className="mt-2 text-3xl font-black text-white">37</div>
          <div className="mt-1 text-xs text-cyan-50/80">{t.alertsHint}</div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {t.previewAlerts.map((alert) => (
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
  const [lang, setLang] = useState('fr')
  const t = content[lang]

  const audienceIcons = useMemo(() => [Icons.shield, Icons.chart, Icons.map], [])
  const moduleIcons = useMemo(() => [Icons.gauge, Icons.alert, Icons.qr, Icons.leaf, Icons.calendar, Icons.radar], [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7ff] via-[#f4fbff] to-white text-slate-950">
      <section
        id="product"
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(115deg, rgba(8,24,43,0.9) 6%, rgba(15,39,64,0.74) 44%, rgba(11,31,51,0.84) 100%), radial-gradient(circle at 80% 14%, rgba(34,211,238,0.24), transparent 46%), radial-gradient(circle at 18% 78%, rgba(6,182,212,0.18), transparent 42%), url(/images/pool-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(103,232,249,0.14),transparent_38%)]" />
        <div className="absolute -bottom-40 left-[-8rem] h-96 w-96 rounded-full bg-cyan-300/16 blur-3xl" />

        <header className="sticky top-0 z-50 border-b border-white/20 bg-[#0b1f33]/40 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 ring-1 ring-white/30 transition group-hover:bg-white/20">
                <Icons.waves />
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-white">Pool Link</div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{t.brandSub}</div>
              </div>
            </Link>
            <nav className="hidden items-center gap-8 text-sm font-bold text-cyan-50/90 md:flex">
              {t.nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center overflow-hidden rounded-full border border-white/30 bg-white/10 p-1 text-xs font-black text-white">
                <button onClick={() => setLang('fr')} className={`rounded-full px-3 py-1 ${lang === 'fr' ? 'bg-white text-slate-950' : 'text-white'}`}>FR</button>
                <button onClick={() => setLang('en')} className={`rounded-full px-3 py-1 ${lang === 'en' ? 'bg-white text-slate-950' : 'text-white'}`}>EN</button>
              </div>
              <Link
                href="/app"
                className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-200 px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02]"
              >
                {t.openDemo}
              </Link>
            </div>
            <button className="text-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <Icons.close /> : <Icons.menu />}
            </button>
          </div>
          {mobileOpen && (
            <div className="space-y-3 border-t border-white/10 bg-slate-950/85 p-5 md:hidden">
              <div className="flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10 p-1 text-xs font-black text-white">
                <button onClick={() => setLang('fr')} className={`rounded-full px-3 py-1 ${lang === 'fr' ? 'bg-white text-slate-950' : 'text-white'}`}>FR</button>
                <button onClick={() => setLang('en')} className={`rounded-full px-3 py-1 ${lang === 'en' ? 'bg-white text-slate-950' : 'text-white'}`}>EN</button>
              </div>
              <Link href="/app" className="block w-full rounded-full bg-cyan-300 px-5 py-3 text-center font-black text-slate-950">
                {t.openDemo}
              </Link>
            </div>
          )}
        </header>

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.02fr_0.88fr] lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100/35 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
              <Icons.check size={18} /> {t.badge}
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">{t.heroTitle}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-100/95 md:text-xl">{t.heroSubtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-200 px-7 py-4 font-black text-slate-950 shadow-xl shadow-cyan-500/35 transition hover:-translate-y-0.5"
              >
                {t.heroCta1} <Icons.arrow size={18} />
              </Link>
              <a href="#pilot-v1" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/12 px-7 py-4 font-bold text-white ring-1 ring-white/35 backdrop-blur transition hover:bg-white/20">
                {t.heroCta2}
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {t.stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/25 bg-slate-950/38 p-4 shadow-lg backdrop-blur-md">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100/90">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-xl justify-self-end lg:max-w-none lg:pl-6">
            <HeroPreviewPanel t={t} />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#f4fbff]" />
      </section>

      <section className="px-5 py-14 md:py-22">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-slate-900 via-[#0a2748] to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{t.marketKicker}</div>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{t.marketTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200/90">{t.marketText}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.audiences.map(([title, detail], i) => {
                const Icon = audienceIcons[i]
                return (
                  <div key={title} className="rounded-3xl border border-white/20 bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur-sm">
                    <Icon className="mb-4 text-cyan-300" size={28} />
                    <h4 className="font-black text-white">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-200/85">{detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="bg-gradient-to-b from-[#f4fbff] to-white px-5 py-18 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">{t.modulesKicker}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">{t.modulesTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.modulesSub}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.modules.map(([title, text], i) => {
              const Icon = moduleIcons[i]
              return (
                <FeatureCard key={title} icon={Icon} title={title}>
                  {text}
                </FeatureCard>
              )
            })}
          </div>
        </div>
      </section>

      <section id="market" className="bg-gradient-to-b from-white to-[#f6fcff] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">{t.scopeKicker}</div>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">{t.scopeTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.scopeText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.scopeList.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-white p-4 font-bold text-slate-700 shadow-sm shadow-cyan-900/5 ring-1 ring-cyan-50">
                  <Icons.check className="text-emerald-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-cyan-950/10">
            <h3 className="text-2xl font-black text-slate-950">{t.roadmapTitle}</h3>
            <p className="mt-1 text-sm text-slate-500">{t.roadmapSub}</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-cyan-50 p-5 ring-1 ring-cyan-100">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">{t.stepA}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-200">5–6 months</span>
                </div>
                <h4 className="text-xl font-black text-slate-950">{t.stepATitle}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t.stepAText}</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">{t.stepB}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100 ring-1 ring-white/20">4–5 months</span>
                </div>
                <h4 className="text-xl font-black">{t.stepBTitle}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">{t.stepBText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pilot-v1" className="px-5 pb-20 pt-10 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0b3357] via-cyan-700 to-slate-950 p-8 text-white shadow-2xl shadow-cyan-950/30 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/20">
                <Icons.spark size={18} /> {t.finalBadge}
              </div>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">{t.finalTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50/95">{t.finalText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/app" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-slate-950 shadow-lg shadow-black/15">
                  {t.finalCta} <Icons.arrow size={18} />
                </Link>
                <a href="#product" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950/35 px-7 py-4 font-bold text-white ring-1 ring-white/25">
                  {t.backToTop}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
