export function MiniChart() {
  const bars = [45, 62, 58, 76, 69, 83, 88, 72, 91, 86, 94, 90]

  return (
    <div className="flex h-28 items-end gap-2 rounded-2xl bg-slate-50 p-4">
      {bars.map((h, i) => (
        <div key={i} className="flex flex-1 items-end">
          <div className="w-full rounded-t-xl bg-gradient-to-t from-cyan-600 to-sky-300" style={{ height: `${h}%` }} />
        </div>
      ))}
    </div>
  )
}
