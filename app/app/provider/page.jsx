import { AppShell } from '../../../components/app/AppShell'
import { ProviderPage } from '../../../components/pages/ProviderPage'

export default function ProviderDashboardPage() {
  return (
    <AppShell currentPath="/app/provider" title="Provider Dashboard">
      <ProviderPage />
    </AppShell>
  )
}
