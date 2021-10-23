import React, { useEffect, useState } from 'react'

import CartProduct from './CartProduct/CartProduct'
import { CgChevronLeft } from 'react-icons/cg'
import CheckoutForm from './CheckoutForm'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import style from './style.module.css'
import { useCart } from '../../hooks/useCart'

export default function Cart() {
  const [{ isOpen, itemsCount }, { setIsOpen }] = useCart()

  const [shippingPrise] = useState(20)
  const [total] = useState(150)
  const [currency] = useState('usd')

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
        {!itemsCount ? (
          <span>No items yet.</span>
        ) : (
          <>
            <h2 className={cn(style.cartTitle, style.cartSection)}>
              Your order:
            </h2>
            <div className={cn(style.productList, style.cartSection)}>
              {Array(itemsCount)
                .fill('')
                .map((_, key) => (
                  <CartProduct key={key} />
                ))}
            </div>
            <div
              className={style.cartTotal}
            >{`Total: ${total} ${currency}`}</div>
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
          </>
        )}
      </div>
    </div>,
    document.getElementById('root') as HTMLDivElement
  )
}
