import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
	return (
		<div>
			{
				users.map((user, i) => {
					return (
						<Card key={`card-${i}`} id={user.id} name={user.name} email={user.email} />
					);
				})
			}
		</div>
	);
}

export default CardList;
