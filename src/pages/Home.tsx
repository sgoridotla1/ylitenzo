import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard'
import ProductLayout from '../components/Layouts/ProductLayout'
import React from 'react'

export default function Home() {
  return (
    <ProductLayout>
      {Array(10)
        .fill('')
        .map((_, key) => (
          <ProductCard key={key} />
        ))}
    </ProductLayout>
  )
}
