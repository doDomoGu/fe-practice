import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import request from '@/lib/request'

import { tableItems } from './config'
import { useTheme } from '@/components/theme-provider'

const Print = () => {
  const { setTheme } = useTheme()
  const [configData, setConfigData] = useState([] as any)
  const { key } = useParams<{ key: string }>()

  useEffect(() => {
    if (window.self == window.top) {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const result = await request.get('/init/get')
      const data = result.data.data
      // const curItem = data!.find((v: any) => v.id === key)
      setConfigData(data)
    }
    fetchData()
  }, [])

  const curTableItems = useMemo(() => {
    const curItem = configData.find((v: any) => v.id === key)
    if (!curItem) return []
    return curItem.cards.sort(() => Math.random() - 0.5)
  }, [configData, key])

  const tableRow = 5
  const tableCol = 5
  const tableRowNumbers = Array.from({ length: tableRow }, (_, i) => i + 1)
  const tableColNumbers = Array.from({ length: tableCol }, (_, i) => i + 1)
  return (
    <div className="bg-white w-[650px] h-[650px] border border-slate-700 my-[40px] mx-[200px]">
      {curTableItems.length > 0 &&
        tableRowNumbers.map((row) => {
          return (
            <div className="flex " key={row}>
              {tableColNumbers.map((col) => {
                return (
                  <div
                    className="w-[130px] h-[130px] text-slate-700 border border-slate-700 text-center grid justify-center items-center"
                    key={col}
                  >
                    {curTableItems[(row - 1) * tableCol + col - 1].text}
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
