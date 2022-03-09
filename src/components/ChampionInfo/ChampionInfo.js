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
} from "./ChampionInfo.style";
import { useParams } from "react-router-dom";

export default function ChampionInfo() {
  const params = useParams();
  const { championId } = params;
  const API_CHAMPIONS = `http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${championId}.json`;
  const { data: champInfo, loading, error } = useFetch(API_CHAMPIONS);
  const champ = champInfo?.data;

  console.log("abs", params);
  console.log("champ info", champ);

  if (error) alert(error);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ChampionContainer>
          <ChampionName>{champ?.[championId].id}</ChampionName>
          <ChampionImg
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ?.[championId].id}_0.jpg`}
            alt={champ?.[championId].id}
          ></ChampionImg>
          <ChampionStory>{champ?.[championId].blurb}</ChampionStory>
          <ChampionStatsContainer>
            <ChampionStats>
              <ChampionStat>Role : </ChampionStat>
              <ChampionStatValue>
                {champ?.[championId].tags[0]}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>HP : </ChampionStat>
              <ChampionStatValue>
                {champ?.[championId].stats.hp}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>MP : </ChampionStat>
              <ChampionStatValue>
                {champ?.[championId].stats.mp}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>Armor : </ChampionStat>
              <ChampionStatValue>
                {champ?.[championId].stats.armor}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>Attack : </ChampionStat>
              <ChampionStatValue>
                {champ?.[championId].stats.attackdamage}
              </ChampionStatValue>
            </ChampionStats>
            <ChampionStats>
              <ChampionStat>Spells : </ChampionStat>
              <ChampionStatValue>
                {champ?.[championId].spells[0].name}
              </ChampionStatValue>
              <ChampionStatValue>
                {champ?.[championId].spells[1].name}
              </ChampionStatValue>
              <ChampionStatValue>
                {champ?.[championId].spells[2].name}
              </ChampionStatValue>
              <ChampionStatValue>
                {champ?.[championId].spells[3].name}
              </ChampionStatValue>
            </ChampionStats>
          </ChampionStatsContainer>
        </ChampionContainer>
      )}
    </>
  );
}
