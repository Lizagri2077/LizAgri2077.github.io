const express = require('express');

const app = express();

const port = 8080;


app.use(express.static('public'))
app.use('/css/', express.static(__dirname + '/public/css/'))
app.use('/img/', express.static(__dirname + '/public/img/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


//Listen on port 8080
app.listen(port, () => console.info(`Let's code on http://localhost:${port} !!`))


