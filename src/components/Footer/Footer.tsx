import { FaBehance, FaFacebook, FaInstagram } from 'react-icons/fa'

import React from 'react'
import cn from 'classnames'
import style from './style.module.scss'

const Footer = () => {
    return (
        <footer className={cn(style.footer, 'container')}>
            <div className={style.socialIcons}>
                <FaInstagram color="white" className={style.socialIcon} />
                <FaBehance color="white" className={style.socialIcon} />
                <FaFacebook color="white" className={style.socialIcon} />
            </div>
            <a href="mailto:ylitenzo@gmail.com" className={style.email}>
                ylitenzo@gmail.com
            </a>
        </footer>
    )
}

export default Footer
