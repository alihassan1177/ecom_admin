import { useContext } from "react";
import DashboardLayout from "../Layouts/Dashboard";
import { MainContext } from "../../context/MainContext";

export default function CustomersPage() {
  const { users } = useContext(MainContext);

  return (
    <DashboardLayout>
      <h1>Customers</h1>
      <p>
        {!users.length > 0
          ? "No Users Found"
          : users.map((user, index) => {
              return <li key={index}>{user.email}</li>;
            })}
      </p>
    </DashboardLayout>
  );
}
