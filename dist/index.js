'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nunjucks2.default.configure('./dist');

var server = new _hapi2.default.Server();

server.connection({
	host: 'localhost',
	port: 8000
});

server.route({
	method: 'GET',
	path: '/hello/{fname}/{lname}',
	handler: function handler(request, reply) {
		_nunjucks2.default.render('index.html', {
			fname: request.params.fname,
			lname: request.params.lname
		}, function (err, html) {
			reply(html);
		});
	}
});

server.start();