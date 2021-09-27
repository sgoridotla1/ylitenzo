import { CgChevronLeft, CgMathMinus, CgMathPlus } from 'react-icons/cg'
import React, { useState } from 'react'

import productImage from '../../ProductCard/product.png'
import style from './style.module.css'

const CartProduct = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className={style.product}>
      <img src={productImage} alt="" className={style.productImage} />
      <div className={style.productInfo}>
        <div className={style.productName}>WORLD ON FIRE Sweatshirt</div>
        <div className={style.priceBar}>
          <div className={style.quantity}>
            <span
              className={style.quantityControl}
              onClick={() =>
                setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
              }
            >
              <CgMathMinus />
            </span>
            <span className={style.quantityValue}>{quantity}</span>
            <span
              className={style.quantityControl}
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <CgMathPlus />
            </span>
          </div>
          <div className={style.productPrice}>{`${(quantity * 65).toFixed(
            2
          )} usd`}</div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
