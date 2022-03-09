import styled from "styled-components";

export const ChampionContainer = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 620px;
  height: 250px;
  margin: 20px;
  grid-template-areas:
    "img head"
    "img story"
    "img info"
    ".  back";
  grid-template-rows: 70px 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-areas:
      "head"
      "img"
      "story"
      "info"
      "back";
    width: 100%;
    max-width: 310px;
    margin: auto;
  }
`;

export const ChampionName = styled.p`
  grid-area: head;
  color: #1891f3;
  margin-left: 30px;
  align-items: center;
  font-size: 3rem;
`;

export const ChampionImg = styled.img`
  grid-area: img;
`;

export const ChampionStory = styled.p`
  grid-area: story;
  color: #c2c2c2;
`;
export const ChampionStatsContainer = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
`;
export const ChampionStats = styled.div`
  display: inline-flex;
  align-items: center;
`;
export const ChampionStat = styled.p`
  font-size: 1.2rem;
  color: #1891f3;
`;
export const ChampionStatValue = styled.p`
  font-size: 1.1rem;
  margin-left: 5px;
  color: #acacac;
`;

export const Back = styled.p`
  grid-area: back;
  font-size: 1.1rem;
  margin: 0 20px;
  color: #1891f3;
  font-weight: bold;
  text-align: end;
`;
