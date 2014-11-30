var fs = require('fs');

module.exports = function(app) {

  //writes json file
  app.post('/:someName', function(req, res) {
    fs.writeFile('./files/' + req.params.someName + '.json', JSON.stringify(req.body), function(err) {
      if (err) {console.log('issue');}
      res.status(200).end();
    });

  });

  //reads json file
  app.get('/:someName', function(req, res) {
    res.set('Content-Type', 'application/json');
    fs.readFile('./files/' + req.params.someName + '.json', function(err, data) {
      if (err) console.log('problem accessing ' + './files/' + req.params.someName + '.json');
      else {
        res.json(JSON.parse(data));
      }
    });
  });
};
