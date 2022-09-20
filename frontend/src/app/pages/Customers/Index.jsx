import { useEffect, useContext, useState } from "react";
import DashboardLayout from "../Layouts/Dashboard";
import { getDataFromApi, BASE_APP_URL } from "../../utils/Api";
import { UserContext } from "../../context/UserContext";
import DataTable from "../../components/DataGrid";
import Title from "../Dashboard/Title";

export default function UsersPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);

  useEffect(() => {
    return async () => {
      setProducts(await getDataFromApi("/products", user.token));
      setLoading(false);
    };
  }, []);

  const customers = [
    { name: "Ali Hassan", email: "ah927482@gmail.com" },
    { name: "Ali Hassan", email: "ah927482@gmail.com" },
    { name: "Ali Hassan", email: "ah927482@gmail.com" },
    { name: "Ali Hassan", email: "ah927482@gmail.com" },
    { name: "Ali Hassan", email: "ah927482@gmail.com" },
    { name: "Ali Hassan", email: "ah927482@gmail.com" },
  ];

  return (
    <DashboardLayout>
      <Title>Products</Title>
      <DataTable name="Customers" data={customers} cell={["name", "email"]} />
    </DashboardLayout>
  );
}
