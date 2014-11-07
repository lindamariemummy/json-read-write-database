var chai = require('chai');
var chaifs = require('chai-fs');
var chaihttp = require('chai-http');
chai.use(chaihttp);
chai.use(chaifs)
require('../server');
var expect = chai.expect;
//var expectfs = chaifs.expect;
describe('JSON database tests', function(){

  //console.log("id:",  id);

  it('should be able write onto a file', function(done){
    var id = "testfile";
    chai.request('http://localhost:3000')
    .post('/' + id)
    .send({"str":"Hi I can write to a file"})
    .end(function(err,res){
      expect(err).to.eql(null);
      expect('./files/' + id + '.json').to.be.a.file();
      expect('./files/' + id + '.json').to.be.a.file().with.json;
      expect('./files/' + id + '.json').to.have.content('{"str":"Hi I can write to a file"}');
      done();
    });
  });


  it('should be able read a file', function(done){
    var id = "firstfile";
    chai.request('http://localhost:3000')
    .get('/' + id)
    .end(function(err,res){
      expect(err).to.eql(null);
      console.log("body is", res.body);
      //expect(res.body).to.be.json;
      expect(res.body).to.eql('{"str": "Hi I can read a file"}\n');
      done();
    });
  });

});
