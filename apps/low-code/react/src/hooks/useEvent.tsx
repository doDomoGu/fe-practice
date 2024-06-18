import React from 'react'

export const EventContext = React.createContext({})

export const EventProvider = ({ children }: any) => {
  const [eventState, setEventState] = React.useState(null)

  const handleEvent = (event: any) => {
    setEventState(event)
  }

  return (
    <EventContext.Provider value={{ eventState, handleEvent }}>
      {children}
    </EventContext.Provider>
  )
}
