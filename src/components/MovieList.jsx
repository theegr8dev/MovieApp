/* eslint-disable react/prop-types */
import MovieItem from './MovieItem';
import chevronRight from '../assets/chevron-right.svg';
function MovieList({ popularMovie, dispatch }) {
	return (
		<div className="movie">
			<div className="movie__title">
				<h2>Featured Movie</h2>
				<a href="#">
					See more
					<img src={chevronRight} alt="icon" />
				</a>
			</div>

			<ul className="movieList">
				{popularMovie.map(movie => (
					<MovieItem movie={movie} key={movie.id} dispatch={dispatch} />
				))}
			</ul>
		</div>
	);
}

export default MovieList;
