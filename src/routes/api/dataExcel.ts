import express from "express";
import SheetCreating from "../../utilities/createSheet";
import 'firebase/compat/database';
import { getDatabase, ref, child, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import createSheet from "../../utilities/createSheet";

const firebaseConfig = {
  apiKey: "AIzaSyAoEkJf8XnyVtXL19qjMphoyrym467VOdk",
  authDomain: "attendance-app-6977b.firebaseapp.com",
  databaseURL: "https://attendance-app-6977b-default-rtdb.firebaseio.com",
  projectId: "attendance-app-6977b",
  storageBucket: "attendance-app-6977b.appspot.com",
  messagingSenderId: "1026881952219",
  appId: "1:1026881952219:web:df0cce5fb7bae93ceceffe",
  measurementId: "G-93NQ2EDEKD"
};

const excelSheet = express.Router();

const fireApp = initializeApp(firebaseConfig);

const database = ref(getDatabase(fireApp));

let IdStudJson: any;
let studentObj: any = [];

/*
let arduinoD: string;
let yearS: string;
let GpaHour: string;
let time: string;*/
let DrName: string;
let courseName: string;
let cousreCode: string;
let actLevel: string;
let actTerm: string;
let today: string;

// get data from database
function getJson() {
  let increment = 1;
  studentObj = [];
  get(child(database, "Student")).then((snapshot) => {
    if (snapshot.exists()) {
      IdStudJson = snapshot.val();
      console.log(IdStudJson);
      Object.keys(IdStudJson).forEach(function (key) {
        if (IdStudJson[key] === "2187207157" || IdStudJson[key] === "2187207157\r" || Number(IdStudJson[key]) === 2187207157) {
          studentObj.push({
            number: increment++,
            user: "محمد السيد فرغلي",
            level: "مستوي ثاني",
            department: "كهرباء",
            specialization: "باور",
            id: 201600324
          });
        } else if (IdStudJson[key] === "1388124137" || IdStudJson[key] === "1388124137\r" || Number(IdStudJson[key]) === 1388124137) {
          studentObj.push({
            number: increment++,
            user: "ذياد جمال ابو المجد",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "مستوي ثاني",
            id: 201600225
          });
        } else if (IdStudJson[key] === "1601387032" || IdStudJson[key] === "1601387032\r" || Number(IdStudJson[key]) === 1601387032) {
          studentObj.push({
            number: increment++,
            user: "عمر هاني السيد",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization:" اتصالات",
            id: 201600111
          });
        } else if (IdStudJson[key] === "58102214157" || IdStudJson[key] === "58102214157\r" || Number(IdStudJson[key]) === 58102214157) {
          studentObj.push({
            number: increment++,
            user: "عبدالله طارق عبدالله",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600666
          });
        } else if (IdStudJson[key] === "74159216157" || IdStudJson[key] === "74159216157\r" || Number(IdStudJson[key]) === 74159216157) {
          studentObj.push({
            number: increment++,
            user: "عبد الرحمن رشدي علي",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "حاسبات",
            id: 201600123
          });
        } else if (IdStudJson[key] === "1591951617" || IdStudJson[key] === "1591951617\r" || Number(IdStudJson[key]) === 1591951617) {
          studentObj.push({
            number: increment++,
            user: "احمد فالح محمد",
            level: "مستوي ثاني",
            department: "كهرباء",
            specialization: "باور",
            id: 201600189
          });
        } else if (IdStudJson[key] === "205108106137" || IdStudJson[key] === "205108106137\r" || Number(IdStudJson[key]) === 205108106137) {
          studentObj.push({
            number: increment++,
            user: "عبد الرحمن عصام الشحات",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600999
          });
        } 
      });
      console.log(studentObj);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  get(child(database, "newLec")).then((snashot) => {
    if (snashot.exists()) {
      DrName = snashot.val().DrName;
      courseName = snashot.val().courseName;
      cousreCode = snashot.val().cousreCode;
      actLevel = snashot.val().actLevel;
      actTerm = snashot.val().actTerm;
      today = snashot.val().today;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}
// send data to excel api after get it from firebase
function sendJson(res: any) {
  // delaying the excel 
  let timer;
  if (DrName === "ziad") {
    clearTimeout(timer);
  } else {
    timer = setTimeout(function () {
      if (studentObj !== undefined && studentObj.length > 0 && today !== undefined) {
        SheetCreating.createSheet(res, studentObj, DrName, today, actTerm, actLevel, cousreCode, courseName);
      } else {
        res.send("no file created");
      }
    }, 1000);
  }
}

excelSheet.get("/", (req: express.Request, res: express.Response) => {
  getJson();
  sendJson(res);
});

export default excelSheet;


