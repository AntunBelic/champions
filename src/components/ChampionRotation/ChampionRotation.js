import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ChampionRotation({ champions }) {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <h1 style={{ textAlign: "center" }}>Champions rotation</h1>
        </Col>
      </Row>
      <Row>{champions}</Row>
    </Container>
  );
}
