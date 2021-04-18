import React, { useState } from 'react'

  
const Container: React.FC = ({children}) => {
  return (
      <nav className="pl-20 pr-20 grid grid-cols-2 border-b-2 border-green-300">
          {children}
      </nav>
  );
}

export default Container;