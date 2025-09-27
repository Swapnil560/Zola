

interface FormInputProps {
  label: string
  type: 'date' | 'select' | 'text'
  value: string
  onChange: (value: string) => void
  options?: string[]
  focusColor?: string
  placeholder?: string
}

export default function FormInput({ label, type, value, onChange, options, focusColor = 'blue', placeholder }: FormInputProps) {

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
          <div className="relative">
            <input 
              type="text"
              value={value}
              onChange={(e) => onChange(formatDateInput(e.target.value))}
              placeholder="dd-mm-yyyy"
              maxLength={10}
              className={`w-full border-2 border-gray-200 rounded-xl p-4 pr-12 text-gray-900 ${focusClasses} transition-all duration-300`}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <input 
                type="date"
                onChange={(e) => {
                  if (e.target.value) {
                    const date = new Date(e.target.value)
                    const day = String(date.getDate()).padStart(2, '0')
                    const month = String(date.getMonth() + 1).padStart(2, '0')
                    const year = date.getFullYear()
                    onChange(`${day}/${month}/${year}`)
                  }
                }}
                className="absolute opacity-0 w-6 h-6 cursor-pointer"
              />
              <button 
                type="button"
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                📅
              </button>
            </div>
          </div>
        ) : type === 'select' ? (
          <select 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 ${focusClasses} transition-all duration-300`}
          >
            {options?.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input 
            list={`${label.toLowerCase().replace(/\s+/g, '-')}-options`}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || `Enter ${label.toLowerCase()}`}
            className={`w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 ${focusClasses} transition-all duration-300`}
          />
        )}
      </div>
      {type === 'text' && options && (
        <datalist id={`${label.toLowerCase().replace(/\s+/g, '-')}-options`}>
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      )}
    </div>
  )
}