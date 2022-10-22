import React from 'react'

function CardTitle({ title }) {
	return (
		<div className='flex justify-center mb-6'>
			<div className='flex justify-center block p-6 rounded-lg shadow-lg bg-amber-400 w-3/12'>
				<h1 className='font-mono font-semibold text-3xl text-black-600'>{title}</h1>
			</div>
		</div>
	)
}

export default CardTitle
