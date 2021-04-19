import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BreweryCard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaBeer, FaLocationArrow, FaPhone } from "react-icons/fa";

const BreweryCard = ({ data }) => {
  return (
    <Container>
      <Row>
        {data.map((brewery) => (
          <>
            <Col className='row' md={4} key={brewery.id}>
              <div className='brewery-card'>
                <p>{brewery.name}</p>
                <p>
                  <FaBeer /> {brewery.brewery_type.toUpperCase()} Brewery
                </p>
                <p>
                  <FaLocationArrow /> {brewery.city}, {brewery.country},{" "}
                  {brewery.postal_code}
                </p>
                <FaPhone />{" "}
                <a href={`tel: ${brewery.phone}`}>{brewery.phone}</a>
              </div>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};

export default BreweryCard;
