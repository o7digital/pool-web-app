export function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-[1.75rem] border border-cyan-100/70 bg-gradient-to-b from-white to-cyan-50/40 p-6 shadow-[0_20px_45px_-30px_rgba(2,38,72,0.55)] ring-1 ring-white transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_26px_55px_-28px_rgba(0,83,130,0.45)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-sky-100 text-cyan-700 ring-1 ring-cyan-200/70">
        <Icon size={23} />
      </div>
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{children}</p>
    </div>
  )
}
