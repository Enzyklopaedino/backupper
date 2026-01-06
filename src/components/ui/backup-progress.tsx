import { getDiskInfo } from '@/src/api/post';
import {
	ItemContent,
	ItemDescription,
	ItemTitle,
} from '@/src/components/ui/item';
import { CircularProgress } from '@/src/components/ui/progress';
import { Item } from '@radix-ui/react-navigation-menu';
import type { FC } from 'react';

export const BackupProgress = () => {
	getDiskInfo();
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
			<Item className="flex flex-row space-x-4">
				<BackupDescription
					description="Total space"
					value="2 TB"
					color="bg-indigo-500/25"
				/>
				<BackupDescription
					description="Space used"
					value="1.3 TB"
					color="bg-indigo-600"
				/>
			</Item>
		</div>
	);
};

type DescriptionBackupProps = {
	description: string;
	value: string;
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
				<ItemTitle className="text-sm">{value}</ItemTitle>
			</div>
		</ItemContent>
	);
};
