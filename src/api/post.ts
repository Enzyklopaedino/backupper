export async function uploadFile(file: File) {
	const formData = new FormData();
	formData.append('file', file);

	const backendURL = import.meta.env.PUBLIC_BACKEND_URL;
	if (!backendURL) {
		throw new Error('The environement variable BACKEND_URL is missing');
	}

	const response = await fetch(`${backendURL}/api/download`, {
		method: 'POST',
		body: formData,
	});

	console.log(response.text());
}

export async function getDiskInfo() {
	const backendURL = import.meta.env.PUBLIC_BACKEND_URL;
	if (!backendURL) {
		throw new Error('The environement variable BACKEND_URL is missing');
	}

	console.log('disk space is being called');
	const response = await fetch(`${backendURL}/api/diskspace`, {
		method: 'GET',
	});
	const parse = await response.json();
	console.log(`response ${parse}`);
	console.log('disk space time wooo');
}
