import { useParams } from 'react-router-dom'
import { EventProvider } from '@/hooks/useEvent'
import { EditorContext } from './EditorContext'

import EditorHeader from './header'
import EditorMain from './main'

const Editor = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <EditorContext.Provider value={{ id }}>
      <EventProvider>
        <div className="h-full w-full flex flex-col">
          {/* header */}
          <div className="flex-none">
            <EditorHeader />
          </div>
          {/* main */}
          <div className="flex-1 overflow-hidden">
            <EditorMain />
          </div>
        </div>
      </EventProvider>
    </EditorContext.Provider>
  )
}

export default Editor
