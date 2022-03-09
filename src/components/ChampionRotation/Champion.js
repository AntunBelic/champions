import React from "react";
import { Col } from "react-bootstrap";
import "./ChampionRotation.css";
import { Link } from "react-router-dom";

export default function Champion({ champion, handleShow }) {
  return (
    <Col key={champion.info.key}>
      <Link to={"/ChampionInfo"}>
        <div className="champion__container">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${champion.info.image.full}`}
            alt={champion.info.id}
            className="champion__img"
          ></img>
          <div
            className="champion__overlay champion__overlay--blur"
            id={champion.info.key}
            onClick={handleShow}
          >
            <h5 className="champion__title" id={champion.info.key}>
              {champion.info.id}
            </h5>
          </div>
        </div>
      </Link>
    </Col>
  );
}
