var Schema = require('jugglingdb').Schema;
var schema = new Schema('sqlite3', { database: 'db/db.sql' });

var Lista = schema.define('Lista', {
  nombre: String,
  descripcion: String,
  creacion: Date
});
 
var Tarea = schema.define('Tarea', {
  nombre: String,
  descripcion: String,
  creacion: Date,
  finalizacion: Date,
  finalizado: Boolean
});

Lista.hasMany(Tarea, { as: 'tareas', foreignKey: 'tareaId' });
Tarea.belongsTo(Lista, { as: 'lista', foreignKey: 'listaId' });

// schema.automigrate();

schema.isActual(function(err, actual) {
  if (!actual) {
    schema.autoupdate(function(){
      console.log('Base de datos actualizada a la última versión');
    });
  }
});

module.exports.models = schema.models;
