import React from 'react'

import PropTypes from 'prop-types'

const SearchBar = (props) => {
  return (
    <div className="h-[80px]">
      <input
        className="text-slate-800"
        type="text"
        value={props.searchTerm}
        onChange={props.onChange}
        placeholder="请输入检索关键词"
      />
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchBar
