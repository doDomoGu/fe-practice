import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { EventContext } from '@/hooks/useEvent'
// import { useGlobalComponents } from '@/elements/elementsCompProvider'

import Item from './Item'
// import * as elements from '@/elements'
// import { setupElementsComp } from '@/elements'

// 元件库
const Elements = (props) => {
  const { eventState, handleEvent } = useContext(EventContext)

  // const { TitleText } = useGlobalComponents()

  const elementConfigs = window.elementConfigs || []
  const elementsList = ['TitleText', 'Text']
  console.log({ elements })
  const { ElementTextInput, ElmenetTitleText } = elements
  // const handleAdd = (item) => {
  //   const { id, type } = item
  //   const { elements } = eventState

  //   if (elements.includes(id)) return

  //   handleEvent('addElement', {
  //     id,
  //     type
  //   })
  // }

  const handleClear = () => {
    handleEvent({ action: 'clearElements' })
  }

  // 根据属性渲染对应的组件
  const DynamicComponent = ({ name }) => {
    const Component = elements[name]
    return <Component />
  }

  return (
    <div className="w-[250px] bg-gray-200 text-black h-full flex flex-col">
      <div className="flex-none h-[30px] items-center px-2 bg-gray-700 text-gray-400 text-center">
        元件库
        <button onClick={handleClear}>清空</button>
      </div>
      <div className="overflow-auto flex-1">
        <div className="flex flex-wrap justify-start">
          {Object.keys(elements).map((eleName) => {
            return (
              <div className="w-[200px] m-2">
                <div> {eleName} </div>
                <DynamicComponent name={eleName} />
              </div>
            )
            // return <ElementTextInput key={eleName} />
          })}

          {/* { for (let item of elementConfigs) {
            return (
              <Item
              {...item}
              key={item.id}
              onClick={handleAdd(item)}
              className="m-2"
            />
            )
        }} */}
        </div>
      </div>
    </div>
  )
}

Elements.propTypes = {}

export default Elements
