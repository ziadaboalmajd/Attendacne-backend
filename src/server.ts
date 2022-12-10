import express from 'express';

import logger from "./utilities/logger";

import route from "./routes/api/dataExcel";

import bodyParser from 'body-parser';

import cors from 'cors';

import { json } from "body-parser";

// import dotenv from 'dotenv';

const app = express();

const port = process.env.PORT || 3000;

// setup 

app.all('/', (req, res) => {
  res.redirect('https://rose-awful-scallop.cyclic.app//home');
});

app.use('/home', express.static(__dirname + '/../src/public'));

//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// Cors for cros origin allowance

app.use(cors());


app.use("/api", logger, route);

// listen port
app.listen(port, () => {  
  console.log(`server started at localhost:${port}`);
});

export default app;
