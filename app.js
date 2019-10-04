const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');

const querystring = require('querystring');

const fs = require('fs');

app.use(express.static('www'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/intern', (req, res) => {

    let body = JSON.parse(JSON.stringify(req.body));
    console.log('req.body', body);
    fs.writeFileSync(`./interns/${body.name}-${new Date().getTime()}.json`, JSON.stringify(body, null, 3) , 'utf8');

    res.send('Thank you for applying! Hopefully you will hear from us soon!')
});

app.listen(port, () => console.log(`listening on port ${port}!`));