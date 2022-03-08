import React from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const API_KEY = "RGAPI-e9ae8d30-9dd6-49a5-8ca1-8ab46703b91e";
  const API_URL_ROTATION = `https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`;
  const API_CHAMPIONS =
    "http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json";

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

  const champions1 = arrOfChamps
    .filter((champ) => {
      return championsRotationIds?.includes(parseInt(champ.info.key));
    })
    .map((item) => {
      return (
        <div key={item.info.key}>
          <h4>{item.info.id}</h4>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${item.info.image.full}`}
            alt={item.info.id}
          ></img>
        </div>
      );
    });

  console.log(championsRotationIds);
  console.log(champions1);
  console.log(arrOfChamps);

  if (error) alert(error);

  return (
    <div className="App">
      <h1>Champions rotation</h1>
      {loading && loadingChamps ? <p>Loading...</p> : champions1}
    </div>
  );
}

export default App;
