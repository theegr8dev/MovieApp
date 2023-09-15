import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

function Logo() {
	return (
		<Link to="/">
			<div className="logo">
				<img src={logo} alt="Logo" />
			</div>
		</Link>
	);
}

export default Logo;
