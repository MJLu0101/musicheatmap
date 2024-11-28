import React, { useState, useEffect } from "react";
import Heatmap from "./Heatmap";
import data from "./data.json";

const App = () => {
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    setMusicData(data);
  }, []);

  return (
    <div className="app">
      <h1>January Music Heatmap</h1>
      <Heatmap data={musicData} />
    </div>
  );
};

export default App;

