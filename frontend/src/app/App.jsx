import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Dashboard/Homepage";
import ProductsPage from "./pages/Products";

export default function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        {!user ? (
          <Route path="/" element={<LoginPage />} />
        ) : (
          <>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<ProductsPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
