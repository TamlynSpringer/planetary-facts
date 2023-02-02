import React from 'react';
import { Wiki, Planet, PlanetData } from '../types/planetType';
import { PlanetUtils } from '../utils/planetUtils';

export interface PlanetContainerProps {
	onClick: (wiki: Wiki) => void;
	planet: Planet;
	wiki: Wiki;
  planetData: PlanetData;
};

const PlanetContainer = ({ onClick, planet, wiki, planetData }: PlanetContainerProps) => {
  return (
    <section>
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
  </section>
  )
};

export default PlanetContainer;