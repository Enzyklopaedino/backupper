export async function uploadFile(file: File) {
	const formData = new FormData();
	formData.append('file', file);

	const backendURL = import.meta.env.HELLO ?? 'http://localhost:3000';

	const response = await fetch(backendURL, {
		method: 'POST',
		body: formData,
	});

	console.log(response.text());
}
