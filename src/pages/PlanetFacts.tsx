import Accordion from "../components/Accordion";
import Stats from "../components/Stats";
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
      <div>
        <div className='h-full'>
          <img 
          className='h-80'
          src={`${PlanetUtils.getImage(wiki, planetData)}`}
          alt={`${planet} ${wiki}`}
          />
        </div>
          <h2>{planetData?.name}</h2>
          <p>{`${PlanetUtils?.getWikiInfo(wiki, planetData)?.content}`}</p>
          <p>{`${PlanetUtils?.getWikiInfo(wiki, planetData)?.source}`}</p>
        <div>
          {PlanetUtils.wikiOptions.map((wiki, index) => (
          <button
          onClick={() => onClick(wiki)}
          key={index}
          value={wiki}
          >{wiki}
          </button>
          ))}
        </div>   
      </div>

      {/* <Accordion planetData={planetData} planet={planet} wiki={wiki} />    */}
    </main>
    </>
  )
};

export default PlanetFacts;
