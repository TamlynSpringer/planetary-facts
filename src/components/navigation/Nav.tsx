import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiX, FiMenu } from 'react-icons/fi';
import { Planet, Wiki } from '../../types/planetType';
import NavBurger from './NavBurger';
import NavBar from './NavBar';


export interface NavProps {
	onNavigate: (path: string) => void;
	planet: Planet;
}

const Nav = ({ onNavigate, planet }: NavProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	};

  return (
    <motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
		>
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center">

				<div className="flex justify-between items-center lg-px-10 px-2 text-2xl text-white font-extrabold lg:text-4xl">
              <Link to='/'>
                The planets
              </Link> 

					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
					
				</div>

				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<div className="block text-left text-lg text-white hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
						<NavBurger
						onClick={(planet: Planet) => {
							onNavigate(`/${planet}`)
							
						}}
						/>
					</div>
				</div>
			</div>

			<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
				<div
					className="block text-left text-lg font-medium text-white hover:text-secondary-dark sm:mx-4 mb-2 sm:py-2"
					aria-label="Planets"
				>
					<NavBar onClick={(planet: Planet) => onNavigate(`${planet}`)} />
				</div>				
			</div>
		</motion.nav>
	)
};

export default Nav;
    