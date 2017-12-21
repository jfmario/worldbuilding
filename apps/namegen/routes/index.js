
var render = require('../../../site/render');

function main(request, reply) {
  reply.type('text/html').send(render('SITE/app.pug', {
    appName: 'namegen',
    cssFiles: [
      '/static/SITE/css/bootstrap.min.css',
      '/static/SITE/css/signin.bootstrap.css'
    ]
  }));
}

module.exports = function(fastify, options, next) {

  fastify.get('/', main);

}
