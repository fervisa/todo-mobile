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

exports.show = function(req, res){
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

exports.create = function(req, res){
  db.models.Lista.create(
    {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      creacion: Date.now()
    },
    function(err, lista){
      console.log(lista.descripcion);
      res.render('listas/show', {
        title: 'Detalle de lista',
        lista: lista
      });
    }
  );
};
