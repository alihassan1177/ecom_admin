import { useContext, useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import { PageTitle, Loader } from "../../components/Page";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getDataFromApi, BASE_APP_URL } from "../../utils/Api";
import { HiPlus } from "react-icons/hi";

export default function ProductPage() {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return async () => {
      setProducts(await getDataFromApi("/products", user.token));
      setLoading(false);
    };
  }, []);

  return (
    <MainLayout>
      <PageTitle>Products</PageTitle>
      <div className="m-4 p-4 border rounded">
        <header className="flex mb-4 items-center gap-1 justify-between flex-wrap">
          <h2 className="font-semibold text-3xl">All Products</h2>{" "}
          <Link
            className="btn-primary hide flex items-center gap-2 rounded"
            to="/products/create"
          >
            <span>Create New Product</span> <HiPlus className="text-lg" />
          </Link>
        </header>
        <table className="bg-white min-h-[150px] rounded border overflow-hidden relative p-2 w-full">
          <thead className="bg-blue-800 text-white h-10">
            <tr>
              <th className="font-semibold">#</th>
              <th className="font-semibold">Name</th>
              <th className="font-semibold hide">Code</th>
              <th className="font-semibold hide">Category</th>
              <th className="font-semibold">Image</th>
              <th className="font-semibold hide">Actions</th>
            </tr>
          </thead>
          <tbody className="relative transition-all">
            {loading ? (
              <tr>
                <td>
                  <Loader />
                </td>
              </tr>
            ) : !(products.length > 0) ? (
              "No Products Found"
            ) : (
              products.map((product, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.product_name}</td>
                      <td className="hide">{product.product_code}</td>
                      <td className="hide">{product.product_cat}</td>
                      <td>
                        <img
                          className="w-32 py-2 object-cover mx-auto"
                          src={`${BASE_APP_URL}storage/${product.product_img}`}
                          alt={product.product_name}
                        />
                      </td>
                      <td className="flex items-center gap-2 flex-wrap justify-center h-20 hide">
                        <Link
                          className="py-3 px-6 transition-colors rounded font-semibold bg-yellow-300 hover:bg-yellow-500"
                          to="products/edit"
                        >
                          Edit
                        </Link>
                        <Link
                          className="py-3 px-6 transition-colors rounded font-semibold text-white bg-red-500 hover:bg-red-700"
                          to="products/delete"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
