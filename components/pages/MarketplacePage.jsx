import { providers } from '../../data/mockData'
import { ProviderCard } from '../ui/ProviderCard'

export function MarketplacePage() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {providers.map((provider) => (
        <ProviderCard key={provider.name} provider={provider} />
      ))}
    </div>
  )
}
