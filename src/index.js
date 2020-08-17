const express = require('express')
const request = require('request');
const app = express()
const port = 3000

app.listen(port, () => console.log(`Ushio-proxy listening at http://localhost:${port}`))
app.use(express.static(__dirname + '/public'));

app.get('/get/', (req, res) => {

    if(req.query.hasOwnProperty('url')){
        if(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(req.query.url))
            var web = request(req.query.url, req.headers);
        else
            var web = request(new Buffer(req.query.url, 'base64').toString(), req.headers);
        req.pipe(web);
        web.pipe(res);
    }

})
