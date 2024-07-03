import React from "react";

const Login = () => {
  return (
    <>
      <div style={{ boxSizing: "border-box" }} className="container form-signin m-auto text-center px-2 py-4 my-3 text-center" >
        <div style={{ display: "flex", justifyContent: "center" }}>
          
          <form style={{ width: "350px", padding: "25px", border: "1px solid black", background: "white", borderRadius: "3px", }} >
            
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>

            <div className="form-floating my-4">
              <input type="email" className="form-control" id="Email" placeholder="Email" required/>

              <label for="Email">Email</label>
            </div>

            <div className="form-floating my-4">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3 d-flex px-1">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>

            <div className="checkbox mb-3 mt-3">
              <label>Dont Have an Account ? Register Here</label>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default Login;
