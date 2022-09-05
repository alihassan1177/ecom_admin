import React from "react";
import { useState } from "react";
import { api } from "../../utils/Api";

const LoginForm = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  async function login() {
    try {
      setErrors(["Login Successful"]);
      const response = await api.post(
        "/login",
        JSON.stringify({ email: email, password: password })
      );
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data.error);
      }
    }
  }
  console.log("Hello");
  return (
    <>
      <div
        className={`msg ${
          errors.length > 0 && errors[0].includes("Login") ? "success" : ""
        } ${errors.length > 0 && !errors[0].includes("Login") ? "error" : ""}`}
      >
        {errors.map((error, index) => {
          return <li key={index}>{error}</li>;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        id="loginForm"
        className="flex flex-col bg-slate-200 gap-3 rounded p-6 max-w-md w-full"
      >
        <h1 className="font-bold text-blue-500 text-2xl">
          Login to your Account
        </h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Enter your Email Address"
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="Enter your Password"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn-primary" type="submit">
          Sign In
        </button>
      </form>
    </>
  );
});

export default LoginForm;
