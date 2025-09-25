interface InfoCardProps {
  icon: string
  message: string
  bgColor: string
  textColor: string
}

export default function InfoCard({ icon, message, bgColor, textColor }: InfoCardProps) {
  return (
    <div className={`${bgColor} rounded-xl p-4 mb-6`}>
      <div className={`flex items-center ${textColor}`}>
        <span className="mr-2">{icon}</span>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  )
}