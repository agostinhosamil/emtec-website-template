import { createContext, useState, useContext } from "react";

export const ApplicationContext = createContext()

export const ApplicationContextProvider = ({ children, ...initialProps }) => {
  initialProps = typeof initialProps !== typeof {} ? {} : initialProps

  const [state, setState] = useState({ name: 'Sam1', ...initialProps })

  const setStateProp = (propState) => (
    setState({ ...state, ...propState })
  )

  return (
    <ApplicationContext.Provider value={{ state: { ...state, setState: setStateProp } }}>
      { children }
    </ApplicationContext.Provider>
  )
}

export const useAppContext = (prop) => {
  const context = useContext(ApplicationContext)
  
  if ( typeof undefined === typeof context )
    return;
  
  const { state } = context

  const propertyDefinedInContext = Boolean(
    typeof prop === typeof 'string' && 
    typeof state [ prop ] !== undefined
  )
  
  if ( propertyDefinedInContext ) {
    return [state [ prop ], state.setState]
  }

  return state
}
