import Hapi from 'hapi';
import nunjucks from 'nunjucks';

nunjucks.configure('./dist');

const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
});

server.route({
	method: 'GET',
	path: '/hello/{fname}/{lname}',
	handler: function(request, reply) {
		nunjucks.render('index.html', {
			fname: request.params.fname,
			lname: request.params.lname
		}, function(err, html) {
			reply(html);
		});
	}
});

server.start();