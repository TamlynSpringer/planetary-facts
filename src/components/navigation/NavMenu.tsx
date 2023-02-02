import React from 'react'
import { Planet } from '../../types/planetType';

export interface NavMenuProps {
  onClick: () => void;
  planet: Planet;
};

const NavMenu = ({ onClick, planet }: NavMenuProps) => {
  return (
    <button
    onClick={onClick}
    className='font-sans font-bold text-white border-b border-white/10 py-5 px-0 flex justify-between place-items-center w-full tracking-wider'>
      <span>{planet}</span>
      <i className="fa-regular fa-chevron-right"></i>
    </button>
  )
}

export default NavMenu;