import React from 'react';

interface ButtonProps {

}

const Button: React.FC<ButtonProps> = ({children}) => {
    return (
      <button className="py-2 px-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-full">
        {children}
      </button>
    );
}

export default Button;