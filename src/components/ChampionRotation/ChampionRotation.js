import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ChampionRotation.css";
import useFetch from "../../hooks/useFetch";
import Champion from "./Champion";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_ROTATION = `https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`;
const API_CHAMPIONS =
  "http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json";

export default function ChampionRotation() {
  const { data, loading, error } = useFetch(API_URL_ROTATION);
  const { data: allChampions, loading: loadingChamps } =
    useFetch(API_CHAMPIONS);

  const championsRotationIds = data?.freeChampionIdsForNewPlayers;

  let arrOfChamps = [];
  if (allChampions) {
    arrOfChamps = Object.entries(allChampions.data).map(([k, info]) => ({
      info,
    }));
  }

  const champions = arrOfChamps
    .filter((champ) => {
      return championsRotationIds?.includes(parseInt(champ.info.key));
    })
    .map((item) => {
      return <Champion key={item.info.key} champion={item} />;
    });

  if (error) alert(error);

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
