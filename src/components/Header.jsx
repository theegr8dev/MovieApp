/* eslint-disable react/prop-types */

import Navbar from './Navbar';
import HeaderDescription from './HeaderDescription';
function Header() {
	return (
		<header className="header">
			<Navbar />
			<HeaderDescription />
		</header>
	);
}

export default Header;
