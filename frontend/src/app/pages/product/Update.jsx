import { useState, useContext } from "react";
import { PageTitle } from "../../components/Page";
import MainLayout from "../MainLayout";
import { sendDataToApi } from "../../utils/Api";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target.parentElement;
    let formdata = new FormData(form);
    try {
      const response = await sendDataToApi(
        "/product/create",
        user.token,
        formdata
      );
      setMessage(response.message);
      navigate("/products");
    } catch (res) {
      console.log("Error");
    }
  }

  return (
    <MainLayout>
      <PageTitle>Create New Product</PageTitle>
      <div className="m-4 p-4 border rounded">
        {message.map((msg, index) => {
          return (
            <p key={index} className="msg">
              {msg}
            </p>
          );
        })}
        <header className="flex mb-4 items-center gap-1 justify-between flex-wrap">
          <h2 className="font-semibold text-3xl">New Product</h2>
        </header>
        <form
          className="flex flex-col gap-4 hide"
          method="post"
          encType="multipart/form-data"
          onSubmit={(e) => console.log(e.target)}
        >
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
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="btn-primary"
          >
            Create
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
