import express from "express";

import request from 'request';

import SheetCreating from "../../utilities/createSheet";

import path from "path";

const excelSheet = express.Router();

let frontData: any;
let arduinoD: string;
let DrName: string;
let courseName: string;
let cousreCode: string;
let actLevel: string;
let actTerm: string;
let today: string;
let yearS: string;
let GpaHour: string;
let time: string;


const gtData = (res : any) => {
  // lecture data
  request("http://localhost:3000/front/newLec", function (error, request, body) {
    if (body) {
      body.length > 10 && body !== undefined && body !== "No Data" ? frontData = JSON.parse(body) : frontData = "No Data";
      DrName = frontData.DrName;
      courseName = frontData.courseName;
      cousreCode = frontData.cousreCode;
      GpaHour = frontData.GpaHour;
      actLevel = frontData.actLevel;
      actTerm = frontData.actTerm;
      yearS = frontData.yearS;
      today = frontData.today;
      time = frontData.time;
    }
  });
  // attendance data
  request("http://localhost:3000/front/newAtten", function (error, request, body) {
    if (body) {
      body.length > 10 && body !== undefined && body !== "" ? arduinoD = JSON.parse(body) : arduinoD = "No Data";
    }
  });
  // delaying the excel 
  let timer;
  if (DrName === "ziad") {
    clearTimeout(timer);
  } else {
    timer = setTimeout(function () {
      if (frontData !== undefined && arduinoD !== undefined && frontData !== "No Data") {
        console.log(frontData);
        console.log(arduinoD);
        SheetCreating.createSheet(res, arduinoD, today, actTerm, actLevel, cousreCode, courseName);
      }
    }, 1000);
  }
};

excelSheet.get("/gtData", (req: express.Request, res: express.Response) => {
  gtData(res);
});

export default excelSheet;


