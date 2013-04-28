
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Procrastinator 1.0' });
};
