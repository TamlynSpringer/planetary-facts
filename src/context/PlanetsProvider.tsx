import { createContext, ReactElement, useEffect, useState } from "react";
import data from '../assets/data';
console.log(data);

export type PlanetType = {
  name: string,
  overview: { content: string, source: string },
  structure: { content: string, source: string },
  geology: { content: string, source: string },
  rotation: string,
  revolution: string,
  radius: string,
  temperature: string,
  images: { planet: string; internal: string; geology: string };
};

const initState: PlanetType[] = [data];
console.log(initState)

export type usePlanetsContextType = { planets: PlanetType[] }

const initContextState: usePlanetsContextType = { planets: [] }

const PlanetsContext = createContext<usePlanetsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const PlanetsProvider = ({ children }: ChildrenType): ReactElement => {
  const [planets, setPlanets] = useState<PlanetType[]>(initState);

  return (
    <PlanetsContext.Provider value={{ planets }}>
      {children}
    </PlanetsContext.Provider>
  )
};

export default PlanetsContext;