interface InclusionItem {
  text: string
}

interface InclusionCardProps {
  title: string
  items: InclusionItem[]
  type: 'included' | 'excluded'
}

export default function InclusionCard({ title, items, type }: InclusionCardProps) {
  const isIncluded = type === 'included'
  const iconColor = isIncluded ? 'text-green-600' : 'text-red-600'
  const bgColor = isIncluded ? 'bg-green-200' : 'bg-red-200'
  const titleColor = isIncluded ? 'text-green-700' : 'text-red-700'
  const icon = isIncluded ? '✓' : '✗'

  return (
    <div className="p-4 sm:p-6 rounded-lg shadow" style={{backgroundColor: '#E9E9E9'}}>
      <h3 className={`font-semibold mb-4 ${titleColor} flex items-center`}>
        <span className={`w-6 h-6 ${bgColor} rounded-full flex items-center justify-center ${iconColor} text-xs mr-3`}>{icon}</span>
        {title}
      </h3>
      <ul className="text-gray-700 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            <span className={`${iconColor} mr-3`}>{icon}</span>
            <span className="ml-2">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}