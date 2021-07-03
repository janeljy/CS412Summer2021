const axios = require('axios')

axios
  .post('https://www.accuweather.com/en/cn/shanghai/106577/weather-forecast/106577', {
    weather: 'weather'
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
  weather: 'something'
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

// async
// async function getWithAsycAwait() {
//     const searchTerm = req.query.search;
//     try {
//         const jobs = await axios.get('https://www.accuweather.com/en/cn/shanghai/106577/weather-forecast/106577');
//         res.status(200).send({
//             weather: weathers.data,
//         });	
//     } catch(err) {
//         res.status(500).send({message: err.message});
//     }
// }
// getWithAsycAwait()


// radis cache
const redisPort = 6379
const client = redis.createClient(redisPort);

//log error to the console if any occurs
client.on("error", (err) => {
    console.log(err);
});


app.get("/ps4", (req, res) => {
    const searchTerm = req.query.search;
    try {
        client.get(searchTerm, async (err, weathers) => {
            if (err) throw err;
    
            if (weathers) {
                res.status(200).send({
                    weather: JSON.parse(weathers),
                    message: "data retrieved from the cache"
                });
            } else {
                const weathers = await axios.get('https://www.accuweather.com/en/cn/shanghai/106577/weather-forecast/106577');
                client.setex(searchTerm, 600, JSON.stringify(weathers.data));
                res.status(200).send({
                    weather: weathers.data,
                    message: "cache miss"
                });
            }
        });
    } catch(err) {
        res.status(500).send({message: err.message});
    }
});
