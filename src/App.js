import { useEffect, useState } from "react";
import HeatMap from "./components/heatMap";

function App() {
  const [heatData, setHeatData] = useState();

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setHeatData(data);
        })

  }, [setHeatData])

  return (
    <div className="App">
      <HeatMap data={heatData}/>
    </div>
  );
}

export default App;
