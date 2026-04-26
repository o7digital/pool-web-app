import { AppShell } from '../../../components/app/AppShell'
import { InterventionsPage } from '../../../components/pages/InterventionsPage'

export default function InterventionsRoutePage() {
  return (
    <AppShell currentPath="/app/interventions" title="Interventions">
      <InterventionsPage />
    </AppShell>
  )
}
