const camps = [];
let campNames = [];
let campName = [];

const getAllPrices = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/NwrPriceList')
    const jsonData = await response.json()
    for (let i = 0; i < jsonData.length; i++) {
      camps.push(jsonData[i])
    }

    const displayLoad = () => {
      // Insert the loading...
      var div = document.getElementById('loading');
      var loading = document.createElement('h1');
      div.appendChild(loading);
      loading.textContent = "Getting prices.....";
    }
    displayLoad()

    const headings = [
      "Season Dates",
      "Accommodation type",
      "Sharing - LS",
      "Single - LS", ,
      "Sharing - HS",
      "Single - HS",
      "",
      "",
    ];

    const createHeadings = () => {
      // Insert the headings
      var div = document.getElementById('allPrices');
      var createTHead = document.createElement('thead');
      div.appendChild(createTHead);

      var createTR = document.createElement('tr');
      createTHead.appendChild(createTR);
      headings.forEach(data => {
        var createTH = document.createElement('th');
        createTR.appendChild(createTH);
        createTH.textContent = data;
      });
    };

    const insertBody = () => {
      createHeadings();
      camps.forEach(data => {
        if (campName === data.camp_name) {

          var div = document.getElementById('allPrices');

          const createTBody = document.createElement('tbody');
          div.appendChild(createTBody);

          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.low_season_start + " - " + data.high_season_end;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.accommodation_type;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.sharing_price_ls;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.single_price_ls;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.sharing_price_hs;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.single_price_hs;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          var createButton = document.createElement('button');
          createTD.appendChild(createButton);
          createButton.textContent = "Change";
          createButton.setAttribute("id", data.price_id);
          createButton.setAttribute("type", "button");
          createButton.setAttribute("class", "btn btn-danger");
          createButton.setAttribute("data-toggle", "modal");
          createButton.setAttribute("data-target", "#exampleModalLong");
          createButton.setAttribute("onClick", "reply_click(this.id)");

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          var createButton = document.createElement('button');
          createTD.appendChild(createButton);
          createButton.textContent = "Delete";
          createButton.setAttribute("id", data.price_id);
          createButton.setAttribute("onClick", "reply_click_del(this.id)");
        }
      });
    }

    function displyAllPrices() {

      for (i = 0; i < camps.length; i++) {
        campNames.push(camps[i].camp_name)
      }

      let uniqueCampNames = [...new Set(campNames)];

      uniqueCampNames.forEach(data => {
        var div = document.getElementById('allPrices');
        var createHeading = document.createElement('h3');
        div.appendChild(createHeading);
        createHeading.textContent = data;
        campName = data;

        loading.textContent = "";

        insertBody()
      });
    };
    displyAllPrices();
  }
  catch (err) {
    console.error(err.message)
  }
};
