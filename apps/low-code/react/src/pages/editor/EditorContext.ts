import { createContext } from 'react'

interface EditorContextType {
  id: string
}

export const EditorContext = createContext<EditorContextType>({})
