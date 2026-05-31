import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NewVehiclesPage from "./pages/NewVehiclesPage";
import UsedVehiclesPage from "./pages/UsedVehiclesPage";
import DealsPage from "./pages/DealsPage";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/neufs" element={<NewVehiclesPage />} />
          <Route path="/occasions" element={<UsedVehiclesPage />} />
          <Route path="/bons-plans" element={<DealsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
