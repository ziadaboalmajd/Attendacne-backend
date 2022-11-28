/* Global Variables */

// dom variables
const imgSplash = document.getElementById("imgSdiv");
const profIn = document.getElementById("profIn");
const courseIn = document.getElementById("courseIn");
const levelIn = document.getElementById("levelIn");
const termIn = document.getElementById("termIn");
const gBtn = document.getElementById("generate");

// Btn En/Ar unit value
let langVal = localStorage.getItem("langVal") || 0;

// date and time 
let d = new Date();
let dayName = new Date().toLocaleDateString("en-us", {
  weekday: "long",
});
let arDay = new Date().toLocaleDateString("ar-eg", {
  weekday: "long",
});
let enDate = dayName + "  " + d.getDate() + "." + d.getMonth() + "." + d.getFullYear();
let arDate = d.getDate() + "." + d.getMonth() + "." + d.getFullYear() + "  " + arDay;
let studySeason = d.getFullYear();
let timeNow = d.getHours() + ":" + d.getMinutes();

// api variables
const baseUrl = "https://rose-awful-scallop.cyclic.app/front/post";

// topicvariables
let doctorData = {
  "Dr mo'ns": ["bsm013", "bsm023", "ELC101"],
  "Dr AboBakr": ["bsm025", "HUM110"],
  "Dr hany": ["ELC107", "ELC213"]
};

let coursesData = {
  bsm013: {
    name: "Math 1",
    level: "1",
    mTerm: "First term",
    hourValue: 3
  },
  bsm025: {
    name: "Engineering Drawing",
    level: "1",
    mTerm: "First term",
    hourValue: 4
  },
  bsm011: {
    name: "physics 1",
    level: "1",
    mTerm: "First term",
    hourValue: 4
  },
  bsm023: {
    name: "Math 2",
    level: "1",
    mTerm: "Second term",
    hourValue: 3
  },
  bsm022: {
    name: "computer science",
    level: "1",
    mTerm: "Second term",
    hourValue: 3
  },
  ELC101: {
    name: "Math 3",
    level: "2",
    mTerm: "First term",
    hourValue: 3
  },
  ELC107: {
    name: "electrical materials",
    level: "2",
    mTerm: "second term",
    hourValue: 3
  },
  ELC213: {
    name: "electrical Measurements",
    level: "3",
    mTerm: "First term",
    hourValue: 3
  },
  HUM110: {
    name: "engineering quality",
    level: "any",
    mTerm: "any",
    hourValue: 0
  },
};

let Subject;
let doctorName;
let level;
let term;

/* page config on start */
// hide splash img functions
setTimeout(() => {
  imgSplash.classList.add("splashHide");
}, 1000);
setTimeout(() => {
  imgSplash.style.display = "none";
}, 1700);

// translate event
if (langVal === 1) {
  translateAr();
  document.getElementById("ArL").className = "activeBtn";
  document.getElementById("EnL").className = "";
}

/* handlers */
// generate data (send data) (POST)
gBtn.addEventListener("click", function () {
  if (courseIn.selectedIndex !== 0 && profIn.selectedIndex !== 0  && termIn.selectedIndex !== 0) {
    postInfo();
    courseIn.selectedIndex = 0;
    profIn.selectedIndex = 0;
    levelIn.selectedIndex = 0;
    termIn.selectedIndex = 0;
  }
});

// summer no level
termIn.addEventListener("input", function () {
  if (termIn.selectedIndex === 3) {
    levelIn.disabled = true;
    levelIn.selectedIndex = 0;
  } else {
    levelIn.disabled = false;
  }
});

// style and language handlers
window.addEventListener("click", function () {
  if (
    event.target.id.includes("ArL")
  ) {
    document.getElementById("ArL").className = "activeBtn";
    document.getElementById("EnL").className = "";
    translateAr();
    langVal = 1;
  } else if (
    event.target.id.includes("EnL")
  ) {
    document.getElementById("EnL").className = "activeBtn";
    document.getElementById("ArL").className = "";
    translateEn();
    langVal = 0;
  }
  // set choosen value of the user in local storage to use after refresh
  localStorage.setItem("langVal", langVal);
});


/* all functions */

// translate function 
//EN
function translateEn() {
  document.querySelector(".headline").innerText = "create attendance sheet";
  document.querySelector("#profLabel").innerText = "Enter professor Name";
  document.querySelector("#corseLabel").innerText = "Enter course name";
  document.querySelector("#termLabel").innerText = "select term";
  document.querySelector("#levelLabel").innerText = "select level";
  document.querySelector(".title").innerText = "Most Recent Entry";
  courseIn.children[0].innerText = "select course";
  profIn.children[0].innerText = "select name";
  levelIn.children[0].innerText = "select level";
  termIn.children[0].innerText = "select term";
  gBtn.innerText = "Generate";
}
// AR
function translateAr() {
  document.querySelector(".headline").innerText = "ملف للغياب";
  document.querySelector("#profLabel").innerText = "أدخل اسم الدكتور";
  document.querySelector("#corseLabel").innerText = "أدخل اسم المادة";
  document.querySelector("#termLabel").innerText = "اختر الفصل الدراسي";
  document.querySelector("#levelLabel").innerText = "اختر المستوي";
  document.querySelector(".title").innerText = "أحدث تسجيل دخول";
  profIn.children[0].innerText = "اختر الاسم";
  courseIn.children[0].innerText = "اختر المادة";
  levelIn.children[0].innerText = "اختر المستوي";
  termIn.children[0].innerText = "اختر الفصل الدراسي";
  gBtn.innerText = "أنشاء";
}


// POST fun 
async function postInfo() {
  // creating course data
  Subject = coursesData[courseIn.value];
  doctorName = profIn.value;
  levelIn.selectedIndex === 0 ? level = "" : level =  levelIn.value;
  term = termIn.value;
  let currentCourse = {
    "DrName": doctorName,
    "courseName": Subject.name,
    "cousreCode": courseIn.value,
    "GpaHour": Subject.hourValue,
    "actLevel": level,
    "actTerm": term,
    "yearS": studySeason + " - " + (studySeason + 1),
    "today": enDate,
    "time": timeNow,
    "mainTerm": Subject.mTerm,
    "mainLevel": Subject.level,
  };
  // post method
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(currentCourse)
  });
}


// only number input allowed in zip code input
function isNumber(et) {
  et = et ? et : window.event;
  var charCode = et.which ? et.which : et.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// only letters input allowed in feelings textarea
function isLetter(lt) {
  lt = lt ? lt : window.event;
  var inputValue = lt.which ? lt.which : lt.keyCode;
  if (
    !(inputValue >= 65 && inputValue <= 120) &&
    inputValue !== 32 &&
    inputValue !== 0
  ) {
    return false;
  }
  return true;
}














/*
// GET fun 
async function getData() {
  const res = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=99950&appid=00fb75c4594d69b0327c7607e7467e1b", {
    method: "GET"
  })
  const gData = await res.json()
}
*/

/*
// GET fun 
async function getInfo() {
  const res = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=99950&appid=00fb75c4594d69b0327c7607e7467e1b", {
    method: "GET"
  })
  const gData = await res.json()
  console.log(gData);
}
*/

// main function
/*
function newInput() {
  if (
    profIn.value.length == 5 &&
    profIn.value > 9999 &&
    textArea.value.length > 2
  ) {
    generateAction();
  }
  // create alert for few or wrong data
  // alert zip code input for wrong entry
  if (
    profIn.value.length <= 4 ||
    profIn.value.length == 0 ||
    profIn.value <= 9999
  ) {
    profIn.style.background = "rgb(238 174 202)";
    profIn.style.color = "white";
    profIn.style.borderColor = "rgb(238 174 202)";
    profIn.setAttribute("placeholder", "");
    profIn.disabled = true;
    if (profIn.value.length == 0) {
      profIn.value = "Can't be Empty";
    } else {
      profIn.value = "Invalid Zip Code";
    }
    setTimeout(() => {
      profIn.style.background = "transparent";
      profIn.style.color = "rgb(17, 38, 78)";
      profIn.style.borderColor = "#ff9800";
      profIn.setAttribute("placeholder", "enter zip code here");
      profIn.value = "";
      profIn.disabled = false;
    }, 1000);
  }
  // alert feeling input for wrong entry
  if (textArea.value.length === 0 || textArea.value.length <= 2) {
    textArea.style.background = "rgb(238 174 202)";
    textArea.style.color = "white";
    textArea.style.borderColor = "rgb(238 174 202)";
    textArea.setAttribute("placeholder", "");
    textArea.disabled = true;
    if (textArea.value.length == 0) {
      textArea.value = "Can't be Empty";
    } else {
      textArea.value = "Try Again";
    }
    setTimeout(() => {
      textArea.style.background = "transparent";
      textArea.style.color = "rgb(17, 38, 78)";
      textArea.style.borderColor = "#ff9800";
      textArea.setAttribute("placeholder", "Enter your feelings here");
      textArea.value = "";
      textArea.disabled = false;
    }, 1000);
  }
}

// Create a new date instance dynamically with JS
//to get full date new Date().toLocaleDateString('en-us', { weekday:"long" ,year: "numeric" , month:"numeric", day:"numeric"});
let d = new Date();
let dayName = new Date().toLocaleDateString("en-us", {
  weekday: "long",
});
let newDate =
  dayName + "  " + d.getDate() + "." + d.getMonth() + "." + d.getFullYear();

// apikey , URL , server

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";

const apiKey = "&appid=00fb75c4594d69b0327c7607e7467e1b";

const server = "http://127.0.0.1:4000";

function generateAction() {
  let newZip = profIn.value;
  let newCode =
    cnCode.value == "select country (optional)" ? "US" : cnCode.value;

  getNewData(newZip, newCode).then((data) => {
    if (data.cod == "200") {
      let info = {
        city: data.name,
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
      };
      postData(server + "/add", info);
      updateUI();
    } else {
      deleteUI();
    }
  });
}

const getNewData = async (Zip, Code) => {
  try {
    const res = await fetch(bURL + Zip + "," + Code + apiKey);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const postData = async (url = "", info = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const updateUI = async () => {
  entryHolder.style.display = "block";
  wrongZip.style.display = "none";
  const req = await fetch(server + "/all");
  try {
    const allData = await req.json();
    // add Conditional operator to avoid " NAN " in the dom
    // Fahrenheit value
    finalFarhTemp =
      allData.temp == undefined ?
      "-" :
      Math.round(allData.temp * (9 / 5) - 459.69);
    // Celsius value
    finalCelTemp =
      allData.temp == undefined ? "-" : Math.round(allData.temp - 273.15);
    // country name
    countryName =
      cnCode.value == "select country (optional)" ?
      "US , " :
      cnCode.value + " , ";
    // update the date and the feelings
    date.innerHTML = `<div class="outputCont"><div class="needPadd">The date</div><div class="needPadd">${newDate}</div></div>`;
    contentF.innerHTML = `<div class="outputCont"><div class="needPadd">Your Feelings</div><div class="needPadd">${textArea.value}</div></div>`;
    // determine which unit system the user choose (metric/imperial)
    btnVal % 2 == 0 ?
      (tempC.innerHTML = `<div class="outputCont"><div class="needPadd" style="flex: 1 0 0;">Temp</div><div class="tempChanger" style="flex: 1 0 0;"><div id="cel"><h5>Celsius</h5></div><div id="frah" class="activeBtn"><h5>Fahrenheit </h5></div></div><div class="needPadd" id="fTemp" style="flex: 1 0 0; text-align: end;">${finalFarhTemp} °F</div></di>`) :
      (tempC.innerHTML = `<div class="outputCont"><div class="needPadd" style="flex: 1 0 0;">Temp</div><div class="tempChanger" style="flex: 1 0 0;"><div id="cel" class="activeBtn"><h5>Celsius</h5></div><div id="frah"><h5>Fahrenheit </h5></div></div><div class="needPadd" id="fTemp" style="flex: 1 0 0; text-align: end;">${finalCelTemp} °C</div></div>`);
    // city
    city.innerHTML = `<div class="outputCont"><div class="needPadd">Location</div><div class="needPadd">${
      countryName + allData.city
    }</div></div>`;
    // description 
    describe.innerHTML = `<div class="outputCont"><div class="needPadd">The weather</div><div class="needPadd">${allData.description}</div></div>`;
    // Empty input and textarea for new entry
    textArea.value = "";
    profIn.value = "";
    cnCode.value = "select country (optional)";
    entryCont.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center"
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUI = async () => {
  profIn.value = "";
  date.innerHTML = "";
  city.innerHTML = "";
  tempC.innerHTML = "";
  contentF.innerHTML = "";
  wrongZip.style.display = "flex";
  entryHolder.style.display = "none";
  entryCont.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center"
  });
};

// Events

// main event generate new entry
gBtn.addEventListener("click", newInput);
// chanage metric unit or imperial unit btn settings and the update the dom

window.addEventListener("click", function () {
  if (
    event.target.id.includes("cel") ||
    event.target.parentNode.id.includes("cel")
  ) {
    document.getElementById("cel").className = "activeBtn";
    document.getElementById("frah").className = "";
    document.getElementById("fTemp").innerHTML = `${finalCelTemp} °C`;
    btnVal = 1;
  } else if (
    event.target.id.includes("frah") ||
    event.target.parentNode.id.includes("frah")
  ) {
    document.getElementById("frah").className = "activeBtn";
    document.getElementById("cel").className = "";
    document.getElementById("fTemp").innerHTML = `${finalFarhTemp} °F`;
    btnVal = 0;
  }
  // set choosen value of the user in local storage to use in refresh
  localStorage.setItem("btnVal", btnVal);
});

// disable new line (use Enter) in textarea
textArea.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    e.preventDefault();
    return false;
  }
});
*/



// filter dropDown
// function filterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByTagName("option");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }

// window.addEventListener("click", function () {
//   let myDrop = document.getElementById("myDropdown");
//   let childMyDrop = myDrop.children;
//   if (event.target.id.includes("myDropdown") || event.target.id.includes("myInput")) {
//     for (var i = 1; i < childMyDrop.length; i++) {
//       childMyDrop[i].style.display = 'block';
//     }
//   } else {
//     for (var i = 1; i < childMyDrop.length; i++) {
//       childMyDrop[i].style.display = 'none';
//     }
//   }
// });