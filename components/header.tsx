import { FC } from 'react';

type HeaderProps = {
	title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<h1 className="text-4xl font-bold text-teal-400 h-50 w-screen p-10 fixed top-0 content-center flex justify-center">
			{title}
		</h1>
	);
};
