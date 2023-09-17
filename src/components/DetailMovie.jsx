/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import Navbar from './Navbar';

function DetailMovie({ options }) {
	const { id } = useParams();
	const [detailMovie, setDetailMovie] = useState({});
	const [isLoading, setIsLoading] = useState(null);

	async function getMovieDetail() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
				options
			);
			const data = await res.json();
			setDetailMovie(data);
			setIsLoading(true);
		} catch (e) {
			console.log(e);
		}
	}
	useEffect(() => {
		getMovieDetail();
	}, []);
	const {
		backdrop_path: backdropImage,
		poster_path: posterImage,
		original_title: title,
		release_date: releaseDate,
		overview,
		runtime,
		genres,

		spoken_languages,
	} = detailMovie;
	let hour = Math.floor(runtime / 60);
	let minute = runtime % 60;
	return (
		<>
			<div
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original${backdropImage})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					height: '100%',
				}}
				className="detail"
			>
				<Navbar />

				{isLoading ? (
					<div className="detail__container">
						<div className="detail__image">
							<img
								src={`https://image.tmdb.org/t/p/original${posterImage}`}
								alt=""
							/>
						</div>
						<div className="detail__content">
							<h1
								data-testid="movie-title"
								className="detail__content--title"
							>
								{title}
							</h1>
							<div className="detail__extra">
								<span
									data-testid="movie-release-date"
									className="detail__content--release"
								>
									{releaseDate}
								</span>
								<span
									data-testid="movie-runtime"
									className="detail__content--runtime"
								>
									{`${hour}hr.${minute}m`}
								</span>
								<div>
									{spoken_languages &&
										spoken_languages.map(lang => (
											<span key={lang.id}>{lang.name}</span>
										))}
								</div>
								<div className="detail__content--genres">
									{genres &&
										genres.map(genre => (
											<span key={genre.id}>{genre.name}</span>
										))}
								</div>
							</div>

							<p
								data-testid="movie-overview"
								className="detail__content--overview"
							>
								{overview}
							</p>
						</div>
					</div>
				) : (
					<ReactBootStrap.Spinner animation="border" className="spi" />
				)}
			</div>
		</>
	);
}

export default DetailMovie;
