import { PropsWithChildren, FC } from 'react';

export const Background: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="bg-slate-900 w-screen h-screen flex items-center justify-center">
			{children}
		</div>
	);
};
