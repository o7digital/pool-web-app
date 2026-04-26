import { interventions } from '../../data/mockData'
import { InterventionCard } from '../ui/InterventionCard'

export function InterventionsPage() {
  return (
    <div className="space-y-4">
      {interventions.map((intervention) => (
        <InterventionCard key={`${intervention.pool}-${intervention.type}`} intervention={intervention} />
      ))}
    </div>
  )
}
