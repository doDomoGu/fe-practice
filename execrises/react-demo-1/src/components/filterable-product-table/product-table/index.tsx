import React from 'react'
import PropTypes from 'prop-types'
import ProductCategoryRow from './product-category-row'
import ProductRow from './product-row'
const ProductTable = (props) => {
  const categoryList = new Set()
  props.items.forEach((v) => {
    categoryList.add(v.category)
  })
  const items = new Map()
  ;[...categoryList].forEach((v) => {
    items.set(
      v,
      props.items.filter((item) => item.category === v)
    )
  })

  return (
    <div className="h-full m-4">
      {[...categoryList].map((category) => (
        <div key={category} className="m-2">
          <ProductCategoryRow category={category} />
          {items.get(category).map((item) => (
            <ProductRow {...item} key={item.name} />
          ))}
        </div>
      ))}
    </div>
  )
}
ProductTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      category: PropTypes.string,
      stocked: PropTypes.bool
    })
  )
}
export default ProductTable
