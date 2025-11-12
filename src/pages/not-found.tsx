import { Button } from '@/src/components/ui/button';
import { NutOff } from 'lucide-react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => {
	return (
		<div className="flex flex-col items-center justify-center space-y-6 p-10 h-full">
			<div className="flex flex-col space-y-14">
				<div className="flex flex-col space-y-4">
					<div className="flex flex-row space-y-3 items-center">
						<h1 className="text-8xl">4</h1>
						<NutOff className="size-20 self-center" />
						<h1 className="text-8xl">4</h1>
					</div>
					<div className="flex flex-col items-center">
						<h2 className="text text-gray-600">Page not found</h2>
					</div>
				</div>

				<Link to="/">
					<div className="flex flex-col items-center justify-center w-full">
						<Button className="bg-indigo-600">Return home?</Button>
					</div>
				</Link>
			</div>
		</div>
	);
};
