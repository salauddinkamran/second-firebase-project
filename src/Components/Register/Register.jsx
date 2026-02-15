import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { use, useState } from "react";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState();
  const { createUserSignUp } = use(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, "+", email, "+", password);
    setSuccess(false);
    setError("");
    createUserSignUp(email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess(true);
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
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
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
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-xs absolute top-2 right-3"
                  >
                    {showPassword ? "hide" : "show"}
                  </button>
                </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            {success && (
              <p className="text-xs text-green-400 font-semibold">
                user sign up successfuly!
              </p>
            )}
            {error && (
              <p className="text-xs font-semibold text-red-400">{error}</p>
            )}
            <p>
              Already have an account? please{" "}
              <Link className="text-blue-400 underline ml-3" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
