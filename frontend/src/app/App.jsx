import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home/Home";
import ProductPage from "./pages/product/Product";

export default function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        {!user ? (
          <Route path="/" element={<LoginPage />} />
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />}>
              <Route path="create" element={<h1>Hello</h1>} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}
