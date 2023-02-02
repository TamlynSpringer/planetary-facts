import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Home from './pages/Home';
import Landing from './pages/Landing';
import PlanetFacts from './pages/PlanetFacts';
import { Planet, PlanetData, Wiki } from './types/planetType';
import { PlanetUtils } from './utils/planetUtils';


const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(Planet.MERCURY);
  const [planetData, setPlanetData] = useState<PlanetData>();
  const [selectedWiki, setSelectedWiki] = useState<Wiki>(Wiki.overview);

  const { planetId } = useParams();

  useEffect(() => {
    if (planetId && PlanetUtils.options.includes(planetId as Planet)) {
      setSelectedPlanet(planetId as Planet);
    }
    return () => setSelectedPlanet(Planet.MERCURY);
  }, [planetId]);

  useEffect(() => {
    PlanetUtils.getData(selectedPlanet)
      .then((data) => setPlanetData(data)
      )
  }, [selectedPlanet]);

  const onClick = (e: any) => {
    setSelectedWiki(e)
  };

  const navigate = useNavigate();
  console.log(selectedWiki)

  return (
    <div className='text-white w-full min-h-screen bg-starry-pattern'>
      <Nav
      onNavigate={(path: any) => {
        navigate(path)
        setSelectedPlanet(path)
      }}
      planet={selectedPlanet}
      />
      <Routes>
        <Route path='/home' element={<Landing />} ></Route>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/:planetId' element={<PlanetFacts
          onClick={onClick}
          planet={selectedPlanet}
          wiki={selectedWiki}
          planetData={planetData}
        />} ></Route>
      </Routes>     
    </div>
  )
};

export default App;
