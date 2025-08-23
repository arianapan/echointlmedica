import { createContext, useContext } from "react";

// 创建空上下文
const AppContext = createContext();

export function AppContextProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContextProvider;