const camps = [];
const campNames = [];
const accTypes = [];
const values = [];
const valuesacc = [];

const getAllPrices = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/NwrPriceList')
    const jsonData = await response.json()
    for (let i = 0; i < jsonData.length; i++) {
      camps.push(jsonData[i])
    }
    for (i = 0; i < camps.length; i++) {
      campNames.push(camps[i].camp_name)
      accTypes.push(` ${camps[i].camp_name}: ${camps[i].accommodation_type}`)
    }

    let uniqueCampNames = [...new Set(campNames)];
    let uniqueaccTypes = [...new Set(accTypes)];

    uniqueCampNames.forEach(data => {
      values.push(data)
    });

    uniqueaccTypes.forEach(data => {
      valuesacc.push(data)
    });
  }
  catch (err) {
    console.error(err.message)
  }
};
getAllPrices();

//Add a table
var down = document.getElementById("add_extra_camp");

// Create a break line element
var br = document.createElement("br");

function addACamp() {

  // Create a table synamically
  var table = document.createElement("table");
  table.setAttribute("method", "post");
  table.setAttribute("action", "enter action");

  var select = document.createElement("select");
  select.name = "selec-a-camp";
  select.id = "selec-a-camp"

  for (const val of values) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val;
    select.appendChild(option);
  }

  var label = document.createElement("label");
  label.textContent = "Choose A Camp: "
  label.htmlFor = "selec-a-camp";

  var selectacc = document.createElement("select");
  selectacc.name = "selec-accommodation";
  selectacc.id = "selec-accommodation"

  for (const valacc of valuesacc) {
    const selectedCamp = document.getElementById('selec-a-camp')
    var optionacc = document.createElement("option");
    optionacc.value = valacc;
    optionacc.text = valacc;
    selectacc.appendChild(optionacc);
  }

  var labelacc = document.createElement("label");
  labelacc.textContent = "Selec the type of accommodation required: "
  labelacc.htmlFor = "selec-accommodation";

  // Create an input element for arrival date
  var arrivalDate = document.createElement("input");
  arrivalDate.setAttribute("type", "date");
  arrivalDate.setAttribute("name", "arrDate");

  var dateLabela = document.createElement("label");
  dateLabela.textContent = "Arrival date: "
  dateLabela.htmlFor = "arrDate";

  // Create an input element for depart date
  var departureDate = document.createElement("input");
  departureDate.setAttribute("type", "date");
  departureDate.setAttribute("name", "depDate");

  var dateLabeld = document.createElement("label");
  dateLabeld.textContent = "Departure date: "
  dateLabeld.htmlFor = "depDate";

  var createButton = document.createElement('button');
  createButton.textContent = "Delete This Camp";
  createButton.setAttribute("id", "deleteCamp");
  createButton.setAttribute("type", "button");
  createButton.setAttribute("class", "btn btn-danger");
  // createButton.setAttribute("onClick", "reply_click(this.id)");

  // Append the Select a camp to the table
  table.appendChild(label)
  table.appendChild(select);

  // Append the Select type of accommodation
  table.appendChild(labelacc)
  table.appendChild(selectacc);

  // Inserting a line break
  table.appendChild(br.cloneNode());

  // Append the arrival date input to the table
  table.appendChild(dateLabela);
  table.appendChild(arrivalDate);

  // Inserting a line break
  table.appendChild(br.cloneNode());
  // Inserting a line break
  table.appendChild(br.cloneNode());

  // Append the departure date input to the table
  table.appendChild(dateLabeld);
  table.appendChild(departureDate);

  // Inserting a line break
  table.appendChild(br.cloneNode());
  // Inserting a line break
  table.appendChild(br.cloneNode());
  // Append the Dele a camp to the table
  table.appendChild(createButton)

  document.getElementById("addACamp").appendChild(table);
}


// function myFunction() {
//   var x = document.getElementById("mySelect");
//   var option = document.createElement("option");
//   option.text = "Kiwi";
//   x.add(option);
// }