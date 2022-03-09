import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ChampionRotation.css";

export default function ChampionRotation({
  champions,
  loading,
  loadingChamps,
}) {
  return (
    <>
      {loading && loadingChamps ? (
        <h1>Loading...</h1>
      ) : (
        <Container mx={"auto"} fluid className="rotation__container">
          <Row className="gy-5">
            <Col xs={{ span: 8, offset: 2 }}>
              <h1 className="rotation__title">Champions rotation</h1>
            </Col>
          </Row>
          <Row
            xs={"auto"}
            md={5}
            className="justify-content-center gy-3 gx-1 champ__spacer"
          >
            {champions}
          </Row>
        </Container>
      )}
    </>
  );
}
