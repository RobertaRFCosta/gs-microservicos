import { useState } from 'react';
import './App.css';
import OceanData from './OceanData/OceanData';
import Search from './Search/search';

function App() {
  const [responseData, setResponseData] = useState([]);
  const [region, setRegion] = useState('');
  const [species, setSpecies] = useState('');
  const [conservationStatus, setConservationStatus] = useState('');
  const [waterTemperature, setWaterTemperature] = useState('');
  const [pH, setPH] = useState('');
  const [polutionLevels, setPolutionLevels] = useState('');
  const myHeaders = new Headers();

  const filters = [
    {
      label: 'region',
      onChange: setRegion,
    },
    {
      label: 'species',
      onChange: setSpecies,
    },
    {
      label: 'conservation status',
      onChange: setConservationStatus,
    },
    {
      label: 'water temperature',
      onChange: setWaterTemperature,
    },
    {
      label: 'pH',
      onChange: setPH,
    },
    {
      label: 'polution levels',
      onChange: setPolutionLevels,
    },
  ]

  async function getData() {
    let url = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData';
    let hasParameters = false;

    if (region) {
      url += `${hasParameters ? '' : '?'}regiao={${region}}`;
      hasParameters = true;
    }
    if (species) {
      url += `${hasParameters ? '&' : '?'}especie={${species}}`;
    }
    if (conservationStatus) {
      url += `${hasParameters ? '&' : '?'}nivelPoluicao={${conservationStatus}}`;
    }
    if (waterTemperature) {
      url += `${hasParameters ? '&' : '?'}temperaturaAgua={${waterTemperature}}`;
    }
    if (pH) {
      url += `${hasParameters ? '&' : '?'}pH={${pH}}`;
    }
    if (polutionLevels) {
      url += `${hasParameters ? '&' : '?'}nivelPoluicao={${polutionLevels}}`;
    }

    try {
      var myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
      };
      const response = await fetch(url, myInit);
      
      const data = await response.json();
  
      setResponseData(data);

    } catch (e) {
      throw (e)
    }
  }

  return (
    <div className="App">
      <header >
      </header>
      <fieldset className="filters">
        <h2>Filters</h2>
      {filters.map((filter, key) => <Search key={key} searchName={filter.label} onChange={filters.onChange} />)}
      <button onClick={getData}>search</button>
      </fieldset>
      
      <fieldset>
        <OceanData data={responseData}/>
      </fieldset>
    </div>
  );
}

export default App;
