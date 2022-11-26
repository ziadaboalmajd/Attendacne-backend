import express from 'express'; 

import  excelFront  from './api/dataFront';

const routeTwo = express.Router();

routeTwo.use('/',  excelFront);

export default routeTwo;