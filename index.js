const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/index");
const mongo = require("./initializations/mongodb");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(router);

const port = 7070;

mongo.connect(`mongodb://superuser:abcd1234ABCD@ds012538.mlab.com:12538/kothulator`)
    .then(() => app.listen(port))
    .then(() => console.log(`Magic happens on port: ${port}`))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    });
;
