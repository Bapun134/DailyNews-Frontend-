import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import defaultImg from '../assests/defaultImage.png';
import '../styles/NewsList.css'; // Make sure to import your CSS file

const NewsList = ({ category, searchTerm, country }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Reset currentPage to 1 whenever category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category, country]);

  const { newsData, loading, error } = useNewsData(category, searchTerm, country); // custom hook

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
          <Col xs={12} md={5} lg={3} key={article.url} style={{marginTop:'5px'}}>
            <Card className="news-card" style={{ marginTop: '10px',  borderRadius:'4px'}}>
              <Card.Img src={article.urlToImage || defaultImg} variant="top" className="news-card-img" />
              <Card.Body className="news-card-body">
                <Card.Title className="news-card-title">
                  {`${article.title?.substring(0, 40) || 'No title available'}...`}
                </Card.Title>
                <Card.Text className="news-card-text">
                  {`${article.description?.substring(0, 50) || 'No description available'}...`}
                </Card.Text>
                <Card.Text className="news-site-details">
                  {article.source?.name || 'Unknown'} - {new Date(article.publishedAt).toLocaleTimeString()}
                </Card.Text>
                <a href={article.url} target='_blank' rel="noopener noreferrer" className="btn btn-outline-primary news-card-button">
                  Read more..
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
