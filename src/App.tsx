import Home from "./pages/Home.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import { Routes, Route } from "react-router-dom";
import { SelectedPageProvider } from "./contexts/SelectedPageContext.tsx";

function App() {
  return (
    <>
      <SelectedPageProvider>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </SelectedPageProvider>
    </>
  );
}

export default App;
