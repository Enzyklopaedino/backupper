import { getDiskInfo } from '@/src/api/post';
import { BackupProgress } from '@/src/components/ui/backup-progress';
import Example from '@/src/components/ui/dropzoneExample';
import type { FC } from 'react';

export const Home: FC = () => {
	getDiskInfo();
	return (
		<div className="flex items-center flex-col space-y-16 pt-6">
			<BackupProgress />
			<Example />
		</div>
	);
};
