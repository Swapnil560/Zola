interface StepHeaderProps {
  icon: string
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

export default function StepHeader({ icon, title, description, gradientFrom, gradientTo }: StepHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-${gradientFrom}-500 to-${gradientTo}-600 rounded-full mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}