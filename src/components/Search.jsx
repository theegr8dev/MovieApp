import searchIcon from '../assets/SearchIcon.svg';

function Search() {
	return (
		<div className="search">
			<input type="text" placeholder="What do you want to watch?" />
			<img src={searchIcon} alt="search-icon" />
		</div>
	);
}

export default Search;
