// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'api-service',

  // Use if APM Server requires a secret token
  secretToken: 'tf7fFCo2t4EU18Gmej',

  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://984d89e88bfa4aacbdc68c356413c3fc.apm.eu-west-3.aws.elastic-cloud.com:443',

  // Set the service environment
  environment: 'dev'
})

var express = require('express');
var router = express.Router();

const userController = require('./user');

router.get('/', async (req, res) => {
    res.status(200).json({
        name   : 'API', 
        version: '1.0', 
        status : 200, 
        message: 'Bienvenue sur l\'API !'
    });
});

router.use('/users', userController);

module.exports = router;
