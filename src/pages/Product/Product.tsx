import Button from '../../components/Button/Button'
import ProductImage from '../../components/ProductImage/ProductImage'
import React from 'react'
import cn from 'classnames'
import stickSrc from './stick.png'
import style from './style.module.css'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

export default function Product() {
  const [, { add: addToCart }] = useCart()
  const params = useParams()
  const price = '200'
  const currency = 'usd'

  return (
    <div className={cn(style.productWrapper, 'container')}>
      <ProductImage />
      <h1 className={style.name}>{params.id}</h1>
      <div className={style.price}>
        {price} {currency}
      </div>

      <div className={style.info}>
        <span> oversize </span>

        <ul>
          <li>- embroidered prints</li>
          <li>- cotton 90% synthetics 10%</li>
        </ul>
      </div>

      <Button
        style={{ width: 300, marginBottom: 50 }}
        onClick={() => addToCart('id')}
      >
        Add to cart
      </Button>

      <div className={style.stick}>
        <img src={stickSrc} alt="" />
      </div>
    </div>
  )
}
