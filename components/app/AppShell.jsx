import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

export function AppShell({ currentPath, title, children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dff9ff_0%,#f8fbff_34%,#ffffff_68%)] p-4 md:p-8">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-cyan-950/10">
        <div className="flex min-h-[780px]">
          <Sidebar currentPath={currentPath} />
          <main className="min-w-0 flex-1 bg-slate-50">
            <TopBar title={title} />
            <div className="p-5 md:p-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
