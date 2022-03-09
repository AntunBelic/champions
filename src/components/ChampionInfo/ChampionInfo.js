import React from "react";
import { ChampionContainer, ChampionName } from "./ChampionInfo.style";

export default function ChampionInfo({ clicked, loading, loadingChamps }) {
  return (
    <>
      {loading && loadingChamps ? (
        <h1>Loading...</h1>
      ) : (
        <ChampionContainer>
          <ChampionName>15</ChampionName>
        </ChampionContainer>
      )}
    </>
  );
}
