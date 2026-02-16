import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState();
  const { singinUser } = use(AuthContext); 
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    setSuccess(false);
    setError("");
    singinUser(email, password)
      .then((res) => {
        event.target.reset()
        console.log(res);
        setSuccess(true);
        navigate(location.state || "/")
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSignUp}>
              <fieldset className="fieldset">
                {/* name feild */}
                <label className="label text-lg">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your name"
                />
                {/* email feild */}
                <label className="label text-lg">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                {/* password feild */}
                <label className="label text-lg">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="btn btn-xs absolute top-2 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "hide" : "show"}
                  </button>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            {success && (
              <p className="text-xs text-green-400 font-semibold">
                Sign up successfuly!
              </p>
            )}
            {error && (
              <p className="text-xs font-semibold text-red-400">{error}</p>
            )}
            <p>
              New to our website ? please{" "}
              <Link className="text-blue-400 underline ml-3" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
