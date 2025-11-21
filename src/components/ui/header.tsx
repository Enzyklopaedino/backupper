import { Squirrel } from 'lucide-react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
	title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<Link
			to="/"
			className="flex justify-start flex-row space-x-2 w-screen top-0 fixed py-2 px-4 border-b"
		>
			<h1 className="text-2xl font-semibold">{title}</h1>
			<Squirrel className="self-center" />
		</Link>
	);
};
