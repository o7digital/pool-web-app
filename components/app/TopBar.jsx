import Link from 'next/link'

export function TopBar({ title }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Pool Link App</div>
        <h2 className="text-xl font-black text-slate-950">{title}</h2>
      </div>
      <Link href="/" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white">
        Back to landing
      </Link>
    </div>
  )
}
