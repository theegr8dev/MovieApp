// const API_KEY = '5fd2c5b6122804b8765573783b027be1';
import { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailMovie from './components/DetailMovie';
import HomePage from './components/HomePage';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmQyYzViNjEyMjgwNGI4NzY1NTczNzgzYjAyN2JlMSIsInN1YiI6IjY0ZmY3OGY3MmRmZmQ4MDBlM2QzODIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0lkHu9OeWaIWICpaYRXAPz19ylYNVkoUEYbmC3Kkkho',
	},
};
const initalState = {
	movieId: '',
	popularMovie: [],
	searchMovie: [],
	detailMovie: [],
};
function reducer(state, action) {
	switch (action.type) {
		case 'popularMovie':
			return { ...state, popularMovie: action.payload };
		case 'searchMovie':
			return { ...state, searchMovie: action.payload };
		case 'idReceived':
			return { ...state, movieId: action.id };
		case 'detailMovie':
			return { ...state, detailMovie: action.payload };
	}
}
function App() {
	const [{ popularMovie, searchMovie, detailMovie }, dispatch] = useReducer(
		reducer,
		initalState
	);

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

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								popularMovie={popularMovie}
								dispatch={dispatch}
								searchMovie={searchMovie}
							/>
						}
					/>

					<Route
						path="movies/:id"
						element={
							<DetailMovie
								options={options}
								dispatch={dispatch}
								detailMovie={detailMovie}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
