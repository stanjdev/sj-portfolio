import React, {createContext, useState} from 'react';

// Context
export const LightContext = createContext();


// Provider
export const LightContextProvider = ({ children }) => {
  const [light, setLight] = useState(false)

  return (
    <LightContext.Provider value= {{light, setLight}}>
      {children}
    </LightContext.Provider>
  ) 
}
