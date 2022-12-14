import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  if (token) {
    navigate("/");
  }
  const handlerSignUp = (data) => {
    // console.log(data);
    setSignupError("");
    const { email, password, name } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully create user");
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserToDb(name, email);
          })
          .catch((error) => console.log(error));
        console.log(user);
      })
      .catch((error) => {
        setSignupError(error.message);
        console.log(error);
      });
  };
  const saveUserToDb = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreateUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className=" w-96 p-8">
        <h3 className="text-xl text-center">Sign Up</h3>
        <form onSubmit={handleSubmit(handlerSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              placeholder="Your Name"
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              placeholder="email"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              placeholder="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "must be atleast 6 disits" },

                pattern: {
                  value: /[A-Z]/,
                  message: "password must be special",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-2"
            value="Sign Up"
            type="submit"
          />
        </form>
        {signupError && <p className="text-red-600">{signupError}</p>}
        <p>
          Alreday have an account ?
          <Link to="/login" className="text-primary">
            Please login
          </Link>
        </p>
        <div className="divider">OR</div>

        <button className="btn btn-outline w-full ">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
