import React from 'react'
import cn from 'classnames'
import style from './style.module.scss'

const Navigation = () => {
    return (
        <div className={cn(style.navigation, 'container')}>
            <ul>
                <li>T-shirts</li>
                <li>Hoodies</li>
                <li>Stuff</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}

export default Navigation
