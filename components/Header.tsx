import React from 'react';

interface HeaderProps {
  size: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
}

const Header: React.FC<HeaderProps> = ({size, children}) => {
    return (
        <div className={`text-${size}`}>{children}</div>
    );
}

export default Header;