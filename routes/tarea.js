var db = require('../db');

exports.new = function(req, res){
  db.models.Lista.find(
    req.params.id
    ,
    function(err, lista){
      res.render('tareas/new', {
        title: 'Nueva tarea',
        lista: lista
      });
    }
  );
};

exports.create = function(req, res){
  db.models.Tarea.create(
    {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      listaId: req.params.id
    },
    function(err, tarea){
      res.redirect('/listas/' + tarea.listaId);
    }
  );
};

