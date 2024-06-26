import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './search-bar'
import ProductTable from './product-table'

const FilterableProduceTable = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredProducts = props.products.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  const onChangeHandler = (v) => {
    setSearchTerm(v.target.value)
  }
  return (
    <div className="outline text-white h-[400px] flex flex-col">
      <div className="flex-none">
        <SearchBar searchTerm={searchTerm} onChange={onChangeHandler} />
      </div>
      <div className="flex-1">
        <ProductTable items={filteredProducts} />
      </div>
    </div>
  )
}

FilterableProduceTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      category: PropTypes.string,
      stocked: PropTypes.bool
    })
  )
}
export default FilterableProduceTable
