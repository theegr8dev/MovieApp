import SearchMovie from './SearchMovie';

/* eslint-disable react/prop-types */
function SearchList({ searchMovies }) {
	return (
		<>
			<div className="overlay"></div>
			<ul className="list searchList">
				{searchMovies.map(searchMovie => (
					<SearchMovie searchMovie={searchMovie} key={searchMovie.id} />
				))}
			</ul>
		</>
	);
}

export default SearchList;
