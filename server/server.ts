import { mkdir } from 'node:fs/promises';
import assert from 'node:assert';
import { check } from 'diskusage';

Bun.serve({
	port: import.meta.env.BACKEND_PORT,
	async fetch(request) {
		const frontendURL = import.meta.env.FRONTEND_URL;

		if (!frontendURL) {
			throw new Error('The environement variable FRONTEND_URL is missing');
		}

		const corsHeaders = {
			'Access-Control-Allow-Origin': frontendURL,
			'Access-Control-Allow-Methods': 'POST,GET,PUT,OPTIONS',
			'Access-Control-Allow-Headers': '',
		};

		const url = new URL(request.url);

		if (url.pathname === '/api/download') {
			await downloadFile(request, corsHeaders);
		}

		if (url.pathname === '/api/diskspace') {
			return await getDiskInfo(corsHeaders);
		}

		return new Response('Not Found', {
			status: 404,
			headers: corsHeaders,
		});
	},
});

function bytesToTB(bytes: number): number {
	return Number((bytes / 1024 ** 4).toFixed(1));
}

async function getDiskInfo(corsHeaders) {
	console.log('getting disk info');
	const { total, free, available } = await check('/');
	const used = total - free;

	console.log(
		`disk info: ${bytesToTB(total)}, ${bytesToTB(used)}, ${bytesToTB(available)}`,
	);

	const diskInfo = {
		total: bytesToTB(total),
		used: bytesToTB(used),
		free: bytesToTB(available),
	};

	return new Response(JSON.stringify(diskInfo), {
		status: 200,
		headers: { ...corsHeaders, 'Content-Type': 'application/json' },
	});
}

async function downloadFile(request, corsHeaders) {
	console.log('downloading a file');
	const form = await request.formData();
	const file = form.get('file');
	await mkdir('uploads', { recursive: true });

	assert(file instanceof File);

	await Bun.write(`/server/uploads/${file.name}`, file);

	return new Response('OK', {
		headers: corsHeaders,
	});
}
