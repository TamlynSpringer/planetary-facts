import React from 'react'
import { Planet } from '../../types/planetType';
import { PlanetUtils } from '../../utils/planetUtils';

export interface NavItemProps {
  onClick: () => void;
  planet: Planet;
}

const NavItem = ({ onClick, planet }: NavItemProps) => {
  const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <button 
    key={planet}
    onClick={onClick}
    className='font-sans font-bold text-white text-s relative flex justify-center place-items-center group pt-8 opacity-75 hover:opacity-100 tracking-wide'>
      <span className={`h-1 w-full ${PlanetUtils.colors[planet].accent} absolute opacity-0 top-0 transition-all ease-in-out duration-300 xl:block xl:group-hover:opacity-100 `}/>
      {capitalizeFirst(planet)}
    </button>
  )
}

export default NavItem