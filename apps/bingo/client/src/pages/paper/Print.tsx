import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { tableItems } from './config'
import { useTheme } from '@/components/theme-provider'

const Print = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    if (window.self == window.top) {
      setTheme('light')
    }
  }, [])

  const { key } = useParams<{ key: string }>()

  const tableRow = 5
  const tableCol = 5
  const tableRowNumbers = Array.from({ length: tableRow }, (_, i) => i + 1)
  const tableColNumbers = Array.from({ length: tableCol }, (_, i) => i + 1)
  const curTableItems = tableItems.get(key)
  return (
    <div className="bg-white w-[650px] h-[650px] border border-slate-700 my-[40px] mx-[200px]">
      {tableRowNumbers.map((row) => {
        return (
          <div className="flex " key={row}>
            {tableColNumbers.map((col) => {
              return (
                <div
                  className="w-[130px] h-[130px] text-slate-700 border border-slate-700 text-center grid justify-center items-center"
                  key={col}
                >
                  {curTableItems[(row - 1) * tableCol + col - 1].label}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Print
