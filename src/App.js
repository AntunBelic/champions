import React from "react";
import useFetch from "./hooks/useFetch";
import ChampionRotation from "./components/ChampionRotation/ChampionRotation";
import Champion from "./components/ChampionRotation/Champion";

function App() {
  const API_KEY = "RGAPI-ed269ddd-015e-4c5e-addd-c1c44f0078ab";
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
      return <Champion key={item.info.key} champion={item} />;
    });

  console.log(championsRotationIds);
  console.log(champions1);
  console.log(arrOfChamps);

  if (error) alert(error);

  return (
    <div className="App">
      {loading && loadingChamps ? (
        <p>Loading...</p>
      ) : (
        <ChampionRotation champions={champions1} />
      )}
    </div>
  );
}

export default App;
