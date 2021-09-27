import { CgMenu, CgShoppingCart } from 'react-icons/cg'
import { FaBars, FaShoppingCart } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import React from 'react'
import cn from 'classnames'
import style from './style.module.css'
import { useCart } from '../../hooks/useCart'

const Header = () => {
  const [{ itemsCount }, { setIsOpen }] = useCart()

  return (
    <header className={cn(style.header, 'container')}>
      <Link to="/" className={style.logo}>
        Ylitenzo
      </Link>
      <div className={style.search}>Search</div>
      {/* TODO: Make icpns larger on mobile */}
      <div className={style.cart} onClick={() => setIsOpen(true)}>
        <CgShoppingCart fill="#fff" size={30} />
        <span className={style.quantity}>{itemsCount}</span>
      </div>
      <button className={style.navButton}>
        <CgMenu size={30} />
      </button>
    </header>
  )
}

export default Header
