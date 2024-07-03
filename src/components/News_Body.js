import React, { useState } from "react";
import NewsList from "./NewsList";
import '../styles/News_Body.css'
import { Row, Col, Nav, Form, FormControl, Button, Container,Dropdown, DropdownButton} from "react-bootstrap";

function News_Body() {

  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState('in');

  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  const handleCountrySelect = (selectedCountry)=>{
    setCountry(selectedCountry);
  }

  return (
    <>
    <div className="news-body">

      {/* Search row & Country selection row */}
        <Row className="justify-content-center px-4 py-4">
          <Col xs={8} md={5}>
            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl type="text" placeholder="Search" className="me-3 form-control-sm" name="search" />
              <Button variant="outline-success" type="submit"> Search </Button>
            </Form>
          </Col>

          <Col xs={1} md={1}>
            <DropdownButton title="Select Country" onSelect={handleCountrySelect} variant='success'>
              <Dropdown.Item eventKey="in"> <b>India</b> </Dropdown.Item>
              <Dropdown.Item eventKey="us"> <b>United States</b> </Dropdown.Item>
              <Dropdown.Item eventKey="au"> <b>Australia</b> </Dropdown.Item>
              <Dropdown.Item eventKey="fr"> <b>France</b> </Dropdown.Item>
              <Dropdown.Item eventKey="cn"> <b>China</b> </Dropdown.Item>
              <Dropdown.Item eventKey="br"> <b>Brazil</b> </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>


      {/* Category & News Body row*/}
        <Container>
          <Row>
            <Col xs={12} md={3} lg={2} className="categories-sidebar">
              <h4>Categories :</h4>
              <Nav className="flex-column ">
                <Nav.Link onClick={() => handleCategoryClick("general")}> General</Nav.Link>
                <Nav.Link onClick={() => handleCategoryClick("business")}> Business</Nav.Link>
                <Nav.Link onClick={() => handleCategoryClick("technology")}> Technology</Nav.Link>
                <Nav.Link onClick={() => handleCategoryClick("sports")}> Sports</Nav.Link>
                <Nav.Link onClick={() => handleCategoryClick("entertainment")}> Entertainment </Nav.Link>
              </Nav>
            </Col>

            <Col xs={12} md={9}>
              <NewsList category={category} searchTerm={searchTerm} country={country} />          {/* NewsList Component */}
            </Col>

          </Row>
        </Container>
        
      </div>
    </>
  );
}

export default News_Body;
