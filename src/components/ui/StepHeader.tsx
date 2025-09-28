interface StepHeaderProps {
  icon: string
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

export default function StepHeader({ icon, title, description, gradientFrom, gradientTo }: StepHeaderProps) {
  const getGradientClass = () => {
    const gradients = {
      'blue-purple': 'bg-gradient-to-r from-blue-500 to-purple-600',
      'green-teal': 'bg-gradient-to-r from-green-500 to-teal-600',
      'purple-pink': 'bg-gradient-to-r from-purple-500 to-pink-600',
      'orange-red': 'bg-gradient-to-r from-orange-500 to-red-600',
      'green-emerald': 'bg-gradient-to-r from-green-500 to-emerald-600'
    } as const
    const key = `${gradientFrom}-${gradientTo}` as keyof typeof gradients
    return gradients[key] || 'bg-gradient-to-r from-blue-500 to-purple-600'
  }
  
  return (
    <div className="text-center mb-8">
      <div className={`inline-flex items-center justify-center w-16 h-16 ${getGradientClass()} rounded-full mb-4`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}