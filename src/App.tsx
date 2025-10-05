import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import CreatePost from "./pages/CreatePost.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
