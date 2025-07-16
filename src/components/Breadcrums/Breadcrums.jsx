import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Breadcrumbs bileşeni, kendisine gelen `product` objesini kullanarak
 * sayfa yolunu (breadcrumb) oluşturur.
 *
 * Props:
 *   product: {
 *     category: string,
 *     title: string
 *   }
 */
const Breadcrumbs = ({ product }) => {
  if (!product) return null

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      <span> / </span>
      <Link to={`/category/${product.category}`}>
        {product.category}
      </Link>
      <span> / </span>
      <span>{product.title}</span>
    </nav>
  )
}

export default Breadcrumbs
