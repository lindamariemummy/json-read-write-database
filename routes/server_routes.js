 var fs = require('fs');

 module.exports = function(app){

  //writes json file
  app.post('/:some_name', function(req, res) {
    fs.writeFile('./files/' + req.params.some_name + '.json', JSON.stringify(req.body), function(err) {
      if (err) {console.log("issue");}
    });
    res.status(200).end();
    //res.send("writin");
    //res.json(req.params.some_name);
  });

  //reads json file
  app.get('/:some_name', function(req, res) {
    fs.readFile('./files/' + req.params.some_name + '.json', function(err, data){
      if (err) console.log("problem accessing " +'./files/' + req.params.some_name + '.json');
      else {
        console.log(data.toString());
        res.json(data.toString());
      }
    });

  });

};
