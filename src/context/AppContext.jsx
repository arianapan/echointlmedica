import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [heroColor, setHeroColor] = useState('#0d2b45');

  return (
    <AppContext.Provider value={{ heroColor, setHeroColor }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextProvider;
