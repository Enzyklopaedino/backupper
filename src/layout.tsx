import { Footer } from '@/src/components/ui/footer';
import { Header } from '@/src/components/ui/header';
import type { PropsWithChildren, FC } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			<Header title="Backupper" />
			{children}
			<Footer />
		</div>
	);
};
