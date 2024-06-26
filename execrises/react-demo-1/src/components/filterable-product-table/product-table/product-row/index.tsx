import React from 'react'
import PropTypes from 'prop-types'

const ProductRow = (props) => {
  return (
    <div className="flex">
      <div className="flex-1">{props.name}</div>
      <div className="flex-1">{props.price}</div>
    </div>
  )
}

ProductRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  stocked: PropTypes.bool
}

export default ProductRow
