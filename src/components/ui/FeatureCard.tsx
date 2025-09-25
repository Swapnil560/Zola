interface FeatureCardProps {
  icon: string
  text: string
}

export default function FeatureCard({ icon, text }: FeatureCardProps) {
  return (
    <div className="flex items-center px-4 py-4 rounded-lg bg-gray-300 text-gray-700">
      <span className="mr-3 text-3xl">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}