import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { AuthContext } from '../context/AuthProvider';
import '../styles/App_Header.css';
import { FaNewspaper, FaRegLifeRing, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

function App_Header() {
  const { auth, deauthenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    deauthenticateUser();
    navigate('/');
  };

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
                <Link className="nav-link" to="/magazine">Magazines</Link>
              </li>
            </ul>
          </Navbar.Collapse>

          {/* register, login, logout section in navbar */}

          {auth.isAuthenticated ? (
            <Dropdown alignRight >
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:'0px'}}>
                <FaUserCircle size={24} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.ItemText><FaUserCircle className="me-2"/> {auth.user?.name}</Dropdown.ItemText>
                <Dropdown.Divider />

                <Dropdown.Item as={Link} to="/subscription"> <FaNewspaper className="me-2" /> Subscription</Dropdown.Item>
                <Dropdown.Item as={Link} to="/help"> <FaRegLifeRing className="me-2" /> Help & Support</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}> <FaSignOutAlt className="me-2" /> Logout </Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <span className="login-item ">
                  <Link className="nav-link" to="/login">Login</Link>
              </span>

              <span className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
              </span>
            </>
          )}

        </Container>
      </Navbar>
    </>
  )
}

export default App_Header;
