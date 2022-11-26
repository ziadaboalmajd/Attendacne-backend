import express from "express";

import logger from "./utilities/logger";

import routeOne from "./routes/api/dataExcel";

import routeTwo from "./routes/api/dataFront";

import bodyParser from 'body-parser';

import cors from 'cors';

import { json } from "body-parser";

// import dotenv from 'dotenv';

const app = express();

const port = process.env.PORT || 8080;

// setup 

//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

// app.use("/", express.static(__dirname + "/website"));

app.use("/api", logger, routeOne);

app.use("/front", logger, routeTwo);

// listen port
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
