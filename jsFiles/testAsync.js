const camps = [];

const getAllPrices = async () => {
  var div = document.getElementById('loading');
  var loading = document.createElement('h1');
  div.appendChild(loading);
  loading.textContent = "Getting prices.....";
  try {
    const response = await fetch('http://localhost:5000/api/NwrPriceList')
    const jsonData = await response.json()
    for (let i = 0; i < jsonData.length; i++) {
      camps.push(jsonData[i])

    }
    console.log("camps", camps)
    loading.textContent = "";
    const headings = ["Accommodation", "Sharing", "Single"];
    const thisCampName = "Ai-Ais";
    let today = new Date(2021, 10, 1);
    const lastYear = today.getFullYear() - 1;
    const nextYear = today.getFullYear() + 1;
    const currentLowSeasonStart = new Date(today.getFullYear(), 0, 1)
    const currentLowSeasonEnd = new Date(today.getFullYear(), 5, 30)
    const currentHighSeasonStart = new Date(today.getFullYear(), 6, 1)
    const currentHighSeasonEnd = new Date(today.getFullYear(), 9, 31)
    const nextLowSeasonStart = new Date(today.getFullYear(), 10, 1)
    const nextLowSeasonEnd = new Date(today.getFullYear(), 11, 31)

    camps.forEach(data => {
      const createTBody = document.createElement('tbody');

      const dbDateHsE = new Date(data.high_season_end);

      if (dbDateHsE.getFullYear() === nextYear) {

        if (thisCampName === data.camp_name) {

          var div = document.getElementById('highSeasonNhs');
          div.appendChild(createTBody);
          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.accommodation_type;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.sharing_price_hs;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.single_price_hs;
        }
      }
    });
  }
  catch (err) {
    console.error(err.message)
  }
};
getAllPrices();

const headings = ["Accommodation", "Sharing", "Single"];
const thisCampName = "Ai-Ais";
let today = new Date(2021, 10, 1);
const lastYear = today.getFullYear() - 1;
const nextYear = today.getFullYear() + 1;
const currentLowSeasonStart = new Date(today.getFullYear(), 0, 1)
const currentLowSeasonEnd = new Date(today.getFullYear(), 5, 30)
const currentHighSeasonStart = new Date(today.getFullYear(), 6, 1)
const currentHighSeasonEnd = new Date(today.getFullYear(), 9, 31)
const nextLowSeasonStart = new Date(today.getFullYear(), 10, 1)
const nextLowSeasonEnd = new Date(today.getFullYear(), 11, 31)
let checkForNextSeasonRatesLs = "";
let lastYearOfRatesInDbHs = "";
let lastYearOfRatesInDbFullYearHs = "";
camps.forEach(data => {
  const createTBody = document.createElement('tbody');

  const dbDateHsE = new Date(data.high_season_end);

  if (dbDateHsE.getFullYear() === nextYear) {

    if (thisCampName === data.camp_name) {

      var div = document.getElementById('highSeasonNhs');
      div.appendChild(createTBody);
      var createTR = document.createElement('tr');
      createTBody.appendChild(createTR);

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = data.accommodation_type;

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = data.sharing_price_hs;

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = data.single_price_hs;
    }
  }
});
