const FooterComponent = () => {
	return (
		<div>
			<h3 className='text-lg'>Hecho desde Málaga con ❤️</h3>
			<a
				href='https://github.com/angelgonzalezev/weddingspeeches'
				target='_blank'
				rel='noreferrer'
			>
				<img
					src={require('../assets/icons/github-icon.png')}
					alt='github'
					width={30}
				/>
			</a>
		</div>
	);
};

export default FooterComponent;
