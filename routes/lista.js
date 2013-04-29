var db = require('../db');

exports.index = function(req, res){
  db.models.Lista.all(function(err, listas){
    res.render('listas/index', {
      title: 'Mis listas',
      listas: listas
    });
  });
};

exports.new = function(req, res){
  res.render('listas/new', {
    title: 'Nueva lista'
  });
};

exports.create = function(req, res){
  db.models.Lista.create(
    {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion
    },
    function(err, lista){
      res.redirect('/listas/' + lista.id);
    }
  );
};

exports.show = function(req, res){
  db.models.Lista.find(
    req.params.id
    ,
    function(err, lista){
      db.models.Tarea.all({where: { listaId: lista.id, finalizada: '0' } }, function(err, tareas){
        console.log(tareas);
        res.render('listas/show', {
          title: 'Detalle de lista',
          lista: lista,
          tareas: tareas
        });
      });
    }
  );
};

exports.finalizadas = function(req, res){
  db.models.Lista.find(
    req.params.id
    ,
    function(err, lista){
      db.models.Tarea.all({ where: { listaId: lista.id, finalizada: '1' } }, function(err, tareas){
        console.log(tareas);
        res.render('listas/finalizadas', {
          title: 'Detalle de lista',
          lista: lista,
          tareas: tareas
        });
      });
    }
  );
};

exports.info = function(req, res){
  db.models.Lista.find(
    req.params.id
    ,
    function(err, lista){
      res.render('listas/show', {
        title: 'Detalle de lista',
        lista: lista
      });
    }
  );
};
