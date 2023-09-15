import play from '../assets/play.svg';
import imdb from '../assets/imdb.svg';
import tomatoe from '../assets/tomatoe.svg';
function HeaderDescription() {
	return (
		<>
			<div className="description">
				<h1 className="description__header">
					John Wick 3 :<br></br>Parabellum
				</h1>
				<div className="description__rating">
					<div>
						<img src={imdb} alt="imdb" />
						<span>86.0/100</span>
					</div>
					<div>
						<img src={tomatoe} alt="tomatoe" />
						<span>97%</span>
					</div>
				</div>
				<p className="description__paragraph">
					John Wick is on the run after killing a member of the
					international assassins guild, and with a $14 million price tag
					on his head, he is the target of hit men and women everywhere.
				</p>
				<button className="description__btn">
					<img src={play} alt="play-icon" />
					<span> WATCH TRAILER</span>
				</button>
			</div>
			<div className="paginationBox"></div>
		</>
	);
}

export default HeaderDescription;
