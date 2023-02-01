import React from 'react';
import { Planet } from '../types/planetType';
import { PlanetUtils } from '../utils/planetUtils';
import NavItem from './NavItem';

export interface NavBurgerProps {
  onClick: (planet: Planet) => void;
};

const NavBurger = ({ onClick }: NavBurgerProps) => {
  return (
    <nav>
      {PlanetUtils.options.map((planet) => (
        <NavItem key={planet} planet={planet} onClick={() => onClick(planet)} />
      ))}
    </nav>
  )
};

export default NavBurger;