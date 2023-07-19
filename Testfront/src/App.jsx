import "./App.css";
import IngresoReclamo from "./pages/IngresoReclamo";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListarReclamos from "./pages/ReclamosPage";

import Error404 from "./pages/Error404";
import ReclamosPage from "./pages/ReclamosPage";
import DetallesReclamos from "./pages/DetallesReclamos";
import { ReclamosProvider } from "./context/ReclamosProvider";
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Header />
          <ReclamosProvider>
            <Routes>
              <Route
                index
                path="/ingreso-reclamo"
                element={<IngresoReclamo />}
              />
              <Route path="/reclamos" element={<ReclamosPage />} />
              <Route path="/detalles" element={<DetallesReclamos />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </ReclamosProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
