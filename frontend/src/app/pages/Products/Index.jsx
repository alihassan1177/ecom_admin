import { useEffect, useContext } from "react";
import DashboardLayout from "../Layouts/Dashboard";
import { getDataFromApi, BASE_APP_URL } from "../../utils/Api";
import { UserContext } from "../../context/UserContext";
import { useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);

  useEffect(() => {
    return async () => {
      setProducts(await getDataFromApi("/products", user.token));
      setLoading(false);
    };
  }, []);

  return (
    <DashboardLayout>
      <h1>Products</h1>
    </DashboardLayout>
  );
}
