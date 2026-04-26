import { Icons } from '../icons'

export function PoolPassportPage() {
  const items = [
    'Chemical history since account creation',
    'Equipment registry: pump, filter, robot, heater',
    'Intervention history with photos and products',
    'Read-only access for buyer, notary or agent',
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-5xl text-slate-950">
          <Icons.qr size={56} />
        </div>
        <h3 className="mt-6 text-3xl font-black">Pool Passport</h3>
        <p className="mt-3 text-slate-300">Permanent digital identity attached to the pool, not only the owner.</p>
        <button className="mt-6 rounded-full bg-cyan-500 px-5 py-3 font-bold">Generate transfer report</button>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item} className="rounded-3xl bg-white p-5 font-bold text-slate-700 shadow-sm">
            <Icons.check className="mr-3 inline-flex text-emerald-500" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
