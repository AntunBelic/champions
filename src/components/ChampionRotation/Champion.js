import React from "react";
import { Col } from "react-bootstrap";

export default function Champion({ champion }) {
  return (
    <Col key={champion.info.key}>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champion.info.image.full}`}
        alt={champion.info.id}
      ></img>
    </Col>
  );
}
