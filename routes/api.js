const express = require('express');
var router = express.Router();
var ninjaModel = require('../models/ninjaModel');

router.get('/ninjas', function(request, response) {
  console.log("GET URL: " + request.url);
  response.send({"Message": "GET REQUEST"});
});

router.post('/ninjas', function(request, response, next) {
  console.log('POST URL: '+ request.url);
  ninjaModel.create(request.body).then(function(dataSaved) {
    console.log("Data saved in Db as: ");
    console.log(dataSaved);
    response.send(dataSaved);
  }).catch(next);
});

router.put('/ninjas/:id', function(request, response, next) {
  console.log('PUT URL: '+ request.url);
  ninjaModel.findByIdAndUpdate(request.params.id, request.body).then(function(oldData) {
    ninjaModel.findOne({_id: request.params.id}).then(function(updatedData){
      console.log(updatedData);
    });
    console.log(oldData);
  }).catch(next);
  response.send({'Message': 'PUT REQUEST'});
});

router.delete('/ninjas/:id', function(request, response, next) {
  console.log('DELETE URL: '+ request.url);
  ninjaModel.findByIdAndRemove(request.params.id).then(function(dataDeleted) {
    console.log(dataDeleted);
    response.send(dataDeleted);
  }).catch(next);
});

module.exports = router;
