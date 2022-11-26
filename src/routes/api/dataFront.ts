import express from "express";

// Start up an instance of app
const  excelFront = express.Router();

// Setup Server
let finalDate = "No Data";

// GET route

excelFront.get('/newLec', getFData);

function getFData(req: express.Request, res: express.Response) {
  res.send(finalDate);
}
// GET route
// http://localhost:3000/front/newLec

excelFront.get('/newAtten', getAData);

function getAData(req: express.Request, res: express.Response) {
  res.json([{
      number: 1,
      user: "محمد مصطفي عمر علي",
      level: "الثاني",
      department: "كهرباء",
      specialization: "اتصالات",
      time: 8 + ":" + 23 + " am"
    },
    {
      number: 2,
      user: "محمد مصطفي عمر علي",
      level: "الثاني",
      department: "كهرباء",
      specialization: "اتصالات",
      time: 8 + ":" + 23 + " am"
    },
    {
      number: 3,
      user: "محمد مصطفي عمر علي",
      level: "الثاني",
      department: "كهرباء",
      specialization: "اتصالات",
      time: 8 + ":" + 23 + " am"
    },
    {
      number: 4,
      user: "محمد مصطفي عمر علي",
      level: "الثاني",
      department: "كهرباء",
      specialization: "اتصالات",
      time: 8 + ":" + 23 + " am"
    },
    {
      number: 5,
      user: "محمد مصطفي عمر علي",
      level: "الثاني",
      department: "كهرباء",
      specialization: "اتصالات",
      time: 8 + ":" + 23 + " am"
    },
    {
      number: 6,
      user: "محمد مصطفي عمر علي",
      level: "الثاني",
      department: "كهرباء",
      specialization: "اتصالات",
      time: 8 + ":" + 23 + " am"
      
    }]
  );
}

// POST method route

excelFront.post('/post', postInfo);

function postInfo(req: express.Request, res: express.Response) {
  finalDate = req.body;
  res.status(200).json("Data is submitted successfully");
};

// POST route

export default  excelFront;