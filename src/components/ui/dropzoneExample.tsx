'use client';

import { uploadFile } from '@/src/api/post';
import {
	Dropzone,
	DropzoneContent,
	DropzoneEmptyState,
} from '@/src/components/ui/dropzone';
import { useState } from 'react';

const Example = () => {
	const [files, setFiles] = useState<File[] | undefined>();

	const handleDrop = (files: File[]) => {
		console.log(files);
		setFiles(files);
		for (const file of files) {
			uploadFile(file);
		}
	};

	return (
		<Dropzone
			className="my-8"
			maxFiles={3}
			onDrop={handleDrop}
			onError={console.error}
			src={files}
		>
			<DropzoneEmptyState />
			<DropzoneContent />
		</Dropzone>
	);
};

export default Example;
