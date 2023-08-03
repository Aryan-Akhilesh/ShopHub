import { Container, Row, Col } from "react-bootstrap";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>ShopHub © {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
