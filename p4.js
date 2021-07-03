// async
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}


const axios = require('axios')

axios
  .post('https://www.accuweather.com/en/cn/shanghai/106577/weather-forecast/106577', {
    todo: 'weather'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

  

// POST (retrieve data from)
const https = require('https')

const data = JSON.stringify({
  todo: 'something'
})

const options = {
  hostname: 'accuweather.com',
  port: 443,
  path: '/en/cn/shanghai/106577/weather-forecast/106577',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

