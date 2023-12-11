const Footer = () => {
	const listOptsCol1 = [
		{
			key: 1,
			text: 'Quiénes somos',
		},
		{
			key: 2,
			text: 'Linea Ética',
		},
		{
			key: 3,
			text: 'Aviso de privacidad',
		},
		{
			key: 4,
			text: 'Talento Totto',
		},
		{
			key: 5,
			text: 'Sostenibilidad',
		},
		{
			key: 6,
			text: 'Prensa',
		},
		{
			key: 7,
			text: 'Negocios Empresariales',
		},
		{
			key: 8,
			text: 'Politica de Tratamiento de Datos',
		},
	];

	const listOptsCol2 = [
		{
			key: 1,
			text: 'Servicio al cliente',
		},
		{
			key: 2,
			text: 'Encuentra tu tienda',
		},
		{
			key: 3,
			text: 'Tiendas Totto Pets',
		},
		{
			key: 4,
			text: 'Promociones vigentes',
		},
		{
			key: 5,
			text: 'Envios y Entregas',
		},
		{
			key: 6,
			text: 'Cambios y Devoluciones',
		},
		{
			key: 7,
			text: 'Escribenos por WhatsApp',
		},
		{
			key: 8,
			text: 'Keypago, paga facil',
		},
	];

	const listOptsCol3 = [
		{
			key: 1,
			text: 'Te damos la bienvenida registrando y/o actualizando tus datos, recibe 10% de descuento en tu próxima compra redimelo unicamente en nuestra tienda online.',
		},
		{
			key: 2,
			text: 'Y además disfruta 25% de descuento en tu compra en el mes de cumpleaños.',
		},
		{
			key: 3,
			text: '*Los descuentos de registro/actualización y cumpleaños no son acumulables. *Aplican términos y condiciones.',
		},
		{
			key: 4,
			text: 'Aplica para productos sin descuento o full price.',
		},
	];

	return (
		<div className='bg-black mt-1 relative text-white'>
			<div className='px-1 py-5 mx-2 max-w-screen-xl sm:mx-auto sm:px-3 md:px-5 h-full flex flex-row items-start justify-between relative'>
				<div className='w-1/5 mr-5'>
					<ul className='list-none'>
						{listOptsCol1.map((opt) => (
							<li key={opt.key}>
								<p className='text-[12px] text-white-100 leading-6'>{opt.text}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='w-1/5 mr-5'>
					<ul className='list-none'>
						{listOptsCol2.map((opt) => (
							<li key={opt.key}>
								<p className='text-[12px] text-white-100 leading-6'>{opt.text}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='w-1/5 mr-5'>
					<p className='pb-2'>Siguenos</p>
					<ul className='list-none'>
						{listOptsCol1.map((opt) => (
							<li key={opt.key}>
								<p className='text-[12px] text-white-100 leading-6'>{opt.text}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='w-[40%]'>
					<p className='pb-2'>¡Registra o actualiza tus datos!</p>
					<ul className='list-none'>
						{listOptsCol3.map((opt) => (
							<li key={opt.key}>
								<p className='text-[12px] text-white-100 leading-5 mb-2'>{opt.text}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
