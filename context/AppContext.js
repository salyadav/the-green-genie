import { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext({
  esgData: null, 
  setEsgData: () => {}
});

export function AppWrapper({ children }) {
  const [esgData, setEsgData] = useState(null);
  const value = useMemo(
    () => ({ esgData, setEsgData }), 
    [esgData]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}