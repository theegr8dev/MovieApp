// const API_KEY = '5fd2c5b6122804b8765573783b027be1';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import { useEffect, useReducer, useState } from 'react';
import SearchList from './components/SearchList';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmQyYzViNjEyMjgwNGI4NzY1NTczNzgzYjAyN2JlMSIsInN1YiI6IjY0ZmY3OGY3MmRmZmQ4MDBlM2QzODIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0lkHu9OeWaIWICpaYRXAPz19ylYNVkoUEYbmC3Kkkho',
	},
};
const initalState = {
	popularMovie: [],
	searchMovie: [],
};
function reducer(state, action) {
	switch (action.type) {
		case 'popularMovie':
			return { ...state, popularMovie: action.payload };
		case 'searchMovie':
			return { ...state, searchMovie: action.payload };
	}
}
function App() {
	const [{ popularMovie, searchMovie }, dispatch] = useReducer(
		reducer,
		initalState
	);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
			options
		)
			.then(res => res.json())
			.then(data =>
				dispatch({
					type: 'popularMovie',
					payload: data.results.slice(0, 12),
				})
			);
	}, []);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?query=${search}`,
			options
		)
			.then(res => res.json())
			.then(data =>
				dispatch({
					type: 'searchMovie',
					payload: data.results,
				})
			);
	}, [search]);
	return (
		<>
			<Header search={search} setSearch={setSearch} />
			{searchMovie.length > 0 && <SearchList searchMovies={searchMovie} />}
			<MovieList popularMovie={popularMovie} />
			<Footer />
		</>
	);
}

export default App;
