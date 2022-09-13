import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Dashboard/Homepage";
import ProductsPage from "./pages/Products";
import PostsPage from "./pages/Posts";
import SettingsPage from "./pages/Settings";
import CustomersPage from "./pages/Customers";

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
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/customers" element={<CustomersPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
