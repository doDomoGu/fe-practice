import { useState, useEffect, useMemo } from 'react'
import request from '@/lib/request'

import MySelect from '@/components/MySelect'
import { Button } from '@/components/ui/button'

const EditList = () => {
  const [data, setData] = useState([])

  const [selected, setSelected] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const result = await request.get('/init/get')

      // console.log(result.data.data)

      const data = result.data.data

      const items = data.map((v: any) => ({
        label: v.title,
        value: v.id,
        cards: v.cards
      }))
      setData(items)
      setSelected(items[0].value)
    }
    fetchData()
  }, [])

  // 下拉框的配置项
  const selectItems = useMemo(
    () =>
      data.map((v: any) => ({
        label: v.label,
        value: v.value
      })),
    [data]
  )

  const listData = useMemo(() => {
    const curItem: any = data.find((v: any) => v.value === selected)
    if (!curItem) return []
    return curItem.cards
  }, [data, selected])

  return (
    <div className="p-10">
      <div className="h-40 print:hidden">
        <MySelect
          items={selectItems}
          placeholder="请选择一个主题"
          value={selected}
          onChange={setSelected}
        />
      </div>

      <div>{selected}</div>
      <div>
        {listData.map((v: any) => (
          <div key={v.text}>{v.text}</div>
        ))}
      </div>
    </div>
  )
}

export default EditList
