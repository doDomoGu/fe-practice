import React from 'react'
import PropTypes from 'prop-types'

const ElementsItem = (props) => {
  return (
    <div className="w-[100px] h-[100px] border-[1px] py-[5px] border-slate-800 overflow-hidden flex flex-col items-center cursor-pointer hover:bg-slate-300">
      <div className="w-[50px] h-[50px]">
        <img src={props.icon} alt="" className="w-full h-full" />
      </div>
      <div className="h-[20px] text-[14px]">{props.label}</div>
      <div className="h-[20px] text-[14px]">
        {/* {props.count} */} 0 / {props.limit}
      </div>
    </div>
  )
}

ElementsItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  // count: PropTypes.number.isRequired,
  // count: PropTypes.number,
  limit: PropTypes.number.isRequired
}

export default ElementsItem
