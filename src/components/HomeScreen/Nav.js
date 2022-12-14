import React, { useState } from 'react'
import {RiArrowDownSLine} from "react-icons/ri"

import reccly_logo from "../../assets/reccly_logo.png"

function Nav(props) {

    const [dropDownMenu, setDropDownMenu] = useState(false)

    const toggleDropDownMenu = () => {
        setDropDownMenu(prev => !prev)
    }

  return (
    <nav ref={props.home} className='homeScreen__nav'>
        <img className='homeScreen__logo' src={reccly_logo} alt='logo' />
          <ul>
            <li><span onClick={() => props.scrollToSection(props.home)}>Home</span><span className='homeScreen__nav__arrowDown'><RiArrowDownSLine onClick={toggleDropDownMenu} style={{color: "#F7012F"}} /></span>
              <div onClick={toggleDropDownMenu} className='new'>NEW</div>
              <div className='homeScreen__nav__dropDownMenu' style={{display: dropDownMenu ? "flex" : "none" }}>
                <div>Main</div>
                <div>Web Development</div>
                <div>Managment</div>
              </div>
            </li>
            <li onClick={() => props.scrollToSection(props.aboutUs)}>O nas</li>
            <li>Portfolio</li>
            <li onClick={() => props.scrollToSection(props.cennik)}>Cennik</li>
            <li>Wesele z klasą</li>
            <li>Kontakt</li>
            <li className='homeScreen__nav__redButton'>Sprawdź termin</li>
          </ul>
    </nav>
  )
}

export default Nav