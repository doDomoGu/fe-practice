import React from 'react'
import PropTypes from 'prop-types'

const ProductCategoryRow = (props) => {
  return <div className="font-bold text-center">{props.category}</div>
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string
}

export default ProductCategoryRow
