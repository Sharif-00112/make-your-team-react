import React from 'react';
import './Header.css'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />
const Header = () => {
    return (
        <div>
            <h2 className='p-3 mb-2 bg-primary text-white'>Hello React! {element}</h2>
            
        </div>
    );
};

export default Header;