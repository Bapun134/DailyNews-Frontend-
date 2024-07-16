import React, { useContext, useEffect, useState } from "react";
import NewsList from "./NewsList";
import '../styles/News_Body.css';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Nav, Form, FormControl, Button, Container, Dropdown, DropdownButton } from "react-bootstrap";
import CountryFlag from 'react-country-flag';

function News_Body() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  // Checking if the user is authenticated
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/login');
    }
  }, [auth, navigate]);

  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState('in');
  const [selectedCountryName, setSelectedCountryName] = useState('Country');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.search.value);
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);

    const countryNames = {
      in: 'India',
      us: 'United States',
      au: 'Australia',
      fr: 'France',
      cn: 'China',
      br: 'Brazil'
    };

    setSelectedCountryName(countryNames[selectedCountry]);
    setSearchTerm("");
  }

  const categoryLabels = {
    general: "General",
    business: "Business",
    technology: "Technology",
    sports: "Sports",
    entertainment: "Entertainment",
    health:"Health"
  };

  return (
    <>
      <div className="wrapper">
        <div className="news-body">

          {/* Search row */}
          <Row className="px-2 py-3 justify-content-center">
            <Col xs={8} md={4}>
              <Form onSubmit={handleSearch} className="d-flex" >
                <FormControl type="text" placeholder="🔍" className="me-2 form-control-sm" name="search" style={{ border: '1px solid' }} />
                <Button variant="light" type="submit"> Search</Button>
              </Form>
            </Col>
          </Row>

          {/* Country - Category & News Body row */}
          <Container style={{ maxWidth: '90%' }}>
            <Row>
              <Col xs={12} md={3} lg={2} className="categories-sidebar">
                
                {/* Country Dropdown */}
                <DropdownButton
                  title={
                    <span>
                      <CountryFlag countryCode={country.toUpperCase()} svg style={{ width: '1.5em', height: '1.5em' }} className="me-2" />
                      {selectedCountryName}
                    </span>
                  }
                  variant='primary' className="mt-1" onSelect={handleCountrySelect}
                >
                  <Dropdown.Item eventKey="in">
                    <CountryFlag countryCode="IN" svg style={{ width: '2em', height: '2em' }} className="me-2" />
                    India
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="us">
                    <CountryFlag countryCode="US" svg style={{ width: '2em', height: '2em' }} className="me-2" />
                    United States
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="au">
                    <CountryFlag countryCode="AU" svg style={{ width: '2em', height: '2em' }} className="me-2" />
                    Australia
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="cn">
                    <CountryFlag countryCode="CN" svg style={{ width: '2em', height: '2em' }} className="me-2" />
                    China
                  </Dropdown.Item>
                </DropdownButton>

                {/* Categories */}
                <h5 style={{marginTop:'10px', paddingLeft:'10px'}}><b>Categories :</b></h5>
                <Nav className="flex-column">
                  <Nav.Link onClick={() => handleCategoryClick("general")}> General</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick("business")}> Business</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick("technology")}> Technology</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick("sports")}> Sports</Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick("entertainment")}> Entertainment </Nav.Link>
                  <Nav.Link onClick={() => handleCategoryClick("health")}> Health </Nav.Link>
                </Nav>
              </Col>
              
              {/* News Body */}
              <Col xs={12} md={9}>
                <Card.Body className="mb-3">
                  <Card.Title className="text-center" as="h3" style={{ backgroundColor: 'lightgrey', borderRadius: '3px', padding: '10px' }}>
                    <b>{categoryLabels[category]} News : </b>
                  </Card.Title>
                </Card.Body>
                
                <NewsList category={category} searchTerm={searchTerm} country={country} /> {/* NewsList Component */}

                
              </Col>

            </Row>
          </Container>

        </div>
      </div>
    </>
  );
}

export default News_Body;
