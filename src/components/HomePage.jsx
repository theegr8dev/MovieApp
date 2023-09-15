/* eslint-disable react/prop-types */
import Header from './Header';
import MovieList from './MovieList';
import Footer from './Footer';

function HomePage({ popularMovie, dispatch }) {
	return (
		<>
			<Header />
			<MovieList popularMovie={popularMovie} dispatch={dispatch} />
			<Footer />
		</>
	);
}

export default HomePage;
