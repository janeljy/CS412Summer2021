var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('something');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('something else');
})

module.exports = router;


const axios = require('axios')

axios
  .post('https://localhost.3000/', {
    todo: 'idk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
