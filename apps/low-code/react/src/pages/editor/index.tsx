import { createContext } from 'react'
import { useParams } from 'react-router-dom'
import { EventProvider } from '@/hooks/useEvent'

import EditorHeader from './header'
import EditorMain from './main'

const Editor = () => {
  const EditorContext = createContext()
  const { id } = useParams<{ id: string }>()
  return (
    <EditorContext.Provider value={{ id }}>
      <EventProvider>
        <div className="h-full w-full flex flex-col">
          {/* header */}
          <div className="flex-none">
            <EditorHeader id={id} />
          </div>
          {/* main */}
          <div className="flex-1 overflow-hidden">
            <EditorMain id={id} />
          </div>
        </div>
      </EventProvider>
    </EditorContext.Provider>
  )
}

export default Editor
