import { AppShell } from '../../../components/app/AppShell'
import { AdminPage } from '../../../components/pages/AdminPage'

export default function AdminRoutePage() {
  return (
    <AppShell currentPath="/app/admin" title="Admin">
      <AdminPage />
    </AppShell>
  )
}
