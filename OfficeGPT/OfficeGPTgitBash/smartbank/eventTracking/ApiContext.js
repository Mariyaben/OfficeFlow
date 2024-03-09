import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [secondApiPromise, setSecondApiPromise] = useState(null);

  return (
    <ApiContext.Provider value={{ secondApiPromise, setSecondApiPromise }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
