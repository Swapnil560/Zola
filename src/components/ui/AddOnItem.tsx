interface AddOnItemProps {
  icon: string
  title: string
  description: string
  price?: number
  isSelected?: boolean
  onToggle?: () => void
  isFree?: boolean
  bgColor?: string
  borderColor?: string
}

export default function AddOnItem({ 
  icon, 
  title, 
  description, 
  price, 
  isSelected = false, 
  onToggle, 
  isFree = false
}: AddOnItemProps) {
  const getContainerClass = () => {
    if (isFree) {
      return "bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6"
    }
    if (isSelected) {
      return "border-2 border-blue-300 bg-blue-50 rounded-xl p-6 transition-all duration-300"
    }
    return "border-2 border-gray-200 bg-white hover:border-gray-300 rounded-xl p-6 transition-all duration-300"
  }

  return (
    <div className={getContainerClass()}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {!isFree && (
            <input 
              type="checkbox" 
              checked={isSelected}
              onChange={onToggle}
              className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 mr-4" 
            />
          )}
          <div className={`w-12 h-12 ${isFree ? 'bg-green-100' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-4`}>
            <span className="text-2xl">{icon}</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
            <p className={`text-sm font-medium ${isFree ? 'text-green-700' : 'text-gray-600'}`}>{description}</p>
          </div>
        </div>
        <div className={`${isFree ? 'bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm' : 'text-blue-600 font-bold text-lg'}`}>
          {isFree ? 'FREE' : `+₹${price ?? 0}`}
        </div>
      </div>
    </div>
  )
}