import { CircularProgress } from '@/src/components/ui/progress';
import type { FC } from 'react';

export const Home: FC = () => {
	return (
		<div className="flex items-center flex-col">
			<CircularProgress
				value={64}
				size={120}
				strokeWidth={10}
				showLabel
				labelClassName="text-xl font-bold"
				renderLabel={(progress) => `${progress}%`}
				className="stroke-indigo-500/25"
				progressClassName="stroke-indigo-600"
			/>
			<div className="flex flex-row space-x-4">
				<div className="flex flex-col">
					<div className="text-xs text-gray-400">Total space</div>
					<div className="flex flex-row items-center space-x-2">
						<div className="bg-indigo-500/25 rounded-full w-4 h-4" />
						<div className="text-sm font-semibold">2 TB</div>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="text-xs text-gray-400">Space used</div>
					<div className="flex flex-row items-center space-x-2">
						<div className="bg-indigo-600 rounded-full w-4 h-4" />
						<div className="text-sm font-semibold">1.3 TB</div>
					</div>
				</div>
			</div>
		</div>
	);
};
