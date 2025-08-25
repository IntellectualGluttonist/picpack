import { type FunctionComponent } from "react";
import Home from "./Home";
import Test from "./Test";

interface MainContainerProps {
  currentPage: string;
  setCurrentPage: Function;
}

const PageMap: {
  [key: string]: FunctionComponent;
} = {
  home: Home,
  test: Test,
};

const MainContainer = ({ currentPage }: MainContainerProps) => {
  const SelectedComponent = PageMap[currentPage];

  return (
    <div className="mt-[60px] mb-[60px] md:mt-0 md:mb-0 min-third:ml-[220px] min-second:ml-[72px]">
      <SelectedComponent />
    </div>
  );
};

export default MainContainer;
