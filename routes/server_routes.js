 var fs = require('fs');

 module.exports = function(app){

  //writes json file
  app.post('/:some_name', function(req, res) {
    fs.writeFile('./files/' + req.params.some_name + '.json', JSON.stringify(req.body), function(err) {
      if (err) {console.log("issue");}
      res.status(200).end();
    });

  });

  //reads json file
  app.get('/:some_name', function(req, res) {
    res.set('Content-Type', 'application/json');
    fs.readFile('./files/' + req.params.some_name + '.json', function(err, data){
      if (err) console.log("problem accessing " +'./files/' + req.params.some_name + '.json');
      else {
        //console.log(JSON.parse(data));
        res.json(JSON.parse(data));
      }
    });
  });
};
