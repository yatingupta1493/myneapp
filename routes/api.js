const express = require('express');
var router = express.Router();

router.get('/ninjas', function(request, response) {
  console.log("GET URL: " + request.url);
  response.send({"Message": "GET REQUEST"});
});

router.post('/ninjas', function(request, response) {
  console.log('POST URL: '+ request.url);
  console.log(request.body);
  response.send({'Message': 'POST REQUEST'});
});

router.put('/ninjas/:id', function(request, response) {
  console.log('PUT URL: '+ request.url);
  response.send({'Message': 'PUT REQUEST'});
});

router.delete('/ninjas/:id', function(request, response) {
  console.log('DELETE URL: '+ request.url);
  response.send({'Message': 'DELETE REQUEST'});
});

module.exports = router;
