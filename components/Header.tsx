import React from 'react';

interface HeaderProps {
  size: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
  center?: boolean
}

const Header: React.FC<HeaderProps> = ({center = false, size, children}) => {
    return (
        <div className={`${center ? 'flex justify-center' : ''} text-${size}`}>{children}</div>
    );
}

export default Header;