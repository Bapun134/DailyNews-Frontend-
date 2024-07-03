import React from "react";
import "../styles/About.css"; // Assuming you have a separate CSS file for styling

const About = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container py-3">
          <h1 className="mt-5 mb-4">About Us</h1>
          <p className="lead">
            Welcome to Daily Insight News, your trusted source for breaking news, insightful analysis, and in-depth coverage of global events. Our mission is to provide accurate and timely information across various topics including politics, business, technology, sports, and entertainment.
          </p>
          <p>
            At Daily Insight News, we are committed to delivering high-quality journalism that informs and engages our readers. Our dedicated team of journalists and editors work tirelessly to bring you the latest updates and stories that matter most.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-dark text-light">
        <div className="container text-center">
          <p>Copyright © 2024 Daily News. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
