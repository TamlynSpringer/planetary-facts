import Nav from "../components/Nav";
import { Planet, PlanetData, Wiki } from "../types/planetType";

export interface PlanetFactProps {
	onWikiSelect: (wiki: Wiki) => void;
	planet: Planet;
	wiki: Wiki;
  planetData: PlanetData;
}

const PlanetFacts = ({ onWikiSelect, planet, wiki, planetData }: PlanetFactProps) => {
  console.log(planet)

  return (
    <>
    <main>
      <div>
        <div>
        <h2>{planetData?.name}</h2>
        </div>
      </div>
    </main>
    </>
  )
};

export default PlanetFacts;