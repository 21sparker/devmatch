import React, { useState } from 'react';


  
const Container: React.FC = ({children}) => {
  return (
      <nav className="pl-28 pr-28 grid grid-cols-2 border-b-2 border-green-300">
          {children}
      </nav>
  );
}

export default Container;