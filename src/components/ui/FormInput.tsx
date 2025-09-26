import { useState } from 'react'

interface FormInputProps {
  label: string
  type: 'date' | 'select'
  value: string
  onChange: (value: string) => void
  options?: string[]
  focusColor?: string
}

export default function FormInput({ label, type, value, onChange, options, focusColor = 'blue' }: FormInputProps) {
  const [useCalendar, setUseCalendar] = useState(false)
  const focusClasses = `focus:border-${focusColor}-500 focus:ring-2 focus:ring-${focusColor}-200`
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700 text-sm font-semibold">{label}</label>
        {type === 'date' && (
          <div className="sm:hidden flex items-center gap-2">
            <span className="text-xs text-gray-500">Calendar</span>
            <button 
              onClick={() => setUseCalendar(!useCalendar)}
              className={`w-10 h-6 rounded-full transition-colors ${useCalendar ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${useCalendar ? 'translate-x-5' : 'translate-x-1'}`}></div>
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        {type === 'date' ? (
          (useCalendar || window.innerWidth >= 640) ? (
            <input 
              type="date" 
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className={`w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 ${focusClasses} transition-all duration-300`}
              min={new Date().toISOString().split('T')[0]}
            />
          ) : (
            <input 
              type="text" 
              placeholder="dd-mm-yyyy"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className={`w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 ${focusClasses} transition-all duration-300`}
            />
          )
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