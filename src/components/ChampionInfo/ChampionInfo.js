import React from "react";
import useFetch from "../../hooks/useFetch";
import {
  ChampionContainer,
  ChampionName,
  ChampionImg,
  ChampionStory,
  ChampionStatsContainer,
  ChampionStats,
  ChampionStat,
  ChampionStatValue,
  Back,
} from "./ChampionInfo.style";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ChampionInfo() {
  const params = useParams();
  const { championId } = params;
  const API_CHAMPIONS = `http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${championId}.json`;
  const { data: champInfo, error } = useFetch(API_CHAMPIONS);
  const champ = champInfo?.data;

  if (error) alert(error);

  return (
    <>
      {!champ ? (
        <h1>Loading...</h1>
      ) : (
        <ChampionContainer>
          <ChampionName>{champ[championId].id}</ChampionName>

          <ChampionImg
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ[championId].id}_0.jpg`}
            alt={champ[championId].id}
          ></ChampionImg>

          <ChampionStory>{champ[championId].blurb}</ChampionStory>
          <ChampionStatsContainer>
            <ChampionStats>
              <ChampionStat>Role: </ChampionStat>
              <ChampionStatValue>{champ[championId].tags[0]}</ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>Health: </ChampionStat>
              <ChampionStatValue>
                {champ[championId].stats.hp}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>Mana: </ChampionStat>
              <ChampionStatValue>
                {champ[championId].stats.mp}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>Armor: </ChampionStat>
              <ChampionStatValue>
                {champ[championId].stats.armor}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>Attack: </ChampionStat>
              <ChampionStatValue>
                {champ[championId].stats.attackdamage}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>Ultimate: </ChampionStat>
              <ChampionStatValue>
                {champ[championId].spells[3].name}
              </ChampionStatValue>
            </ChampionStats>
          </ChampionStatsContainer>
          <Back>
            <Link to={"/"}> Back </Link>
          </Back>
        </ChampionContainer>
      )}
    </>
  );
}
