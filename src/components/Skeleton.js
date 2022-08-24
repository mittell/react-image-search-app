import React from 'react';

const Skeleton = ({ items }) => {
	return [...Array(items).keys()].map((data, id) => {
		return (
			<div className='animate-pulse' key={id}>
				<div className='bg-gray-300 rounded-lg h-72'></div>
			</div>
		);
	});
};

export default Skeleton;
