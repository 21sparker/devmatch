import React, { useState } from 'react'

interface TextInputProps {
  placeholder: string,
  type?: 'email' | 'password' | 'text',
  name: string,
  id?: string,


}

const TextInput: React.FC<TextInputProps> = ({ children, type='text', placeholder, name, id }) => {
  const [value, setValue] = useState('');

  return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        id={id ? id : ''}
        onChange={e => setValue(e.target.value)}
        className="bg-secondary min-w-full h-10 rounded-xl p-3 text-lg text-black placeholder-gray focus:outline-none"
        />
  );
}

export default TextInput;