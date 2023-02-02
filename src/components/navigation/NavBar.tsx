import { Planet } from '../../types/planetType';
import { PlanetUtils } from '../../utils/planetUtils'
import NavItem from './NavItem';

export interface NavBarProps {
  onClick: (planet: Planet) => void;
};

export const NavBar = ({ onClick }: NavBarProps) => {
  return (
    <>
      {PlanetUtils.options.map((planet) => (
          <NavItem key={planet} planet={planet} onClick={() => onClick(planet)} />
      ))}
    </>
  );
};

export default NavBar;