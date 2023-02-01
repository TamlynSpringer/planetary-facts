import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { Planet, PlanetData, Wiki } from '../types/planetType';
import { PlanetUtils } from '../utils/planetUtils';
import PlanetFacts from './PlanetFacts';

const Home = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(Planet.MERCURY);
  const [planetData, setPlanetData] = useState<PlanetData>();
  const [selectedWiki, setSelectedWiki] = useState<Wiki>(Wiki.OVERVIEW);

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

  const navigate = useNavigate();
  return (
    <>
      <Nav
      onNavigate={(path: string) => navigate(path)}
      planet={selectedPlanet}
      />
      <Header />
      <PlanetFacts
      onWikiSelect={(wiki: Wiki) => setSelectedWiki(wiki)}
      planet={selectedPlanet}
      wiki={selectedWiki}
      planetData={planetData}
      />
    </>
  )
};

export default Home;