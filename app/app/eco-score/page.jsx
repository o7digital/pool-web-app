import { AppShell } from '../../../components/app/AppShell'
import { EcoScorePage } from '../../../components/pages/EcoScorePage'

export default function EcoScoreRoutePage() {
  return (
    <AppShell currentPath="/app/eco-score" title="Eco-Score">
      <EcoScorePage />
    </AppShell>
  )
}
