import React from 'react';

interface CheckboxProps {
  label: string
}

const Checkbox: React.FC<CheckboxProps> = ({label}) => {
    return (
      <div className="mt-1">
        <label className="inline-flex items-center">
          <input type="checkbox" value={label} className="form-checkbox h-8 w-8" />
          <span className="ml-4 text-xl">{label}</span>
        </label>
      </div>
    );
}

export default Checkbox;