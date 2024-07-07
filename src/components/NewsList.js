import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import defaultImg from '../assests/defaultImage.png'

const NewsList = ({category, searchTerm, country}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm, country);           //custom hook

  if (loading) {
    return <div>Loading...⏳</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <Container>
      <Row>
        {currentArticles?.map((article) => (
          <Col xs={12} md={5} lg={3} key={article.url}>
            <Card style={{ padding: '3px', marginTop: '10px', boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)' }}>
              <Card.Img src={article.urlToImage || defaultImg} variant="top" />
              <Card.Body>
                <Card.Title>{`${article.title?.substring(0, 50) || 'No title available'}...`}</Card.Title>
                <Card.Text>{`${article.description?.substring(0, 50) || 'No description available'}...`}</Card.Text>
                <a href={article.url} target='_blank' rel="noopener noreferrer" className="btn btn-outline-primary">
                  Read More
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />

    </Container>
  );
};

export default NewsList;
