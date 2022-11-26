/* Global Variables */
const wide = document.getElementById("wide");
const high = document.getElementById("high");
const uBtn = document.getElementById("upload");
const gBtn = document.getElementById("generate");
const imgSplash = document.getElementById("imgSdiv");
const entryCont = document.getElementById("entryCont");
const entryHolder = document.getElementById("entryHolder");
const imageDis = document.getElementById("displayimage")

let wideValue;
let highValue;

// hide splash img functions
setTimeout(() => {
  imgSplash.classList.add("splashHide");
}, 1000);
setTimeout(() => {
  imgSplash.style.display = "none";
}, 1700);

// main function & event listener

gBtn.addEventListener("click", newInput);

uBtn.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    // console.log(uploaded_image);
    imageDis.style.display = "block";
    imageDis.style.backgroundImage = `url(${uploaded_image})`;

  });
  reader.readAsDataURL(this.files[0]);
});

// input field function
function newInput() {
  // if width is empty
  if (
    wide.value.length === 0
  ) {
    wide.style.background = "rgb(238 174 202)";
    wide.style.color = "white";
    wide.style.borderColor = "rgb(238 174 202)";
    wide.setAttribute("placeholder", "Enter valid value");
    wide.disabled = true;
    setTimeout(() => {
      wide.style.background = "transparent";
      wide.style.color = "rgb(17, 38, 78)";
      wide.style.borderColor = " blanchedalmond";
      wide.setAttribute("placeholder", "pixels");
      wide.value = "";
      wide.disabled = false;
    }, 1000);
  }
  // if height is empty
  if (high.value.length === 0) {
    high.style.background = "rgb(238 174 202)";
    high.style.color = "white";
    high.style.borderColor = "rgb(238 174 202)";
    high.setAttribute("placeholder", "Enter valid value");
    high.disabled = true;
    setTimeout(() => {
      high.style.background = "transparent";
      high.style.color = "rgb(17, 38, 78)";
      high.style.borderColor = " blanchedalmond";
      high.setAttribute("placeholder", "pixels");
      high.value = "";
      high.disabled = false;
    }, 1000);
  }
  // if input are valid
  if (
    wide.value.length <= 5 &&
    wide.value != "" &&
    high.value.length <= 5 &&
    high.value != "" &&
    uBtn.value != ""
  ) {
    generateAction();
    deleteUI();
  }
}

function generateAction() {
  wideValue = wide.value;
  highValue = high.value;
  nameValue = uBtn.value.split("\\").pop();
  window.open(window.location.href + "api/resize/?&filename=" + removeExtension(nameValue) + "&width=" + Math.round(wideValue) + "&height=" +Math.round(highValue))
}

// reset input value to empty
const deleteUI = async () => {
  wide.value = "";
  high.value = "";
  uBtn.value = "";
  imageDis.style.display = "none";
};

//  make sure user enter number
function isNumber(et) {
  et = et ? et : window.event;
  var charCode = et.which ? et.which : et.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// remove uploaded file extension
function removeExtension(filename) {
  return filename.substring(0, filename.lastIndexOf('.')) || filename;
}