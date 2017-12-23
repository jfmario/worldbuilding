
var render = require('../../../site/render');

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
  fastify.all('/api/generate/:type/:languageId', require('./api/generate'));

  next();
}
