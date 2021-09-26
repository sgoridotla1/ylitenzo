import { FaBars, FaShoppingCart } from 'react-icons/fa'

import React from 'react'
import cn from 'classnames'
import style from './style.module.scss'

const Header = () => {
    return (
        <header className={cn(style.header, 'container')}>
            <a href="" className={style.logo}>
                Ylitenzo
            </a>
            <div className={style.search}>Search</div>
            <div className={style.cart}>
                <FaShoppingCart />
            </div>
            <button className={style.navButton}>
                <FaBars />
            </button>
        </header>
    )
}

export default Header
