export const pools = [
  { name: 'Villa Azure Pool', location: 'Saint-Tropez', status: 'Healthy', score: 94, ph: '7.3', chlorine: '2.1 ppm', temperature: '28.4°C', orp: '715 mV', eco: 88, owner: 'Private Owner' },
  { name: 'Boutique Hotel Main Pool', location: 'Nice', status: 'Warning', score: 76, ph: '7.8', chlorine: '1.2 ppm', temperature: '30.1°C', orp: '642 mV', eco: 71, owner: 'Hospitality' },
  { name: 'Miami Residence Pool', location: 'Miami', status: 'Critical', score: 61, ph: '8.1', chlorine: '0.7 ppm', temperature: '31.8°C', orp: '598 mV', eco: 64, owner: 'Premium Owner' },
  { name: 'Alpine Spa Pool', location: 'Chambéry', status: 'Healthy', score: 91, ph: '7.2', chlorine: '2.0 ppm', temperature: '29.2°C', orp: '701 mV', eco: 84, owner: 'Residence' },
]

export const providers = [
  { name: 'Aqua Pro Riviera', area: 'French Riviera', rating: '4.9', badge: 'Gold Certified', jobs: 124 },
  { name: 'Blue Service Pool', area: 'Paris Region', rating: '4.7', badge: 'Silver Certified', jobs: 87 },
  { name: 'Miami Pool Experts', area: 'Florida', rating: '4.8', badge: 'Gold Certified', jobs: 156 },
]

export const interventions = [
  { pool: 'Villa Azure Pool', tech: 'Marc D.', type: 'Weekly check', status: 'Scheduled', time: 'Today 14:30' },
  { pool: 'Boutique Hotel Main Pool', tech: 'Sarah L.', type: 'pH correction', status: 'Urgent', time: 'Today 16:00' },
  { pool: 'Miami Residence Pool', tech: 'John P.', type: 'Leak inspection', status: 'Pending', time: 'Tomorrow 09:00' },
]

export const alerts = [
  'Heat wave expected in 36h — chlorine levels should be monitored.',
  'Villa Azure Pool is ready for swimmers today.',
  'Possible water loss detected on Miami Residence Pool.',
]
