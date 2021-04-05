import React, { useState } from 'react';
import Container from './Container';

const linkClassName = "inline-block p-3 text-lg border-b-2";


const Navbar: React.FC = () => {
  return (
        <Container>
            <div id="left-nav">
                <ul>
                    <li className={linkClassName}><a href="#">Icon</a></li>
                </ul>            
            </div>
            <div id="right-nav" className="grid justify-items-stretch">
                <ul className="justify-self-end space-x-10">
                    <li className={linkClassName}>
                        <a className="mb-2" href="#">Devs</a>
                    </li>
                    <li className={linkClassName}>
                        <a href="#" className="text-primary">Login</a>
                    </li>
                </ul>
            </div>
        </Container>
  );
}

export default Navbar;