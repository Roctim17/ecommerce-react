import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="">
            <nav>
                <img src="../logo.svg" alt="jhk;l" />
                <div className="menu">
                    <a href="#home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Services">Services</a>
                    <a href="#Gallery">Gallery</a>
                    <a href="#Contact">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;