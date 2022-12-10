import express from 'express'; 

import  excelSheet  from './api/dataExcel';

const route = express.Router();

route.use('/', excelSheet);

export default route;
