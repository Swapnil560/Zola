interface SpecCardProps {
  icon: string
  value: string
  label: string
}

export default function SpecCard({ icon, value, label }: SpecCardProps) {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center">
      <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
        <img src={icon} alt={label} className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)'}} />
      </div>
      <h3 className="text-xl font-bold text-black mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  )
}