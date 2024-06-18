import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { EventContext } from '@/hooks/useEvent'

import ElementItem from './Item'

import * as elements from '@/elements'

// 元件库
const Elements = (props) => {
  const { eventState, handleEvent } = useContext(EventContext)
  // const { id } = useContent(EditorContext)
  // console.log('elements', eventState)

  const handleAdd = (item) => {
    console.log('handleAdd', item)

    // const { id, type } = item
    // const { elements } = eventState

    // if (elements.includes(id)) return

    handleEvent({
      action: 'addElement',
      data: {
        ...item
      }
    })
  }

  const handleClear = () => {
    handleEvent({ action: 'clearElements' })
  }

  // 根据属性渲染对应的组件
  const DynamicComponent = ({ name }) => {
    const Component = elements.components[name]
    return <Component />
  }

  return (
    <div className="w-full bg-gray-200 text-black h-full flex flex-col">
      <div className="flex-none h-[30px] items-center px-2 bg-gray-700 text-gray-400 text-center">
        元件库
        <button onClick={handleClear}>清空</button>
      </div>
      <div className="overflow-auto flex-1">
        <div className="flex flex-wrap justify-start">
          {/* {Object.keys(elements.components).map((eleName) => {
            return (
              <div className="w-[200px] m-2" key={eleName}>
                <div> {eleName} </div>
                <DynamicComponent name={eleName} />
              </div>
            )
          })} */}

          {Object.keys(elements.configs).map((componentName) => {
            const item = elements.configs[componentName]
            return (
              <ElementItem
                {...item}
                key={item.componentName}
                onClick={() => handleAdd(item)}
                className="m-2"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

Elements.propTypes = {}

export default Elements
