import { useNavigate } from 'react-router-dom'

interface BackButtonProps {
  to?: string
  label?: string
}

export default function BackButton({ to = '/', label = '← Go Back' }: BackButtonProps) {
  const navigate = useNavigate()
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2" style={{paddingTop: '80px'}}>
      <button onClick={() => navigate(to)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">{label}</button>
    </div>
  )
}