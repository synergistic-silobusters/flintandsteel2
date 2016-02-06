/// <reference path="../../typings/main.d.ts" />

import * as mongo from 'mongodb';
import * as express from 'express';

var app = express();

app.get('/', (req, res) => {
    res.status(200).json({ status: 200, message: 'future site'});
});

app.listen(process.argv[2] || 8080);
