
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , lista = require('./routes/lista')
  , tarea = require('./routes/tarea')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// rutas
app.get('/', routes.index);
// listas
app.get('/listas', lista.index);
app.get('/listas/new', lista.new);
app.post('/listas/new', lista.create);
app.get('/listas/:id', lista.show);
app.get('/listas/:id/finalizadas', lista.finalizadas);
app.get('/listas/:id/info', lista.info);
// tareas
app.get('/listas/:id_lista/tareas/new', tarea.new);
app.get('/listas/:id_lista/tareas/:id/finalizar', tarea.finalizar);
app.get('/listas/:id_lista/tareas/:id/reactivar', tarea.reactivar);
app.post('/listas/:id_lista/tareas/new', tarea.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
