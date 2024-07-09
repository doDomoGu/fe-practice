import React from 'react'
import PropTypes from 'prop-types'
import ProductCategoryRow from './product-category-row'
import ProductRow from './product-row'
const ProductTable = (props) => {
  const filteredProducts = props.products.filter((item) => {
    return (
      item.name.toLowerCase().includes(props.searchTerm.toLowerCase()) &&
      (props.inStockOnly === false || item.stocked)
    )
  })

  const categoryList = new Set()

  props.products.forEach((v) => {
    categoryList.add(v.category)
  })
  const productsByCategory = new Map()
  ;[...categoryList].forEach((v) => {
    productsByCategory.set(
      v,
      filteredProducts.filter((item) => item.category === v)
    )
  })

  return (
    <div className="h-full m-4">
      {[...categoryList].map((category) => (
        <div key={category} className="m-2">
          <ProductCategoryRow category={category} />
          {productsByCategory.get(category).map((item) => (
            <ProductRow {...item} key={item.name} />
          ))}
        </div>
      ))}
    </div>
  )
}
ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      category: PropTypes.string,
      stocked: PropTypes.bool
    })
  ),
  searchTerm: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired
}
export default ProductTable
