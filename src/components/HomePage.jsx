/* eslint-disable react/prop-types */

import Header from './Header';
import SearchList from './SearchList';
import MovieList from './MovieList';
import Footer from './Footer';

function HomePage({ popularMovie, searchMovie, dispatch }) {
	return (
		<>
			<Header />
			{searchMovie.length > 0 && <SearchList searchMovies={searchMovie} />}
			<MovieList popularMovie={popularMovie} dispatch={dispatch} />
			<Footer />
		</>
	);
}

export default HomePage;
