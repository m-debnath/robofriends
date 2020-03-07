import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{'overflowY': 'scroll', 'height': '700px'}} className="bt b--white" >
			{ props.children }
		</div>
	);
}

export default Scroll;
