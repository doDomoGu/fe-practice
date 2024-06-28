import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './search-bar'
import ProductTable from './product-table'

const FilterableProduceTable = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  // const filteredProducts = props.products.filter((item) => {
  //   return (
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     (inStockOnly === false || item.stocked)
  //   )
  // })
  const onSearchTermChangeHandler = (v) => {
    setSearchTerm(v.target.value)
  }
  const onInStockOnlyChangeHandler = (v) => {
    // console.log('onInStockOnlyChangeHandler', v, v.target.checked)
    setInStockOnly(Boolean(v.target.checked))
  }
  return (
    <div className="outline text-white h-[400px] flex flex-col">
      <div className="flex-none">
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChangeHandler}
          inStockOnly={inStockOnly}
          onInStockOnlyChange={onInStockOnlyChangeHandler}
        />
      </div>
      <div className="flex-1">
        <ProductTable
          products={props.products}
          searchTerm={searchTerm}
          inStockOnly={inStockOnly}
        />
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
