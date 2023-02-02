import { PlanetData } from '../types/planetType';

export interface PlanetStatsProps {
  planetData: PlanetData;
}

const PlanetStats = ({planetData}: PlanetStatsProps) => {
  return (
    <section>
    <p>{planetData?.revolution}</p>
    <p>{planetData?.rotation}</p>
    <p>{planetData?.radius}</p>
    <p>{planetData?.temperature}</p>
  </section>
  )
}

export default PlanetStats