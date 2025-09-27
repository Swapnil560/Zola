

interface FormInputProps {
  label: string
  type: 'date' | 'select'
  value: string
  onChange: (value: string) => void
  options?: string[]
  focusColor?: string
}

export default function FormInput({ label, type, value, onChange, options, focusColor = 'blue' }: FormInputProps) {

  const focusClasses = `focus:border-${focusColor}-500 focus:ring-2 focus:ring-${focusColor}-200`
  


  const formatDateInput = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 4) return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`
  }
  
  return (
    <div className="space-y-2">
      <label className="block text-gray-700 text-sm font-semibold mb-2">{label}</label>
      <div className="relative">
        {type === 'date' ? (
          <input 
            type="text"
            value={value}
            onChange={(e) => onChange(formatDateInput(e.target.value))}
            placeholder="DD/MM/YYYY"
            maxLength={10}
            className={`w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 ${focusClasses} transition-all duration-300`}
          />
        ) : (
          <select 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 ${focusClasses} transition-all duration-300`}
          >
            {options?.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  )
}