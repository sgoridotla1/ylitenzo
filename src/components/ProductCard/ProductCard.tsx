import React from 'react'
import productImage from './product.png'
import style from './style.module.scss'

const ProductCard = () => {
    return (
        <div className={style.productCard}>
            <div className={style.image}>
                <img src={productImage} alt="" />
            </div>

            <div className={style.name}>WORLD ON FIRE Sweatshirt</div>
            <div className={style.price}>
                {(Math.random() * 100).toFixed(2)}$
            </div>
        </div>
    )
}

export default ProductCard
