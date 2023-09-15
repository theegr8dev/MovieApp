import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';

function Navbar() {
	return (
		<nav className="nav">
			<Logo />
			<Search />
			<Menu />
		</nav>
	);
}

export default Navbar;
