import { useContext } from "react";

import { AppContext } from "../../contexts";
import { useGetCharacters } from "../../hooks";

export type AppProviderProps = {
  children: JSX.Element;
};

function AppProvider({ children }: AppProviderProps) {
  const { state, dispatch } = useGetCharacters();
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw Error("context values are empty!");
  }

  return context;
}

export { AppProvider, useAppContext };
