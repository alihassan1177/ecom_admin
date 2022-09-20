import { useEffect, useContext, useState } from "react";
import DashboardLayout from "../Layouts/Dashboard";
import { getDataFromApi, BASE_APP_URL } from "../../utils/Api";
import { UserContext } from "../../context/UserContext";
import Title from "../Dashboard/Title";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
      <Paper
        sx={{
          p: 2,
        }}
      >
        <Title>Products</Title>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Product Code</TableCell>
                <TableCell align="right">Product Desc</TableCell>
                <TableCell align="right">Product Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow
                  key={row.product_name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.product_name}
                  </TableCell>
                  <TableCell align="right">{row.product_code}</TableCell>
                  <TableCell align="right">{row.product_desc}</TableCell>
                  <TableCell align="right">
                    <img
                      src={`${BASE_APP_URL}storage/${row.product_img}`}
                      alt={row.product_name}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </DashboardLayout>
  );
}
