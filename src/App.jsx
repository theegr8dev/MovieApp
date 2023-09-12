// const API_KEY = '5fd2c5b6122804b8765573783b027be1';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import { useEffect, useReducer } from 'react';
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
};
function reducer(state, action) {
	switch (action.type) {
		case 'dataReceived':
			return { ...state, popularMovie: action.payload };
	}
}
function App() {
	const [{ popularMovie }, dispatch] = useReducer(reducer, initalState);
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
			options
		)
			.then(res => res.json())
			.then(data =>
				dispatch({
					type: 'dataReceived',
					payload: data.results.slice(0, 12),
				})
			);
	}, []);
	return (
		<>
			<Header />
			<MovieList popularMovie={popularMovie} />
			<Footer />
		</>
	);
}

export default App;
