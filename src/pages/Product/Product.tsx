import React, { useState } from 'react'

import Button from '../../components/Button/Button'
import ProductImage from '../../components/ProductImage/ProductImage'
import Select from '../../components/Select'
import cn from 'classnames'
import stickSrc from './stick.png'
import style from './style.module.css'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

export default function Product() {
  const [, { add: addToCart }] = useCart()
  const params = useParams()
  const [price] = useState(200)
  const [currency] = useState('usd')

  return (
    <div className={cn(style.productWrapper, 'container')}>
      <ProductImage />
      <h1 className={style.name}>{params.id}</h1>
      <div className={style.price}>
        {price} {currency}
      </div>

      <div className={style.info}>
        <span>
          <Select
            label="Size"
            onSelect={() => {}}
            defaultValue="m"
            items={[
              {
                value: 'xs',
                name: 'xSmall',
              },
              {
                value: 's',
                name: 'Small',
              },
              {
                value: 'm',
                name: 'Medium',
              },
              {
                value: 'l',
                name: 'Large',
              },
              {
                value: 'xl',
                name: 'xLarge',
              },
            ]}
          />
        </span>

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
