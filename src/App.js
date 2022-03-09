import React from "react";
import useFetch from "./hooks/useFetch";
import ChampionRotation from "./components/ChampionRotation/ChampionRotation";
import Champion from "./components/ChampionRotation/Champion";
import ChampionInfo from "./components/ChampionInfo/ChampionInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const API_KEY = "RGAPI-042d22c3-69f9-4fb4-b8fb-13505755384e";
  const API_URL_ROTATION = `https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`;
  const API_CHAMPIONS =
    "http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json";

  const { data, loading, error } = useFetch(API_URL_ROTATION);
  const { data: allChampions, loading: loadingChamps } =
    useFetch(API_CHAMPIONS);

  const [clicked, setClicked] = React.useState([]);

  const championsRotationIds = data?.freeChampionIdsForNewPlayers;

  let arrOfChamps = [];
  if (allChampions) {
    arrOfChamps = Object.entries(allChampions.data).map(([k, info]) => ({
      info,
    }));
  }

  const champions = arrOfChamps.filter((champ) => {
    return championsRotationIds?.includes(parseInt(champ.info.key));
  });
  const champions1 = champions?.map((item) => {
    return (
      <Champion key={item.info.key} champion={item} handleShow={handleShow} />
    );
  });

  console.log(championsRotationIds);
  console.log(champions);
  console.log(arrOfChamps);
  console.log(clicked);

  function handleShow(e) {
    console.log(e);
    setClicked(
      champions?.filter((item) => {
        return item.info.key === e.target.id ? { ...item } : null;
      })
    );
  }

  if (error) alert(error);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ChampionRotation
                champions={champions1}
                loading={loading}
                loadingChamps={loadingChamps}
              />
            }
          />
          <Route
            path="/ChampionInfo"
            element={
              <ChampionInfo
                clicked={clicked}
                loading={loading}
                loadingChamps={loadingChamps}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
