import { mkdir } from 'node:fs/promises';
import assert from 'node:assert';

Bun.serve({
	port: 3000,
	async fetch(request) {
		const corsHeaders = {
			'Access-Control-Allow-Origin': 'http://localhost:3001',
			'Access-Control-Allow-Methods': 'POST',
			'Access-Control-Allow-Headers': '',
		};

		const form = await request.formData();
		const file = form.get('file');
		await mkdir('uploads', { recursive: true });

		assert(file instanceof File);
		await Bun.write(`src/server/uploads/${file.name}`, file);

		return new Response('OK', {
			headers: corsHeaders,
		});
	},
});
