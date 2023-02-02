import { PlanetData } from '../types/planetType';

export interface PlanetStatsProps {
  planetData: PlanetData;
}

const PlanetStats = ({planetData}: PlanetStatsProps) => {
  return (
    <section className='grid grid-cols-1 gap-2 pt-3 p-5 md:grid-cols-4 xl:gap-6'>
      <div className='border border-blue-800 w-full flex justify-between place-items-center p-3 rounded-xl md:grid md:grid-cols-1 md:justify-items-start md:p-4 md:gap-2 xl:gap-3'>
        <h3>Revolution</h3>
        <p>{planetData?.revolution}</p>
      </div>
      <div className='border border-blue-800 w-full flex justify-between place-items-center p-3 rounded-xl md:grid md:grid-cols-1 md:justify-items-start md:p-4 md:gap-2 xl:gap-3'>
        <h3>Rotation</h3>
        <p>{planetData?.rotation}</p>
      </div>
      <div className='border border-blue-800 w-full flex justify-between place-items-center p-3 rounded-xl md:grid md:grid-cols-1 md:justify-items-start md:p-4 md:gap-2 xl:gap-3'>
        <h3>Radius</h3>
        <p>{planetData?.radius}</p>
      </div>
      <div className='border border-blue-800 w-full flex justify-between place-items-center p-3 rounded-xl md:grid md:grid-cols-1 md:justify-items-start md:p-4 md:gap-2 xl:gap-3'>
        <h3>Temperature</h3>
        <p>{planetData?.temperature}</p>
      </div>
  </section>
  )
}

export default PlanetStats