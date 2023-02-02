import PlanetContainer from '../components/PlanetContainer';
import PlanetStats from '../components/PlanetStats';
import { Planet, PlanetData, Wiki } from '../types/planetType';

export interface PlanetFactsProps {
	onClick: (wiki: Wiki) => void;
  setSelectedWiki: (value: React.SetStateAction<Wiki>) => void;
	planet: Planet;
	wiki: Wiki;
  planetData: PlanetData;
};

const PlanetFacts = ({ onClick, planet, wiki, planetData, setSelectedWiki }: PlanetFactsProps) => {
  return (
    <>
      <main className='pt-36 grid grid-cols-1 justify-center md:pt-0 xl:justify-items-center sm:p-5 xl:w-[1240px] 2xl:w-[1300px]'>
        <PlanetContainer planetData={planetData} planet={planet} wiki={wiki} onClick={onClick} />
        <PlanetStats planetData={planetData} />
      </main>
    </>
  )
};

export default PlanetFacts;
