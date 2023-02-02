import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from '../../types/planetType';
import NavBurger from './NavBurger';
import NavBar from './NavBar';
import logo from './../../../public/assets/logo.png'

export interface NavProps {
	onNavigate: (path: string) => void;
	planet: Planet;
	onClick: () => void;
}

const Nav = ({ onNavigate, planet, onClick }: NavProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [isNavOpen, setIsNavOpen] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	};

  return (
		<div className="flex items-center justify-between border-b border-gray-400 py-6 px-4">
			<Link to='/'>
				<img src={logo} alt="logo" className='w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4'/>
			</Link>
			<nav>
				<section className="MOBILE-MENU flex lg:hidden">
					<div
						className="HAMBURGER-ICON space-y-2"
						onClick={() => setIsNavOpen((prev) => !prev)}
					>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
						<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
					</div>

					<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
						<div
							className="absolute top-0 right-0 px-8 py-8"
							onClick={() => setIsNavOpen(false)}
						>
							<svg
								className="h-8 w-8 text-gray-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
						<NavBurger
						onClick={(planet: Planet) => onNavigate(`${planet}`)}
						/>
					</div>
				</section>
				<div className="DESKTOP-MENU hidden space-x-8 lg:flex">
					<NavBar onClick={(planet: Planet) => onNavigate(`${planet}`)} />
      	</div>
			</nav>
			<style>{`
			.hideMenuNav {
				display: none;
			}
			.showMenuNav {
				padding: 1rem;
				display: block;
				position: absolute;
				width: 100%;
				top: 0;
				left: 0;
				z-index: 10;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
			}
		`}</style>
		</div>
	)
};

export default Nav;
