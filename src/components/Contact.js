import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h1 className="h3 mb-3 text-center">Contact Us</h1>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label"><b>Full Name :</b></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label"><b>Email :</b></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label"><b>Message :</b></label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button className="btn btn-lg btn-primary" type="submit">
                  Send Message
                </button>
              </div>
            </form>

            <p className="mt-4 mb-0 text-muted text-center">
            Copyright &copy; 2024 Daily News. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
