import { AppShell } from '../../../components/app/AppShell'
import { MarketplacePage } from '../../../components/pages/MarketplacePage'

export default function MarketplaceRoutePage() {
  return (
    <AppShell currentPath="/app/marketplace" title="Marketplace">
      <MarketplacePage />
    </AppShell>
  )
}
