interface Feature {
  name: string
  desc: string
}

interface FeatureListProps {
  features: Feature[]
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-6">
      {features.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="w-3 h-3 rounded-full mr-4 mt-2 flex-shrink-0" style={{backgroundColor: '#00473E'}}></span>
          <div className="flex-1">
            <span className="font-semibold block text-gray-900 mb-1">{item.name}</span>
            <span className="text-sm text-gray-600 leading-relaxed">{item.desc}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}