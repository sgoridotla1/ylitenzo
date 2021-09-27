import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import {
  CgChevronLeft,
  CgChevronRight,
  CgPushChevronLeft,
} from 'react-icons/cg'

import { Carousel } from 'react-responsive-carousel'
import React from 'react'
import cn from 'classnames'
import productImage from '../ProductCard/product.png'
import style from './style.module.css'

export default () => {
  return (
    <div>
      <Carousel
        axis="horizontal"
        infiniteLoop
        renderArrowPrev={(handleClick) => (
          <div
            className={cn(style.arrow, style.arrowPrev)}
            onClick={handleClick}
          >
            <CgChevronLeft size={28} />
          </div>
        )}
        renderArrowNext={(handleClick) => (
          <div
            className={cn(style.arrow, style.arrowNext)}
            onClick={handleClick}
          >
            <CgChevronRight size={28} />
          </div>
        )}
      >
        {Array(8)
          .fill('')
          .map((image, key) => (
            <div>
              <img src={productImage} />
            </div>
          ))}
      </Carousel>
    </div>
  )
}
