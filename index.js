const express = require('express')
const request = require('request');
const app = express()
const port = 3000

app.listen(port, () => console.log(`Ushio-proxy listening at http://localhost:${port}`))


app.get('/', (req, res) => {

    request(req.query.url).pipe(res);

})
