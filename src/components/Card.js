import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div id={`card-${id}`} className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robohash" src={`https://robohash.org/${id}?set=set3&size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
