import {Link} from 'react-router-dom';
import { Navbar,Container,} from "react-bootstrap";
import  '../styles/App_Header.css'

function App_Header() {

  const date  = new Date();
  const currentDate = date.toLocaleDateString();

  return (
    <>
      <Navbar bg="light" expand="lg" className="p-2">
        <Container>
          <Navbar.Brand className="fw-bold fs-4">
            DailyNews
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </Navbar.Collapse>

          <span className="nav-item date-item mx-4">Date: {currentDate}</span>

          
          <span className="nav-item ">
              <Link className="nav-link" to="/login">Login</Link>
          </span>

          <span className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
          </span>
          

        </Container>
      </Navbar>

    </>
  )
}

export default App_Header