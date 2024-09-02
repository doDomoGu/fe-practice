import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import print from 'print-js'

import MySelect from '@/components/MySelect'
import { Button } from '@/components/ui/button'

import { selectItems } from './config'

import Print from './Print'

const paper = () => {
  const [selected, setSelected] = useState(selectItems[0].value)

  const printHandler = () => {
    window.open(`/#/paper/print/${selected}`, '_blank')
    // console.log({ print })
    // print({
    //   printable: tableRef.current,
    //   type: 'html'
    // })
    // const printElement = document.getElementById('tableEl')
    // const printWindow = window.open('', '_blank')
    // if (printWindow) {
    //   printWindow.document.write(printElement.innerHTML)
    //   printWindow.document.close()
    //   printWindow.focus()
    //   printWindow.print()
    //   printWindow.close()
    // }
  }
  return (
    <div className="p-10 ">
      <div className="h-40 print:hidden">
        <MySelect
          items={selectItems}
          placeholder="请选择一个主题"
          value={selected}
          onChange={setSelected}
        />
        {selected != '' && (
          <Button className="mt-4" onClick={printHandler}>
            打印游戏纸
          </Button>
        )}
      </div>
      <div className="w-[1050px] h-[730px] text-white outline">
        <iframe
          id="print-preview"
          src={`/#/paper/print/${selected}`}
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}

export default paper
