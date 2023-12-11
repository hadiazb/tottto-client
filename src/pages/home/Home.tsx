import { Layout } from '../../components';
import { useCreateOrUpdateUser, useRetrieveUserForm } from '../../hooks';

const Home = () => {
	const {
		handleSubmitEmail,
		registerEmail,
		isValid,
		showSecondForm,
		onSubmitEmail,
		loading,
		defaultValuesRef,
		currentUser,
		getValues,
		setShowSecondForm,
		existUser,
	} = useRetrieveUserForm();

	const { registerRegister, handleSubmitRegister, isValidRegister, errorsRegister, onSubmitRegister, loadingRegister, getValuesRegister } =
		useCreateOrUpdateUser({
			user: currentUser ?? null,
			email: getValues('email'),
			setShowSecondForm,
			existUser,
		});

	return (
		<Layout>
			<main className='min-h-[60vh] mt-16 flex flex-col justify-start'>
				{!showSecondForm ? (
					<div>
						<div className='mb-5'>
							<p className='text-center text-[26px] font-extrabold mb-8'>
								Ingresa tu correo para validarte en nuestra base de datos y continuar con el proceso.
							</p>
							<form onSubmit={handleSubmitEmail(onSubmitEmail)} className='flex flex-col items-center'>
								<input
									type='text'
									className='border border-solid border-black-700 rounded-sm h-14 w-full px-2 mb-4 opacity-90'
									placeholder='Email'
									defaultValue={defaultValuesRef.current.email}
									{...registerEmail('email')}
								/>
								<button
									type='submit'
									className={`bg-black w-[120px] py-2 px-6 text-white rounded-3xl pointer ${!isValid ? 'opacity-60' : 'opacity-100'}`}
									disabled={!isValid}
								>
									{!loading ? 'Enviar' : 'Enviando...'}
								</button>
							</form>
						</div>

						<hr className='border border-solid border-black-100 my-2' />

						<div className='flex flex-col justify-center items-center my-8'>
							<p className='text-black text-base font-extrabold mb-3'>¿Necesitas ayuda?</p>
							<p className='text-black text-base font-extrabold'>Linea nacional 01 8000 510203 - Bogota 390 73 93</p>
							<p className='text-black text-base font-extrabold'>Email: servicioalcliente@totto.com</p>
							<p className='text-black text-base font-extrabold'>o escribenos a la linea de WhatsApp: 302 220 0200</p>
						</div>
					</div>
				) : (
					<form className='mb-10 flex flex-col justify-between' onSubmit={handleSubmitRegister(onSubmitRegister)}>
						<label className='mb-5'>
							<input
								type='text'
								{...registerRegister('email')}
								className='border border-solid border-black-700 rounded-sm h-14 w-full px-2 opacity-90'
								placeholder='Email'
							/>
							{errorsRegister && errorsRegister.email?.message && <p className='text-red-400 text-xs pl-2'>{errorsRegister.email?.message}</p>}
						</label>
						<label className='mb-5'>
							<input
								type='text'
								{...registerRegister('identification')}
								className='border border-solid border-black-700 rounded-sm h-14 w-full px-2 opacity-90'
								placeholder='Identificación'
							/>
							{errorsRegister && errorsRegister.identification?.message && (
								<p className='text-red-400 text-xs pl-2'>{errorsRegister.identification?.message}</p>
							)}
						</label>
						<label className='mb-5'>
							<input
								type='text'
								{...registerRegister('firstName')}
								className='border border-solid border-black-700 rounded-sm h-14 w-full px-2 opacity-90'
								placeholder='Nombre'
							/>
							{errorsRegister && errorsRegister.firstName?.message && (
								<p className='text-red-400 text-xs pl-2'>{errorsRegister.firstName?.message}</p>
							)}
						</label>
						<label className='mb-5'>
							<input
								type='text'
								{...registerRegister('lastName')}
								className='border border-solid border-black-700 rounded-sm h-14 w-full px-2 opacity-90'
								placeholder='Apellido'
							/>
							{errorsRegister && errorsRegister.lastName?.message && <p className='text-red-400 text-xs pl-2'>{errorsRegister.lastName?.message}</p>}
						</label>
						<label className='mb-5'>
							<input
								type='text'
								{...registerRegister('phone')}
								className='border border-solid border-black-700 rounded-sm h-14 w-full px-2 opacity-90'
								placeholder='Numero Movil'
							/>
							{errorsRegister && errorsRegister.phone?.message && <p className='text-red-400 text-xs pl-2'>{errorsRegister.phone?.message}</p>}
						</label>
						<label className='mb-5'>
							<input
								type='text'
								{...registerRegister('address')}
								className='border border-solid border-black-700 rounded-sm h-14 w-full px-2 opacity-90'
								placeholder='Departamento'
							/>
							{errorsRegister && errorsRegister.address?.message && <p className='text-red-400 text-xs pl-2'>{errorsRegister.address?.message}</p>}
						</label>
						<label className='mb-5'>
							<input
								type='text'
								{...registerRegister('birthday')}
								className='border border-solid border-black-700 rounded-sm h-14 w-full px-2 opacity-90'
								placeholder='Fecha de Nacimiento (año/mm/dd)'
							/>
							{errorsRegister && errorsRegister.birthday?.message && <p className='text-red-400 text-xs pl-2'>{errorsRegister.birthday?.message}</p>}
						</label>

						<div className='my-3 '>
							<p className='my-3 text-slate-400'>¿Tienes hijos?</p>
							<div className='w-28 flex flex-row justify-between items-center'>
								<label className='text-slate-400 pointer'>
									<input type='radio' className='mr-2' value='yes' id='isFather' {...registerRegister('isFather')} />
									Si
								</label>
								<label className='text-slate-400 pointer'>
									<input type='radio' className='mr-2' value='not' id='isFather' {...registerRegister('isFather')} />
									No
								</label>
							</div>
						</div>

						<div className='my-3 '>
							<p className='my-3 text-slate-400'>Genero</p>
							<div className='w-52 flex flex-row justify-between items-center'>
								<label className='text-slate-400 pointer'>
									<input type='radio' className='mr-2' value='yes' id='sex' {...registerRegister('sex')} />
									Masculino
								</label>
								<label className='text-slate-400 pointer'>
									<input type='radio' className='mr-2' value='not' id='sex' {...registerRegister('sex')} />
									Femenino
								</label>
							</div>
						</div>
						<div className='my-3'>
							<label className='flex justify-start items-center underline font-bold text-sm pointer'>
								<input type='checkbox' className='mr-2' {...registerRegister('tyc')} />
								Acepto los tyc para la actualización de datos
							</label>
						</div>

						<div className='my-3'>
							<label className='flex justify-start items-center underline font-bold text-sm pointer'>
								<input type='checkbox' className='mr-2' {...registerRegister('ttd')} />
								Autorizo el tratamiento de mis datos personales
							</label>
						</div>

						<div className='w-full flex justify-center items-center my-4'>
							<button
								type='submit'
								className={`bg-black w-[120px] py-2 px-6 text-white rounded-3xl pointer ${
									!(isValidRegister && getValuesRegister('tyc') && getValuesRegister('ttd')) ? 'opacity-60' : 'opacity-100'
								}`}
								disabled={!isValidRegister && getValuesRegister('tyc') && getValuesRegister('ttd')}
							>
								{!loadingRegister ? 'ENVIAR' : 'ENVIANDO...'}
							</button>
						</div>
					</form>
				)}
			</main>
		</Layout>
	);
};

export default Home;
