/* eslint-disable react/prop-types */

function MovieItem({ movie }) {
	return (
		<div className="movieCard" data-testid="movie-card">
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
		</div>
	);
}

export default MovieItem;
