export async function uploadFile(file: File) {
	const formData = new FormData();
	formData.append('file', file);

	const backendURL = import.meta.env.PUBLIC_BACKEND_URL;
	console.log(backendURL);
	if (!backendURL) {
		throw new Error('The environement variable BACKEND_URL is missing');
	}

	const response = await fetch(backendURL, {
		method: 'POST',
		body: formData,
	});

	console.log(response.text());
}
