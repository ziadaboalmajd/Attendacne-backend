import express from 'express'; 

import  excelSheet  from './api/dataExcel';

const routesOne = express.Router();

routesOne.use('/', excelSheet);

export default routesOne;
