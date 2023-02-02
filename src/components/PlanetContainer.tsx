import React from 'react';
import { Wiki, Planet, PlanetData } from '../types/planetType';
import { PlanetUtils } from '../utils/planetUtils';

export interface PlanetContainerProps {
	onClick: (wiki: Wiki) => void;
	planet: Planet;
	wiki: Wiki;
  planetData: PlanetData | undefined;
};

const PlanetContainer = ({ onClick, planet, wiki, planetData }: PlanetContainerProps) => {
  const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <section className='xl:flex xl:place-items-center bg-starry-pattern'>
      <div className='w-full h-width flex justify-center place-items-center p-6 relative sm:h-[20rem] md:h-[30rem] xl:h-[35rem] 2xl:h-[40rem] bg-starry-pattern'>
        <img 
        className='h-5/6'
        src={`${PlanetUtils.getImage(wiki, planetData)}`}
        alt={`${planet} ${wiki}`}
        />
      </div>
      <div className='md:flex justify-between place-items-center xl:block xl:w-[50%]'>
        <article className='grid grid-cols-1 gap-5 p-5 text-center place-content-between h-auto md:text-left md:w-1/2 xl:w-full'>
          <h2 className='text-4xl font-semibold'>{planetData?.name}</h2>
          <h3 className='text-2xl'>{capitalizeFirst(wiki)}:</h3>
          <p>{`${PlanetUtils?.getWikiInfo(wiki, planetData)?.content}`}</p>
          <a href={`${PlanetUtils?.getWikiInfo(wiki, planetData)?.source}`}>Source:  Wikipedia <i className='fa-solid fa-arrow-up-right-from-square'></i></a>
          <p></p>
        </article>
      <div className='flex gap-2 md:gap-4 lg:gap-5 xl:gap-6 xl:px-5'>
        {PlanetUtils.wikiOptions.map((wiki, index) => (
        <button
        className='justify-between place-items-center flex-row rounded-lg mx-auto m-2 px-6 py-2.5 bg-blue-700 text-white font-medium text-md leading-tight hover:bg-blue-900 focus:bg-blue-900 focus:outline-none focus:ring-0 current:bg-blue-900 border-solid border-2 border-blue-700 hover:border-blue-900 active:border-sky-400 current:border-sky-400 transition duration-150 ease-in-out'
        onClick={() => onClick(wiki)}
        key={index}
        value={wiki}
        >{capitalizeFirst(wiki)}
        </button>
        ))}
      </div>      
    </div>   
  </section>
  )
};

export default PlanetContainer;