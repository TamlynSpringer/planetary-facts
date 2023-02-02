import Accordion from "../components/Accordion";
import PlanetContainer from "../components/PlanetContainer";
import PlanetStats from "../components/PlanetStats";
import { Planet, PlanetData, Wiki } from "../types/planetType";
import { PlanetUtils } from "../utils/planetUtils";

export interface PlanetFactsProps {
	onClick: (wiki: Wiki) => void;
  setSelectedWiki: (value: React.SetStateAction<Wiki>) => void;
	planet: Planet;
	wiki: Wiki;
  planetData: PlanetData;
}

const PlanetFacts = ({ onClick, planet, wiki, planetData, setSelectedWiki }: PlanetFactsProps) => {
  console.log(planetData);
  console.log(wiki);
  console.log(PlanetUtils.wikiOptions[1]);

  return (
    <>
    <main className='text-white h-auto'>
      <PlanetContainer planetData={planetData} planet={planet} wiki={wiki} onClick={onClick} />
      <PlanetStats planetData={planetData} />
      {/* <Accordion planetData={planetData} planet={planet} wiki={wiki} />    */}
    </main>
    </>
  )
};

export default PlanetFacts;
