
var render = require('../../../site/render');

var apiAuthCheck = require('../../../apps/auth/middleware/api-auth-check')

function main(request, reply) {
  reply.type('text/html').send(render('SITE/app.pug', {
    appName: 'namegen',
    cssFiles: [
      '/static/namegen/css/bootstrap.min.css'
    ]
  }));
}

module.exports = function(fastify, options, next) {

  fastify.get('/', main);

  fastify.all('/api/public-langs', require('./api/public-langs'));
  fastify.all('/api/language-info/:languageId', require('./api/language-info'));
  fastify.all('/api/generate/:type/:languageId', require('./api/generate'));
  fastify.all('/api/language/:languageId', require('./api/language'));

  fastify.post('/api/private-langs', { beforeHandler: [apiAuthCheck] }, require('./api/private-langs'));
  fastify.post('/api/create-language', { beforeHandler: [apiAuthCheck] }, require('./api/create-language'));
  fastify.post('/api/edit-language/:languageId', { beforeHandler: [apiAuthCheck] }, require('./api/edit-language'));
  fastify.post('/api/delete-language/:languageId', { beforeHandler: [apiAuthCheck] }, require('./api/delete-language'));

  next();
}
