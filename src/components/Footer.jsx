import ig from '../assets/ig.svg';
import fb from '../assets/fb.svg';
import x from '../assets/x.svg';
import yt from '../assets/yt.svg';
import SocialImage from './SocialImage';

const socialIcon = [
	{
		src: ig,
		alt: 'Insta Icon',
	},
	{
		src: fb,
		alt: 'Facebook Icon',
	},
	{
		src: x,
		alt: 'X Icon',
	},
	{
		src: yt,
		alt: 'Youtube Icon',
	},
];

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__social">
				{socialIcon.map((icon, i) => (
					<SocialImage icon={icon} key={i} />
				))}
			</div>
			<div className="footer__links">
				<a href="#">Conditions of Use</a>
				<a href="#">Privacy & Policy</a>
				<a href="#">Press Room</a>
			</div>
			<p>&copy; 2023 MovieBox by Alabi Khalid </p>
		</footer>
	);
}

export default Footer;
