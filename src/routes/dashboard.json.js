import dashboard from './_dashboard.js';
const dashboard_content = JSON.stringify(dashboard.map(content => {
	return {
		html: content.html,
	};
}));

console.log('dashboard_content', dashboard_content);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(dashboard_content);
}
