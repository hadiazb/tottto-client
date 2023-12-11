import { FC } from 'react';
import { Footer, Header } from '..';

export interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header
				contact='Escribenos por WhatsApp: 302 2200200 | Servicio al Cliente'
				slide={
					<p className='text-white text-sm'>
						<span className='text-yellow-400'>NUEVA</span> COLECCIÓN DISNEY PETS
					</p>
				}
				actions={{ order: 'MIS PEDIDOS' }}
			/>
			<div className='px-1 mx-2 max-w-screen-xl sm:mx-auto sm:px-3 md:px-5'>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
