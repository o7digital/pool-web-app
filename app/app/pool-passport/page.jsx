import { AppShell } from '../../../components/app/AppShell'
import { PoolPassportPage } from '../../../components/pages/PoolPassportPage'

export default function PoolPassportRoutePage() {
  return (
    <AppShell currentPath="/app/pool-passport" title="Pool Passport">
      <PoolPassportPage />
    </AppShell>
  )
}
