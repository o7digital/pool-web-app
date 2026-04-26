import { StatusPill } from './StatusPill'

export function InterventionCard({ intervention }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-black">{intervention.type}</h3>
          <p className="text-slate-500">
            {intervention.pool} · {intervention.tech} · {intervention.time}
          </p>
        </div>
        <StatusPill status={intervention.status} />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        <div className="rounded-2xl bg-slate-50 p-4 text-sm font-bold">Checklist ready</div>
        <div className="rounded-2xl bg-slate-50 p-4 text-sm font-bold">Photos required</div>
        <div className="rounded-2xl bg-slate-50 p-4 text-sm font-bold">Report auto-generated</div>
        <div className="rounded-2xl bg-slate-50 p-4 text-sm font-bold">Offline mode</div>
      </div>
    </div>
  )
}
