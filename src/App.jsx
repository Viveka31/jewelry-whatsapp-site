import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rings" element={<Category title="Rings" />} />
        <Route path="/necklace" element={<Category title="Necklace" />} />
        <Route path="/earrings" element={<Category title="Earrings" />} />
        <Route path="/bangles" element={<Category title="Bangles" />} />
      </Routes>
    </BrowserRouter>
  );
}