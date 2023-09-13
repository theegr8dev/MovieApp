/* eslint-disable react/prop-types */
function SearchMovie({ searchMovie }) {
	return (
		<li>
			<img
				src={`https://image.tmdb.org/t/p/original${searchMovie.poster_path}`}
				alt={`${searchMovie.title} poster`}
				data-testid="movie-poster"
			/>
			<h3>{searchMovie.title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{searchMovie.release_date}</span>
				</p>
			</div>
		</li>
	);
}

export default SearchMovie;
