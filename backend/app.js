const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const playerRouter = require('./router/player')
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(playerRouter);


app.listen(4000 , () => {
    console.log('server is listening at 4000');
});