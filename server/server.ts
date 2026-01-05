import { mkdir } from 'node:fs/promises';
import assert from 'node:assert';

Bun.serve({
	port: import.meta.env.BACKEND_PORT,
	async fetch(request) {
		console.log('downloading a file');
		const frontendURL = import.meta.env.FRONTEND_URL;

		if (!frontendURL) {
			throw new Error('The environement variable FRONTEND_URL is missing');
		}

		const corsHeaders = {
			'Access-Control-Allow-Origin': frontendURL,
			'Access-Control-Allow-Methods': 'POST,GET,PUT,OPTIONS',
			'Access-Control-Allow-Headers': '',
		};

		const form = await request.formData();
		const file = form.get('file');
		await mkdir('uploads', { recursive: true });

		assert(file instanceof File);

		await Bun.write(`server/uploads/${file.name}`, file);

		return new Response('OK', {
			headers: corsHeaders,
		});
	},
});
