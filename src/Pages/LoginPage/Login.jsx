import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  
  const {signIn} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value; 
        const password = form.password.value;

        signIn(email, password) 
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error.message);
        })
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <img src={img} alt="" />
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-secondary" 
                type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center">Don's have an account? <Link to="/signUp" className="link">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
