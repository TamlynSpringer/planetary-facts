import { Planet } from '../../types/planetType';
import { PlanetUtils } from '../../utils/planetUtils'
import NavItem from './NavItem';
import NavMenu from './NavMenu';

export interface NavBarProps {
  onClick: (planet: Planet) => void;
};

export const NavBar = ({ onClick }: NavBarProps) => {
  return (
      <nav className="p-5 pt-10 w-full hidden place-items-center md:flex md:justify-evenly md:px-0 md:py-1 xl:flex-1 xl:p-0 xl:absolute xl:top-0 xl:right-0 xl:w-1/2">
          {PlanetUtils.options.map((planet) => (
              <NavItem key={planet} planet={planet} onClick={() => onClick(planet)} />
          ))}
      </nav>
  );
};

export default NavBar;

/*
const NavBar = ({ onClick, isVisible }: NavBarProps) => {
  if (isVisible) {
    return (
      <nav className='h-full w-screen fixed bg-black-500 justify-center pt-24 px-6 z-20 md:hidden'>
        {PlanetUtils.options.map((planet) => (
          <NavMenu key={planet} planet={planet} onClick={() => onClick(planet)} />
        ))}
      </nav>
    )
  }
};
*/