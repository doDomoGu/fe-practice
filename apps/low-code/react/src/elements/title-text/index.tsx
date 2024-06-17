import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon.svg'
const ElementInputText = (props) => {
  return <div>这是一个title-text组件</div>
}

ElementInputText.propTypes = {}

export const config = {
  id: 'title-text',
  name: '标题文本',
  icon: Icon,
  limit: 50,
  // label: 'Text',
  component: ElementInputText
}
export default ElementInputText
