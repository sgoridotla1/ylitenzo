import { Link } from 'react-router-dom'
import React from 'react'
import cn from 'classnames'
import style from './style.module.css'

const Navigation = () => {
  return (
    <div className={cn(style.navigation, 'container')}>
      <ul>
        <li>
          <Link to={'/category/:id'}>T-shirts</Link>
        </li>
        <li>
          <Link to={'/category/:id'}>Hoodies</Link>
        </li>
        <li>
          <Link to={'/category/:id'}>Stuff</Link>
        </li>
        <li>
          <Link to={'/category/:id'}>Contacts</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
