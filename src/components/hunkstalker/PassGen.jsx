import './styles.css'

const PassGen = () => {
	return (
		<div id='container'>
			<header id='header'>
				<img src='/logo.png' alt='Hacktoberfest' />
			</header>
			<h1 className='text-center font-special font-bold'>Password Generator</h1>
			<div className='card'>
				<div>
					<input id='input-text' type='text' placeholder='Password'></input>
					<button id='copy-btn'>
						<img src='' alt='copy' />
					</button>
				</div>
				<input id='input-range' type='range'></input>
			</div>
		</div>
	)
}

export default PassGen
