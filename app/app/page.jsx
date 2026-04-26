import { AppShell } from '../../components/app/AppShell'
import { OverviewPage } from '../../components/pages/OverviewPage'

export default function DemoOverviewPage() {
  return (
    <AppShell currentPath="/app" title="Overview">
      <OverviewPage />
    </AppShell>
  )
}
