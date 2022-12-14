import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

import reccly_logo from "../../assets/reccly_logo.png"

function MobileNav(props) {

    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    
  return (
        <nav className='homeScreen__nav__mobile'>
            <div className='mobile__hamburger'>
                <img className='homeScreen__logo' src={reccly_logo} alt='logo' />
                <GiHamburgerMenu className='hamburgerIcon' onClick={() => setHamburgerMenu(prev => !prev)} style={{display: hamburgerMenu ? "none" : "block"}} />
                <AiOutlineClose className='closeIcon' onClick={() => setHamburgerMenu(prev => !prev)} style={{display: hamburgerMenu ? "block" : "none"}} />
            </div>
            <ul className="mobile__navList" style={{display: hamburgerMenu ? "flex" : "none"}}>
                <li onClick={() => {
                    props.scrollToSection(props.home)
                    setHamburgerMenu(prev => !prev)
                }}>Home</li>
                <li onClick={() => {
                    props.scrollToSection(props.aboutUs)
                    setHamburgerMenu(prev => !prev)
                }}>O nas</li>
                <li>Portfolio</li>
                <li onClick={() => {
                    props.scrollToSection(props.cennik)
                    setHamburgerMenu(prev => !prev)
                }}>Cennik</li>
                <li>Wesele z klasą</li>
                <li>Kontakt</li>
                <li>Sprawdź termin</li>
            </ul>
        </nav>
  )
}

export default MobileNav