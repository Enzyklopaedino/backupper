//import assert from 'node:assert';

export async function uploadFile(file: File) {
	const formData = new FormData();
	formData.append('file', file);

	const backendURL = process.env.BACKEND_URL ?? 'http://localhost:3000';
	//	assert(backendURL);

	const response = await fetch(backendURL, {
		method: 'POST',
		body: formData,
	});

	console.log(response.text());
}
