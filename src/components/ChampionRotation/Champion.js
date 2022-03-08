import React from "react";
import { Col } from "react-bootstrap";
import "./ChampionRotation.css";

export default function Champion({ champion }) {
  return (
    <Col key={champion.info.key}>
      <div className="champion__container">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champion.info.image.full}`}
          alt={champion.info.id}
          className="champion__img"
        ></img>
        <div className="champion__overlay champion__overlay--blur">
          <h5 className="champion__title">{champion.info.id}</h5>
        </div>
      </div>
    </Col>
  );
}
