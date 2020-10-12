import header from './_header.js';
const header_content = JSON.stringify(header.map(content => {
	return {
		html: content.html,
	};
}));

console.log('header_content', header_content);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(header_content);
}
