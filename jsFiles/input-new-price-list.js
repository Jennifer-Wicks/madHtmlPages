//global variables
let displayLow = document.getElementById("displayLow")
let displayHigh = document.getElementById("displayHigh")
let displayLowP = document.getElementById("displayLowP")
let displayHighP = document.getElementById("displayHighP")
// Check for the value of season selection and display the correct fields
function displayFields() {
  let seasonSelectionUpdate = [];
  var select = document.getElementById('season');
  var option = select.options[select.selectedIndex];
  seasonSelectionUpdate = option.value;

  if(seasonSelectionUpdate === "lowSeason") {
    console.log("true")
    displayLow.removeAttribute("style");
    displayHigh.style.display = "none";
    displayLowP.removeAttribute("style");
    displayHighP.style.display = "none";
  } else if (seasonSelectionUpdate === "highSeason") {
    console.log("false")
    displayHigh.removeAttribute("style");
    displayLow.style.display = "none";
    displayHighP.removeAttribute("style");
    displayLowP.style.display = "none";
  } else if (seasonSelectionUpdate === "special") {
    displayHigh.style.display = "none";
    displayHighP.style.display = "none";
    displayLow.style.display = "none";
    displayLowP.style.display = "none";
    alert("The special modules are still under construction. Please update html pages manualy")
  }
  
}
displayFields();