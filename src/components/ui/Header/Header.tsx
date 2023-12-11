import { FC } from 'react';
import Logo from '../../../assets/totto-icon.webp';

export interface HeaderProps {
	contact: string;
	slide: JSX.Element;
	actions: {
		order: string;
	};
}

const Header: FC<HeaderProps> = ({ contact, slide, actions }) => {
	return (
		<div className='h-28 px-1 py-5 mx-2 max-w-screen-xl sm:mx-auto sm:px-3 md:px-5'>
			<div className='flex justify-end items-center py-1 h-[20%]'>
				<p className='text-sm text-slate-400'>{contact}</p>
			</div>
			<div className='h-[60%] flex flex-row justify-between items-center'>
				<img src={Logo} alt='logo' className='w-32 h-auto' />
				<div>
					<p>{actions.order}</p>
				</div>
			</div>
			<div className='bg-black h-[30px] flex flex-row justify-center items-center absolute left-0 right-0'>{slide}</div>
		</div>
	);
};

export default Header;
