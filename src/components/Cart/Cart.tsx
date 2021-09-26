import { CgClose, CgMathMinus, CgMathPlus } from 'react-icons/cg'

import React from 'react'
import ReactDOM from 'react-dom'
import productImage from '../ProductCard/product.png'
import style from './style.module.css'

export default function Cart() {
    return ReactDOM.createPortal(
        <div className={style.cart}>
            <div className={style.title}>
                <span role="button" aria-label="Close cart">
                    <CgClose />
                </span>
            </div>
            <div className={style.productList}>
                {Array(3)
                    .fill('')
                    .map((_, key) => (
                        <div className={style.product}>
                            <img
                                src={productImage}
                                alt=""
                                className={style.productImage}
                            />
                            <div className={style.leftCol}>
                                <div className={style.productName}>
                                    WORLD ON FIRE Sweatshirt
                                </div>
                                <div className={style.productInfo}>
                                    <span>Size: M</span>
                                    <span>Color: White</span>
                                </div>
                                <div className={style.priceBar}>
                                    <div className={style.quantity}>
                                        <span>
                                            <CgMathPlus />
                                        </span>
                                        <span>1</span>
                                        <span>
                                            <CgMathMinus />
                                        </span>
                                    </div>
                                    <div className={style.productPrice}>
                                        66.12$
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>,
        document.getElementById('root') as HTMLDivElement
    )
}
