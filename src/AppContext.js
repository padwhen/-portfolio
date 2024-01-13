import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isVisible, setAirbnbAnalysisVisible] = useState(false);
  const [javaVisible, setJavaVisible] = useState(false)

  const toggleAirbnbAnalysis = () => {
    setAirbnbAnalysisVisible((prev) => !prev);
    if (javaVisible) {
      setJavaVisible((prev) => !prev)
    }
  };
  const toggleJavaVisible = () => {
    setJavaVisible(!javaVisible)
    if (isVisible) {
        toggleAirbnbAnalysis()
    }
  }

  return (
    <AppContext.Provider value={{ isVisible, toggleAirbnbAnalysis, javaVisible, setJavaVisible, toggleJavaVisible }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
