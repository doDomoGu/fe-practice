import React from 'react'

import PropTypes from 'prop-types'

const SearchBar = (props) => {
  return (
    <div className="h-[80px]">
      <input
        className="text-slate-800"
        type="text"
        value={props.searchTerm}
        onChange={props.onSearchTermChange}
        placeholder="请输入检索关键词"
      />
      <input
        type="checkbox"
        checked={props.inStockOnly}
        onChange={props.onInStockOnlyChange}
      />
      <label>仅显示有库存的商品</label>
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  onInStockOnlyChange: PropTypes.func.isRequired
}

export default SearchBar
