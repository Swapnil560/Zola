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
  
  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length >= 2) value = value.substring(0, 2) + '/' + value.substring(2)
    if (value.length >= 5) value = value.substring(0, 5) + '/' + value.substring(5, 9)
    onChange(value)
  }
  
  return (
    <div className="space-y-2">
      <label className="block text-gray-700 text-sm font-semibold mb-2">{label}</label>
      <div className="relative">
        {type === 'date' ? (
          <input 
            type={window.innerWidth >= 640 ? "date" : "text"}
            placeholder={window.innerWidth >= 640 ? "" : "dd/mm/yyyy"}
            value={value}
            onChange={window.innerWidth >= 640 ? (e) => onChange(e.target.value) : handleDateInput}
            className={`w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 ${focusClasses} transition-all duration-300`}
            min={window.innerWidth >= 640 ? new Date().toISOString().split('T')[0] : undefined}
            maxLength={window.innerWidth >= 640 ? undefined : 10}
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