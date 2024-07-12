import React from 'react'
import MySelect from '@/components/MySelect'
import { Button } from '@/components/ui/button'

const paper = () => {
  const selectItems = [
    {
      label: '宝可梦',
      value: 'pokemon'
    },
    {
      label: '小马宝莉',
      value: 'pony'
    },
    {
      label: '蛋仔派对',
      value: 'eggy'
    }
  ]

  return (
    <div className="p-10">
      <div>
        <MySelect items={selectItems} placeholder="请选择一个主题" />
      </div>
      <div>
        <Button>提交</Button>
      </div>
    </div>
  )
}

export default paper
