import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar páginas
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ContactPage from "./pages/ContactPage";

// Importar componentes comunes
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR - siempre visible */}
      <Navbar />

      {/* CONTENIDO CENTRAL */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lista" element={<ListPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>Página no encontrada</h2>} />
        </Routes>
      </main>

      {/* FOOTER - siempre visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
