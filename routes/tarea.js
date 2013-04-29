var db = require('../db');

exports.new = function(req, res){
  db.models.Lista.find(
    req.params.id_lista
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
      listaId: req.params.id_lista,
      finalizada: '0'
    },
    function(err, tarea){
      res.redirect('/listas/' + tarea.listaId);
    }
  );
};

exports.edit = function(req, res){
  db.models.Tarea.find(
    req.params.id
    ,
    function(err, tarea){
      res.render('tareas/edit', {
        title: 'Editar tarea',
        tarea: tarea
      });
    }
  );
};

exports.update = function(req, res){
  db.models.Tarea.find(
    req.params.id
    ,
    function(err, tarea){
      console.log(req.body);
      tarea.updateAttributes(
        {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          finalizada: req.body.finalizada
        },
        function(err, tarea){
          console.log(tarea);
          res.redirect('/listas/' + tarea.listaId);
        }
      );
    }
  );
};

exports.finalizar = function(req, res){
  db.models.Tarea.find(
    req.params.id
    ,
    function(err, tarea){
      tarea.updateAttributes({ finalizada: '1', finalizacion: new Date() }, function(err, tarea){
        console.log(tarea);
        res.redirect('/listas/' + tarea.listaId);
      });
    }
  );
};

exports.reactivar = function(req, res){
  db.models.Tarea.find(
    req.params.id
    ,
    function(err, tarea){
      tarea.updateAttributes({ finalizada: '0', finalizacion: new Date() }, function(err, tarea){
        console.log(tarea);
        res.redirect('/listas/' + tarea.listaId + '/finalizadas');
      });
    }
  );
};
