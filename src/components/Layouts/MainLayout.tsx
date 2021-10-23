import React from 'react'
import cn from 'classnames'
import style from './style.module.css'

const Layout: React.FC = ({ children }) => {
  return <div className={style.mainLayout}>{children}</div>
}

export default Layout
