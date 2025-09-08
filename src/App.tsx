import Home from "./components/Pages/Homepage/Home.tsx";
import BottomNav from "./components/Navigation/BottomNav.tsx";
import LeftNav from "./components/Navigation/LeftNav.tsx";
import PageNotFound from "./components/Pages/PageNotFound.tsx";
import { Routes, Route } from "react-router-dom";
import { SelectedPageProvider } from "./contexts/SelectedPageContext.tsx";

function App() {
  return (
    <>
      <SelectedPageProvider>
        <LeftNav />
        <BottomNav />
        <main className="mt-[60px] mb-[60px] min-third:ml-[220px] min-second:ml-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </SelectedPageProvider>
    </>
  );
}

export default App;
