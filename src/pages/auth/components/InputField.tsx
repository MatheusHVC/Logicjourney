import { ReactNode } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  icon: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function InputField({
  label,
  type,
  name,
  placeholder,
  icon,
  value,
  onChange,
  required
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}