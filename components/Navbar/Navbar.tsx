import React, { useState } from 'react';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons'

const linkClassName = "inline-block p-3 text-xl font-semibold";

const Navbar: React.FC = () => {
  return (
        <Container>
            <div id="left-nav">
                <ul>
                    <li className={linkClassName}><a href="#"><FontAwesomeIcon icon={faPeopleArrows} /></a></li>
                </ul>            
            </div>
            <div id="right-nav" className="grid justify-items-stretch">
                <ul className="justify-self-end space-x-10">
                    <li className={linkClassName}>
                        <a className="border-b-2" href="#">Devs</a>
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