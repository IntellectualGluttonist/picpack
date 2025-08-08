import TopBar from "./components/TopBar.tsx";
import MainContainer from "./components/MainContainer.tsx";
import BottomBar from "./components/BottomBar.tsx";
import SideBar from "./components/SideBar.tsx";

function App() {
  return (
    <>
      <TopBar />
      <SideBar />
      <MainContainer />
      <BottomBar />
    </>
  );
}

export default App;
