/* eslint-disable react/prop-types */

function SocialImage({ icon }) {
	return (
		<div>
			<img src={icon.src} alt={icon.alt} />
		</div>
	);
}
export default SocialImage;
