import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContactPage from "./pages/ContactPage";
import Home from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
