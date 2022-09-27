import { useState, useContext } from "react";
import { PageTitle } from "../../components/Page";
import MainLayout from "../MainLayout";
import { sendDataToApi } from "../../utils/Api";
import { UserContext } from "../../context/UserContext";

export default function CreateProduct() {
  const { user } = useContext(UserContext);

  const [image, setImage] = useState({});
  function handleFile(e) {
    setImage(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target.parentElement;
    const data = new FormData(form);
    data.append("product_img", image);

    try {
      await sendDataToApi("/product/create", user.token, data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MainLayout>
      <PageTitle>Create New Product</PageTitle>
      <div className="m-4 p-4 border rounded">
        <header className="flex mb-4 items-center gap-1 justify-between flex-wrap">
          <h2 className="font-semibold text-3xl">New Product</h2>
        </header>
        <form className="flex flex-col gap-4 hide" method="post">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              placeholder="Enter Product Name"
              id="name"
              name="product_name"
            />
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="code">Code</label>
              <input
                required
                type="text"
                placeholder="Enter Product Code"
                id="code"
                name="product_code"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="category">Category</label>
              <input
                required
                type="text"
                placeholder="Enter Product Category"
                id="category"
                name="product_cat"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image">Image</label>
            <input
              required
              name="product_img"
              type="file"
              onChange={(e) => handleFile(e)}
              placeholder=""
              id="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <textarea
              name="product_desc"
              id="description"
              cols="30"
              rows="10"
            ></textarea>{" "}
          </div>
          <button onClick={(e) => handleSubmit(e)} className="btn-primary">
            Create
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
