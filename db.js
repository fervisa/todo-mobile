var Schema = require('jugglingdb').Schema;
var schema = new Schema('sqlite3', { database: 'db/db.sql' });

var Lista = schema.define('Lista', {
  nombre: String,
  descripcion: String,
  creacion: { type: Date, default: function() { return new Date;} }
}, {
  path: '/listas/' + this.id
});
 
var Tarea = schema.define('Tarea', {
  nombre: String,
  descripcion: String,
  creacion: { type: Date, default: function() { return new Date;} },
  finalizacion: Date,
  finalizada: String
}, {
  resPath: '/listas/' + 'listaId' + '/tareas'
});

Lista.hasMany(Tarea);
Tarea.belongsTo(Lista);

// Esta línea BORRA TODA LA BASE DE DATOS y la recrea
// schema.automigrate();

schema.isActual(function(err, actual) {
  if (!actual) {
    schema.autoupdate(function(){
      console.log('Base de datos actualizada a la última versión');
    });
  }
});

module.exports.models = schema.models;
