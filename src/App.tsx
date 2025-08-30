import TopBar from "./components/TopBarComponents/TopBar.tsx";
import MainContainer from "./components/MainContainer.tsx";
import BottomBar from "./components/BottomBarComponents/BottomBar.tsx";
import SideBar from "./components/SideBar.tsx";

import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("test");

  return (
    <>
      <TopBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <MainContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <BottomBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
