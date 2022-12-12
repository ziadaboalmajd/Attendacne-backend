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

/* Arduino data firebase*/
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

/* Student ID*/
const Name1 = "2187207157";
const Name2 = "1388124137";
const Name3 = "1601387032";
const Name4 = "58102214157";
const Name5 = "74159216157";
const Name6 = "1591951617";
const Name7 = "58225200157";
const Name8 = "205108106137";
const Name9 = "122100216157";
const Name10 = "26167215157";
const Name11 = "15495211157";
const Name12 = "14118495137";
const Name13 = "1413295137";
const Name14 = "2995107137";
const Name15 = "2552401597";
const Name16 = "143163907";
const Name17 = "79244967";
const Name18 = "311611587";
const Name19 = "15271617";
const Name20 = "47242907";
const fake = "000000000";

// get data from database
function getJson() {
  let increment = 1;
  studentObj = [];
  get(child(database, "Student")).then((snapshot) => {
    if (snapshot.exists()) {
      IdStudJson = snapshot.val();
      console.log(IdStudJson);
      Object.keys(IdStudJson).forEach(function (key) {
        if (IdStudJson[key] === Name1 || IdStudJson[key] === Name1 + "\r" || Number(IdStudJson[key]) === Number(Name1)) {
          studentObj.push({
            number: increment++,
            user: "محمد السيد فرغلي",
            level: "مستوي ثاني",
            department: "كهرباء",
            specialization: "باور",
            id: 201600324
          });
        } else if (IdStudJson[key] === Name2 || IdStudJson[key] === Name2 + "\r" || Number(IdStudJson[key]) === Number(Name2)) {
          studentObj.push({
            number: increment++,
            user: "ذياد جمال ابو المجد",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "مستوي ثاني",
            id: 201600225
          });
        } else if (IdStudJson[key] === Name3 || IdStudJson[key] === Name3 + "\r" || Number(IdStudJson[key]) === Number(Name3)) {
          studentObj.push({
            number: increment++,
            user: "عمر هاني السيد",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: " اتصالات",
            id: 201600111
          });
        } else if (IdStudJson[key] === Name4 || IdStudJson[key] === Name4 + "\r" || Number(IdStudJson[key]) === Number(Name4)) {
          studentObj.push({
            number: increment++,
            user: "عبدالله طارق عبدالله",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600666
          });
        } else if (IdStudJson[key] === Name5 || IdStudJson[key] === Name5 + "\r" || Number(IdStudJson[key]) === Number(Name5)) {
          studentObj.push({
            number: increment++,
            user: "عبد الرحمن رشدي علي",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "حاسبات",
            id: 201600123
          });
        } else if (IdStudJson[key] === Name6 || IdStudJson[key] === Name6 + "\r" || Number(IdStudJson[key]) === Number(Name6)) {
          studentObj.push({
            number: increment++,
            user: "احمد فالح محمد",
            level: "مستوي ثاني",
            department: "كهرباء",
            specialization: "باور",
            id: 201600189
          });
        } else if (IdStudJson[key] === Name7 || IdStudJson[key] === Name7 + "\r" || Number(IdStudJson[key]) === Number(Name7)) {
          studentObj.push({
            number: increment++,
            user: "عبد الرحمن عصام الشحات",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600999
          });
        } else if (IdStudJson[key] === Name8 || IdStudJson[key] === Name8 + "\r" || Number(IdStudJson[key]) === Number(Name8)) {
          studentObj.push({
            number: increment++,
            user: "محمود شهير محمد",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600156
          });
        } else if (IdStudJson[key] === Name9 || IdStudJson[key] === Name9 + "\r" || Number(IdStudJson[key]) === Number(Name9)) {
          studentObj.push({
            number: increment++,
            user: "ايمن سلمان مهدي",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600999
          });
        } else if (IdStudJson[key] === Name10 || IdStudJson[key] === Name10 + "\r" || Number(IdStudJson[key]) === Number(Name10)) {
          studentObj.push({
            number: increment++,
            user: "عبد الله نعيم قاسم",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600984
          });
        } else if (IdStudJson[key] === Name11 || IdStudJson[key] === Name11 + "\r" || Number(IdStudJson[key]) === Number(Name11)) {
          studentObj.push({
            number: increment++,
            user: "عبد الرحمن سالم عيد",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600345
          });
        } else if (IdStudJson[key] === Name12 || IdStudJson[key] === Name12 + "\r" || Number(IdStudJson[key]) === Number(Name12)) {
          studentObj.push({
            number: increment++,
            user: "احمد عبد الجميل عودة",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600956
          });
        } else if (IdStudJson[key] === Name13 || IdStudJson[key] === Name13 + "\r" || Number(IdStudJson[key]) === Number(Name13)) {
          studentObj.push({
            number: increment++,
            user: "اسامة سمير محمد",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "حاسبات",
            id: 201600367
          });
        } else if (IdStudJson[key] === Name14 || IdStudJson[key] === Name14 + "\r" || Number(IdStudJson[key]) === Number(Name14)) {
          studentObj.push({
            number: increment++,
            user: "احمد سامي غريب",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600788
          });
        } else if (IdStudJson[key] === Name15 || IdStudJson[key] === Name15 + "\r" || Number(IdStudJson[key]) === Number(Name15)) {
          studentObj.push({
            number: increment++,
            user: "عمرو احمد نصرالله",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600287
          });
        } else if (IdStudJson[key] === Name16 || IdStudJson[key] === Name16 + "\r" || Number(IdStudJson[key]) === Number(Name16)) {
          studentObj.push({
            number: increment++,
            user: "يوسف خالد اسماعيل",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600555
          });
        } else if (IdStudJson[key] === Name17 || IdStudJson[key] === Name17 + "\r" || Number(IdStudJson[key]) === Number(Name17)) {
          studentObj.push({
            number: increment++,
            user: "محمد عادل حسين",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600777
          });
        } else if (IdStudJson[key] === Name18 || IdStudJson[key] === Name18 + "\r" || Number(IdStudJson[key]) === Number(Name18)) {
          studentObj.push({
            number: increment++,
            user: "ابراهيم علاء الدين",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600676
          });
        } else if (IdStudJson[key] === Name19 || IdStudJson[key] === Name19 + "\r" || Number(IdStudJson[key]) === Number(Name19)) {
          studentObj.push({
            number: increment++,
            user: "محمد عبد الهادي ابراهيم",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600378
          });
        } else if (IdStudJson[key] === Name20 || IdStudJson[key] === Name20 + "\r" || Number(IdStudJson[key]) === Number(Name20)) {
          studentObj.push({
            number: increment++,
            user: "محمد ايهاب حسين",
            level: "مستوى تالت",
            department: "كهرباء",
            specialization: "باور",
            id: 201600912
          });
        } else if (IdStudJson[key] === fake || IdStudJson[key] === fake + "\r" || Number(IdStudJson[key]) === Number(fake)) {
            studentObj.push({
              number: "x",
              user: "-----",
              level: "-----",
              department: "مخالفين",
              specialization: "-----",
              id: "-----"
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


