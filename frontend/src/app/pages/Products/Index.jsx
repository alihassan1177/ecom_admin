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
                <TableCell align="left">Product Code</TableCell>
                <TableCell align="left">Product Category</TableCell>
                <TableCell align="left">Product Desc</TableCell>
                <TableCell align="left">Product Image</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row, index) => (
                <TableRow
                  className="even:bg-slate-100"
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.product_name}
                  </TableCell>
                  <TableCell align="left">{row.product_code}</TableCell>
                  <TableCell align="left">{row.product_cat}</TableCell>
                  <TableCell align="left">{row.product_desc}</TableCell>
                  <TableCell align="left">
                    <img
                      src={`${BASE_APP_URL}storage/${row.product_img}`}
                      alt={row.product_name}
                      style={{
                        width: "100%",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <button className="p-3 hover:opacity-75 transition-opacity bg-red-600 text-white font-semibold">
                      Delete
                    </button>
                    <button className="p-3 hover:opacity-75 transition-opacity bg-blue-600 text-white font-semibold">
                      Edit
                    </button>
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
