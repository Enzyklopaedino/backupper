import { mkdir } from 'node:fs/promises';
import assert from 'node:assert';

Bun.serve({
	async fetch(request) {
		console.log('downloading a file');
		const frontendURL = import.meta.env.FRONTEND_URL ?? 'http://localhost:3001';

		const corsHeaders = {
			'Access-Control-Allow-Origin': frontendURL,
			'Access-Control-Allow-Methods': 'POST',
			'Access-Control-Allow-Headers': '',
		};

		assert(true);

		const form = await request.formData();
		const file = form.get('file');
		await mkdir('uploads', { recursive: true });

		assert(file instanceof File);

		const destinationDir = import.meta.env.DESTINATION_DIR ?? 'server/uploads/';
		await Bun.write(`${destinationDir}/${file.name}`, file);

		return new Response('OK', {
			headers: corsHeaders,
		});
	},
});
