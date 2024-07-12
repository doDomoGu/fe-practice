import React from 'react'
import PropTypes from 'prop-types'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const MySelect = (props) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={props.placeholder || '请选择'} />
      </SelectTrigger>
      <SelectContent>
        {props.items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

MySelect.propTypes = {
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
}

export default MySelect
