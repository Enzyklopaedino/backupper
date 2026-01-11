import { getDiskInfo } from '@/src/api/post';
import {
	ItemContent,
	ItemDescription,
	ItemTitle,
} from '@/src/components/ui/item';
import { CircularProgress } from '@/src/components/ui/progress';
import { Item } from '@radix-ui/react-navigation-menu';
import type { FC } from 'react';

const { total, used } = await getDiskInfo();

export const BackupProgress = () => {
	const usedPercentage = Number(((used / total) * 100).toFixed(0));
	return (
		<div className="flex items-center flex-col">
			<CircularProgress
				value={usedPercentage}
				size={120}
				strokeWidth={10}
				showLabel
				labelClassName="text-xl font-bold"
				renderLabel={() => `${usedPercentage}%`}
				className="stroke-indigo-500/25"
				progressClassName="stroke-indigo-600"
			/>
			<Item className="flex flex-row space-x-4">
				<BackupDescription
					description="Total space"
					value={total}
					color="bg-indigo-500/25"
				/>
				<BackupDescription
					description="Space used"
					value={used}
					color="bg-indigo-600"
				/>
			</Item>
		</div>
	);
};

type DescriptionBackupProps = {
	description: string;
	value: number;
	color: 'bg-indigo-500/25' | 'bg-indigo-600';
};

const BackupDescription: FC<DescriptionBackupProps> = ({
	description,
	value,
	color,
}) => {
	return (
		<ItemContent className="flex flex-col">
			<ItemDescription className="text-xs">{description}</ItemDescription>
			<div className="flex flex-row items-center space-x-2">
				<div className={`${color} rounded-full w-4 h-4`} />
				<ItemTitle className="text-sm">{`${value} TiB`}</ItemTitle>
			</div>
		</ItemContent>
	);
};
