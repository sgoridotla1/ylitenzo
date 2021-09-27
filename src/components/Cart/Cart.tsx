import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'

import CartProduct from './CartProduct/CartProduct'
import { CgChevronLeft } from 'react-icons/cg'
import CheckoutForm from './CheckoutForm'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style.module.css'
import { useCart } from '../../hooks/useCart'
import { useDrag } from 'react-use-gesture'

// const left = {
//   bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
//   justifySelf: 'end',
// }
// const right = {
//   bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
//   justifySelf: 'start',
// }

export default function Cart() {
  const [{ isOpen, itemsCount }, { setIsOpen }] = useCart()

  // const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
  //   x: 0,
  //   scale: 1,
  //   ...left,
  // }))
  // const bind = useDrag(({ active, movement: [x] }) =>
  //   api.start({
  //     x: active ? x : 0,
  //     scale: active ? 1.1 : 1,
  //     ...(x < 0 ? left : right),
  //     immediate: (name) => active && name === 'x',
  //   })
  // )

  const shippingPrise = 20
  const [total, setTotal] = useState(150)
  const currency = 'usd'

  return ReactDOM.createPortal(
    <div className={cn(style.cart, { [style.opened]: isOpen })}>
      <div className={style.cartClose}>
        <span
          onClick={() => setIsOpen(false)}
          role="button"
          aria-label="Close cart"
          className={style.cartCloseIcon}
        >
          <CgChevronLeft size={35} />
        </span>
      </div>
      <div className={style.cartContent}>
        <h2 className={cn(style.cartTitle, style.cartSection)}>Your order:</h2>
        <div className={cn(style.productList, style.cartSection)}>
          {Array(itemsCount)
            .fill('')
            .map((_, key) => (
              // <animated.div
              //   {...bind()}
              //   // className={style.item}
              //   style={{ background: bg }}
              // >
              <CartProduct key={key} />
              // </animated.div>
              // </animated.div>
            ))}
        </div>
        <div className={style.cartTotal}>{`Total: ${total} ${currency}`}</div>
        <div className="checkoutForm">
          <CheckoutForm />
          <div
            className={style.checkoutSubTotal}
          >{`Subtotal: ${total} ${currency}`}</div>
          <div
            className={style.checkoutSubTotal}
          >{`Shipping: ${shippingPrise} ${currency}`}</div>
          <div className={style.checkoutTotal}>{`Total: ${
            total + shippingPrise
          } ${currency}`}</div>

          <button className={style.checkoutButton}>Checkout</button>
        </div>
      </div>
    </div>,
    document.getElementById('root') as HTMLDivElement
  )
}
