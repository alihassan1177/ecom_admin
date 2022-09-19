import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import ProductsPage from "./pages/products";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />}>
          <Route
            path="jackets"
            element={<ProductsPage page="Leather Jackets" />}
          />
          <Route path="boots" element={<ProductsPage page="Leather boots" />} />
        </Route>
      </Routes>
    </>
  );
}
