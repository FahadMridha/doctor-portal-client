import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginEmail(email);
      })
      .catch((error) => {
        console.log(error.massage);
        setLoginError(error.message);
      });
  };
  const handlerGoogleSignIn = (provider) => {
    googleSignIn(provider)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className=" w-96 p-8">
        <h3 className="text-xl text-center">Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              {...register("email", {
                required: "Email Address is required",
              })}
              placeholder="email"
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password should be at least 6 carecter must",
                },
              })}
              placeholder="password"
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text"> Forgate password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
        <div>{loginError && <p className="text-red-600">{loginError}</p>}</div>
        <p>
          New to Doctor Portal ?
          <Link to="/signup" className="text-primary">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>

        <button
          onClick={() => handlerGoogleSignIn(googleProvider)}
          className="btn btn-outline w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
