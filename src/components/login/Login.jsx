import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form-signin text-center">
        <h1 className="h3 mb-3 font-weight-normal">
          <i className="fas fa-sign-in-alt" /> Please sign in
        </h1>
        <a
          className="btn btn-lg btn-primary btn-block"
          href="http://localhost:8888"
        >
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Login;
