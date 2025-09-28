interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const baseStyles = 'font-medium rounded-lg transition-all duration-200 hover:scale-105'

const variants = {
  primary: 'bg-[#00473E] text-white hover:bg-[#003530]',
  secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  accent: 'bg-[#89DAD0] text-white hover:bg-[#6BB6B0]'
}

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-6 py-4 text-lg'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  
  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}