import { Link } from 'react-router-dom'
import React from 'react'
import productImage from './product.png'
import style from './style.module.css'
import { useCart } from '../../hooks/useCart'

const ProductCard = () => {
  const [{ currency }] = useCart()

  return (
    <Link to="/product/WORLD ON FIRE Sweatshirt" className={style.productCard}>
      <div className={style.image}>
        <img src={productImage} alt="" />
      </div>

      <div className={style.name}>WORLD ON FIRE Sweatshirt</div>
      <div className={style.price}>
        {(Math.random() * 100).toFixed(0)} {currency}
      </div>
    </Link>
  )
}

export default ProductCard
