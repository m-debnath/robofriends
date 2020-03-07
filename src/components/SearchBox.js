import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div>
			<input 
				className="pa3 mb3 ba b--light-blue bg-lightest-blue" 
				type="search" 
				placeholder="search friends" 
				onChange={searchChange} 
			/>
		</div>
		);
}

export default SearchBox;