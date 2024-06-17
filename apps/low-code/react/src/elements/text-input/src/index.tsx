import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon.svg'
const ElementTextInput = (props) => {
  return <div>这是一个text-input组件</div>
}

ElementTextInput.propTypes = {}

export const config = {
  id: 'text-input',
  name: '文本输入框',
  icon: Icon,
  limit: 50,
  // label: 'Text',
  component: ElementTextInput
}
export default ElementTextInput
