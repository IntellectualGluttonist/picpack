import { createContext, useState, useContext, type ReactNode } from "react";

interface SelectPageProviderProps {
  children: ReactNode;
}

interface SelectedPageContextType {
  selectedPage: string;
  setSelectedPage: Function;
}

const SelectedPageContext = createContext({} as SelectedPageContextType);

export const useSelectedPageContext = () => useContext(SelectedPageContext);

export const SelectedPageProvider = ({ children }: SelectPageProviderProps) => {
  const [selectedPage, setSelectedPage] = useState("test");

  const contextValue: SelectedPageContextType = {
    selectedPage,
    setSelectedPage,
  };

  return (
    <SelectedPageContext.Provider value={contextValue}>
      {children}
    </SelectedPageContext.Provider>
  );
};
