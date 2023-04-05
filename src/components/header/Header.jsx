import React, { useState } from 'react'
import css from './Header.module.css'
import Logo from '../../img/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'

const Header = () => {
  const[showMenu, setShowMenu] =useState(true)
  const toggleMenu = () =>{
    setShowMenu((showMenu) => !showMenu)
  }
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bars}>
          <GoThreeBars onClick={toggleMenu}/>
        </div>
          <ul className={css.menu} style={{display: showMenu? "inherit" : "none"}}>
            <li>Collection</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        
        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  )
}

export default Header