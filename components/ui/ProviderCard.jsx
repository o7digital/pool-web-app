import { Icons } from '../icons'

export function ProviderCard({ provider }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
        <Icons.shield />
      </div>
      <h3 className="text-xl font-black">{provider.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{provider.area}</p>
      <div className="mt-4 rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
        {provider.badge}
      </div>
      <div className="mt-5 flex justify-between text-sm font-bold text-slate-600">
        <span>Rating {provider.rating}</span>
        <span>{provider.jobs} jobs</span>
      </div>
      <button className="mt-6 w-full rounded-full bg-slate-950 px-5 py-3 font-bold text-white">Request quote</button>
    </div>
  )
}
