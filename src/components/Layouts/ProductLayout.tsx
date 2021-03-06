import React from 'react'
import cn from 'classnames'
import style from './style.module.css'
const ProductLayout: React.FC = ({ children }) => {
  return <div className={cn(style.productLayout, 'container')}>{children}</div>
}

export default ProductLayout
