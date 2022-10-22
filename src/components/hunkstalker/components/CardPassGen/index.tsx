import React from 'react'

const CONSTS = {
	MIN_LENGTH: 4,
	MAX_LENGTH: 128,
	LOWCASE: 'abcdefghijklmnopqrstuvxyz',
	UPCASE: 'ABCDEFGHIJKLMNOPQRSTUVXYZ',
	NUMBERS: '0123456789',
	SPECIAL_CHARS: '£$&()*+[]@#^-_!?'
}

const CHARACTERS = {}

const shuffleArray = (charsArray = []) => {
	for (let i: number = charsArray.length - 1; i > 0; i--) {
		const j: number = Math.floor(Math.random() * (i + 1))
		;[charsArray[i], charsArray[j]] = [charsArray[j], charsArray[i]]
	}
	return charsArray
}

function CardPassGen() {
	const charCategories = 4
	const passLength = 8
	const password = ''

	const handleChange = (evt) => {
		const { value, checked } = evt.target
		if (value === 'words') {
			const obj = { ...option }
			obj.number = false
			obj.symbol = false
			obj[value] = checked
			const checkedState = document.querySelectorAll('.inputcheck-hugok2k')
			checkedState[0].checked = false
			checkedState[1].checked = false
			return setOption(obj)
		}
		if (checked) {
			const obj = { ...option }
			obj[value] = checked
			obj.words = false
			const checkedState = document.querySelectorAll('.inputcheck-hugok2k')
			checkedState[2].checked = false
			setOption(obj)
		} else {
			const obj = { ...option }
			obj[value] = checked
			setOption(obj)
		}
	}

	return (
		<>
			<div className='flex flex-column p-6 rounded-lg shadow-lg bg-amber-400 h-96 w-3/12'>
				<div>
					<input type='text' />
				</div>
				<input
					className='mx-auto'
					type='range'
					min={CONSTS.MIN_LENGTH}
					max={CONSTS.MAX_LENGTH}
					value=''
				/>
				<label className=''>Hello</label>
				<input
					type='checkbox'
					className='denis-input-check'
					value=''
					onChange={(e) => handleChange(e)}
				/>
				<input
					type='checkbox'
					className='denis-input-check'
					value=''
					onChange={(e) => handleChange(e)}
				/>
				<input
					type='checkbox'
					className='denis-input-check'
					value=''
					onChange={(e) => handleChange(e)}
				/>
				<input
					type='checkbox'
					className='denis-input-check'
					value=''
					onChange={(e) => handleChange(e)}
				/>
			</div>
		</>
	)
}

export default CardPassGen
