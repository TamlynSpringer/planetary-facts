import { useEffect, useState } from "react";

type Planet = {
  name: string;
}

const usePlanetFind = (data: any) => {
  const [planet, setPlanet]: any = useState({});
  const findPlanet = (planetName: string) => {
    const foundPlanet = data.find((planet: Planet) => planet.name === planetName);
    setPlanet(foundPlanet)
  };
  useEffect(() => {
    findPlanet('Mercury');
  }, []);
  return { planet, findPlanet };
};

export default usePlanetFind;