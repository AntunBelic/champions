import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ChampionRotation({ champions }) {
  return (
    <Container mx={"auto"} style={{ maxWidth: "740px" }} fluid>
      <Row className="gy-5">
        <Col xs={{ span: 8, offset: 2 }}>
          <h1 style={{ textAlign: "center" }}>Champions rotation</h1>
        </Col>
      </Row>
      <Row xs={"auto"} md={5} className="justify-content-center gy-3 gx-1">
        {champions}
      </Row>
    </Container>
  );
}
