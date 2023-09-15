/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
	return (
		<li className="movieCard" data-testid="movie-card">
			<Link to={`movies/${movie.id}`}>
				<div className="movieCard__imageContainer">
					<img
						src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
						alt={`${movie.title} poster`}
						data-testid="movie-poster"
					/>
				</div>
				<div className="movieCard__detail">
					<p data-testid="movie-title">
						<span> {movie.title}</span>
					</p>
					<span data-testid="movie-title">
						Released Date: {movie.release_date}
					</span>
					<span>Movie Vote: {movie.vote_count}</span>
				</div>
			</Link>
		</li>
	);
}

export default MovieItem;
