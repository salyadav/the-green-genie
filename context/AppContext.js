import { createContext, useContext, useState, useMemo } from 'react';

const EsgContext = createContext({
  esgData: null, 
  setEsgData: () => {}
});

const RiskContext = createContext({
  riskData: null, 
  setRiskData: () => {}
});

export function AppWrapper({ children }) {
  const [esgData, setEsgData] = useState(null);
  const [riskData, setRiskData] = useState(null);
  
  const esgValue = useMemo(
    () => ({ esgData, setEsgData }), 
    [esgData]
  );
  
  const riskValue = useMemo(
    () => ({ riskData, setRiskData }), 
    [riskData]
  );

  return (
    <RiskContext.Provider value={riskValue}>
      <EsgContext.Provider value={esgValue}>
        {children}
      </EsgContext.Provider>
    </RiskContext.Provider>
  );
}

export function useEsgContext() {
  return useContext(EsgContext);
}

export function useRiskContext() {
  return useContext(RiskContext);
}