import { createContext, useContext } from 'react';
import EsgScore from '../constants/esgscore';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {};

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}