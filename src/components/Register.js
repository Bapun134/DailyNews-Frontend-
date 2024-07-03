import React from "react";

function Register() {
  return (
    <div>
      <div style={{ boxSizing: "border-box" }} className="container form-signin w-100 m-auto text-center px-2 py-4 my-3 text-center" >
        <div style={{ display: "flex", justifyContent: "center" }}>
          
          <form onSubmit={() => alert("You have Successfully Registered.")} style={{ width: "350px", padding: "25px", border: "1px solid black", background: "white", borderRadius: "3px", }} >
            <h1 className="h3 mb-3 fw-normal">Register</h1>

            <div className="form-floating my-4">
              <input type="text" className="form-control" name="username" id="username" placeholder="Username" required/>
              <label for="username">Username</label>
            </div>

            <div className="form-floating my-4">
              <input type="email" className="form-control" name="email" id="Email" placeholder="Email" required />
              <label for="Email">Email</label>
            </div>

            <div className="form-floating my-4">
              <input type="date" className="form-control" name="dob" id="dob" placeholder="Date" required/>
              <label for="dob">Date Of Birth</label>
            </div>

            <div className="form-floating my-4">
              <input type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" required />
              <label for="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Register
            </button>

            <div className="checkbox mb-3 mt-3">
              <label>Have an Account ? Login Now</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
