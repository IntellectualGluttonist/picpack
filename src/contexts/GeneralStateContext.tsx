import { createContext, useState, useContext, type ReactNode } from "react";

interface GeneralStateProviderProps {
  children: ReactNode;
}

interface GeneralStateContextType {
  selectedPage: string;
  setSelectedPage: Function;
}

const GeneralStateContext = createContext({} as GeneralStateContextType);

export const useGeneralStateContext = () => useContext(GeneralStateContext);

export const GeneralStateProvider = ({
  children,
}: GeneralStateProviderProps) => {
  const [selectedPage, setSelectedPage] = useState("/");

  const contextValue: GeneralStateContextType = {
    selectedPage,
    setSelectedPage,
  };

  return (
    <GeneralStateContext.Provider value={contextValue}>
      {children}
    </GeneralStateContext.Provider>
  );
};
