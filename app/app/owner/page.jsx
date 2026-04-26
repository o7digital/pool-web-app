import { AppShell } from '../../../components/app/AppShell'
import { OwnerPage } from '../../../components/pages/OwnerPage'

export default function OwnerDashboardPage() {
  return (
    <AppShell currentPath="/app/owner" title="Owner Dashboard">
      <OwnerPage />
    </AppShell>
  )
}
