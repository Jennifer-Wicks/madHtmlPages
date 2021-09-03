//data that will be received from the database - start
const camps = [
  //ls
  {
    season: "ls",
    accommodation_type: "Camping site tls - max 8 people",
    area: "Fish River Canyon",
    camp_name: "Ai-Ais",
    date: "2021-06-28T22:00:00.000Z",
    low_season_end: "2021-06-29T22:00:00.000Z",
    low_season_start: "2020-10-31T22:00:00.000Z",
    national_park: "Richtersveld Tranfortier Park",
    price_id: 1,
    sharing_price_hs: "",
    sharing_price_ls: "",
    single_price_hs: "100",
    single_price_ls: "100",
    supplier_name: "Namibia Wildlife Resort",
    warning_messages: "Some comping sites under construction due to flooding"
  },
  {
    season: "ls",
    accommodation_type: "Camping site nls - max 8 people",
    area: "Fish River Canyon",
    camp_name: "Ai-Ais",
    date: "2021-06-28T22:00:00.000Z",
    low_season_end: "2022-06-29T22:00:00.000Z",
    low_season_start: "2021-10-31T22:00:00.000Z",
    national_park: "Richtersveld Tranfortier Park",
    price_id: 2,
    sharing_price_hs: "",
    sharing_price_ls: "",
    single_price_hs: "200",
    single_price_ls: "200",
    supplier_name: "Namibia Wildlife Resort",
    warning_messages: "Some comping sites under construction due to flooding"
  },
  {
    season: "ls",
    accommodation_type: "Camping tls - Max 8 People",
    area: "Sossusvlei",
    camp_name: "Sesriem",
    date: "2021-06-28T22:00:00.000Z",
    low_season_end: "2021-06-29T22:00:00.000Z",
    low_season_start: "2020-10-31T22:00:00.000Z",
    national_park: "Namib Naukluft National Park",
    price_id: 3,
    sharing_price_hs: "490",
    sharing_price_ls: "490",
    single_price_hs: "",
    single_price_ls: "",
    supplier_name: "Namibia Wildlife Resort",
    warning_messages: "none"
  },
  {
    season: "ls",
    accommodation_type: "Camping nls - Max 8 People",
    area: "Sossusvlei",
    camp_name: "Sesriem",
    date: "2021-06-28T22:00:00.000Z",
    low_season_end: "2022-06-29T22:00:00.000Z",
    low_season_start: "2021-10-31T22:00:00.000Z",
    national_park: "Namib Naukluft National Park",
    price_id: 4,
    sharing_price_hs: "490",
    sharing_price_ls: "490",
    single_price_hs: "",
    single_price_ls: "",
    supplier_name: "Namibia Wildlife Resort",
    warning_messages: "none"
  },
  //hs
  {
    season: "hs",
    accommodation_type: "Camping site ths - max 8 people",
    area: "Fish River Canyon",
    camp_name: "Ai-Ais",
    date: "2021-06-28T22:00:00.000Z",
    high_season_end: "2021-10-30T22:00:00.000Z",
    high_season_start: "2021-06-30T22:00:00.000Z",
    national_park: "Richtersveld Tranfortier Park",
    price_id: 5,
    sharing_price_hs: "",
    sharing_price_ls: "",
    single_price_hs: "100",
    single_price_ls: "100",
    supplier_name: "Namibia Wildlife Resort",
    warning_messages: "Some comping sites under construction due to flooding"
  },
  {
    season: "hs",
    accommodation_type: "Camping ths - Max 8 People",
    area: "Sossusvlei",
    camp_name: "Sesriem",
    date: "2021-06-28T22:00:00.000Z",
    high_season_end: "2021-10-30T22:00:00.000Z",
    high_season_start: "2021-06-30T22:00:00.000Z",
    national_park: "Namib Naukluft National Park",
    price_id: 6,
    sharing_price_hs: "100",
    sharing_price_ls: "100",
    single_price_hs: "",
    single_price_ls: "",
    supplier_name: "Namibia Wildlife Resort",
    warning_messages: "none"
  },  
  {
    season: "hs",
    accommodation_type: "Camping site nhs - max 8 people",
    area: "Fish River Canyon",
    camp_name: "Ai-Ais",
    date: "2021-06-28T22:00:00.000Z",
    high_season_end: "2022-10-30T22:00:00.000Z",
    high_season_start: "2022-06-30T22:00:00.000Z",
    national_park: "Richtersveld Tranfortier Park",
    price_id: 7,
    sharing_price_hs: "",
    sharing_price_ls: "",
    single_price_hs: "200",
    single_price_ls: "200",
    supplier_name: "Namibia Wildlife Resort",
    warning_messages: "Some comping sites under construction due to flooding"
  },
  {
    season: "hs",
    accommodation_type: "Camping site 2nhs - max 8 people",
    area: "Fish River Canyon",
    camp_name: "Sesriem",
    date: "2021-06-28T22:00:00.000Z",
    high_season_end: "2022-10-30T22:00:00.000Z",
    high_season_start: "2022-06-30T22:00:00.000Z",
    national_park: "Richtersveld Tranfortier Park",
    price_id: 8,
    sharing_price_hs: "",
    sharing_price_ls: "",
    single_price_hs: "200",
    single_price_ls: "200",
    supplier_name: "Namibia Wildlife Resort",
    warning_messages: "Some comping sites under construction due to flooding"
  },
];
//data that will be received from the database - end

//global variables

const headings = ["Accommodation", "Sharing", "Single"];
const thisCampName = "Ai-Ais";
let today = new Date(2021, 1, 1);
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
//global functions

// Season dates to be used in headings
const seasonDates = {
  //this low season
  low_season_start: "01 November" + " " + lastYear,
  low_season_end: "30 June" + " " + today.getFullYear(),
  high_season_start: "01 July" + " " + today.getFullYear(),
  high_season_end: "31 October" + " " + today.getFullYear(),
};

const changeSeasonDatesToNextYear = () => {
  if (today >= nextLowSeasonStart && today <= nextLowSeasonEnd) {
    seasonDates.low_season_start = "01 Nov" + " " + today.getFullYear();
    seasonDates.low_season_end = "30 June" + " " + nextYear;
    
  }
}
changeSeasonDatesToNextYear()

const changeSeasonDatesToNextYearHs = () => {
  if (today > currentHighSeasonEnd) {
    seasonDates.high_season_start = "01 July" + " " + nextYear;
    seasonDates.high_season_end = "31 October" + " " + nextYear;
  }
}
changeSeasonDatesToNextYearHs()

const createHeadingsLs = () => {
  // Insert the headings low season
  var div = document.getElementById('lowSeason');
  var createTHead = document.createElement('thead');
  div.appendChild(createTHead);

  var createTRh = document.createElement('tr');
  createTHead.appendChild(createTRh);
  var createTDh = document.createElement('td');
  createTRh.appendChild(createTDh);
  createTDh.textContent = "";

  var createTDh = document.createElement('td');
  createTRh.appendChild(createTDh);
  createTDh.setAttribute("colspan", "2")
  createTDh.textContent = seasonDates.low_season_start + " " + "-" + " " + seasonDates.low_season_end;

  var createTR = document.createElement('tr');
  createTHead.appendChild(createTR);
  headings.forEach(data => {
  var createTH = document.createElement('th');
  createTR.appendChild(createTH);
  createTH.textContent = data;
  });
}

const createHeadingsNlSTlS = () => {

    seasonDates.low_season_start = "01 November" + " " + today.getFullYear();
    seasonDates.low_season_end = "30 June" + " " + nextYear;

    var div = document.getElementById('lowSeason');
    var createTHead = document.createElement('thead');
    div.appendChild(createTHead);

    var createTRh = document.createElement('tr');
    createTHead.appendChild(createTRh);
    var createTDh = document.createElement('td');
    createTRh.appendChild(createTDh);
    createTDh.textContent = "";

    var createTDh = document.createElement('td');
    createTRh.appendChild(createTDh);
    createTDh.setAttribute("colspan", "2")
    createTDh.textContent = seasonDates.low_season_start + " " + "-" + " " + seasonDates.low_season_end;

    var createTR = document.createElement('tr');
    createTHead.appendChild(createTR);
    headings.forEach(data => {
    var createTH = document.createElement('th');
    createTR.appendChild(createTH);
    createTH.textContent = data;
  });
};

const insertBody =() => { 
  if (today >= currentLowSeasonStart && today <= currentLowSeasonEnd) {
    createHeadingsLs();
    camps.forEach(data => {
      const createTBody = document.createElement('tbody');
      
      const dbDateLsE = new Date(data.low_season_end);
      
      if (today < dbDateLsE && dbDateLsE.getFullYear() === today.getFullYear()) {

        if (thisCampName === data.camp_name) {
          
          var div = document.getElementById('lowSeason');
          div.appendChild(createTBody);
          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.accommodation_type;
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.sharing_price_ls;
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.single_price_ls;
        }      
      }
    })
  } else if (today >= currentHighSeasonEnd && today <= nextLowSeasonEnd) {
    createHeadingsNlSTlS(); 
    camps.forEach(data => {
      const createTBody = document.createElement('tbody');
        
      const dbDateLsE = new Date(data.low_season_end);
        
      if (dbDateLsE.getFullYear() === nextYear) {

        if (thisCampName === data.camp_name) {
    
          var div = document.getElementById('lowSeason');
          div.appendChild(createTBody);
          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.accommodation_type;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.sharing_price_ls;

          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.single_price_ls;
        }      
      }
    })
  } 
}
insertBody();

const displayHideButtonsLs = () => {
  const thisLowSeasonButtons = document.getElementById("thisLowSeasonButtons");
  if (today >= currentHighSeasonStart && today <= currentHighSeasonEnd) {
    thisLowSeasonButtons.style.display = "none";
  } if (today >= currentLowSeasonStart && today <= currentLowSeasonEnd) {
      thisLowSeasonButtons.removeAttribute("style");
  }
}
displayHideButtonsLs()

//This high season

const createHeadingsHs = () => {
  // Insert the headings low season
  var div = document.getElementById('highSeason');
  var createTHead = document.createElement('thead');
  div.appendChild(createTHead);

  var createTRh = document.createElement('tr');
  createTHead.appendChild(createTRh);
  var createTDh = document.createElement('td');
  createTRh.appendChild(createTDh);
  createTDh.textContent = "";

  var createTDh = document.createElement('td');
  createTRh.appendChild(createTDh);
  createTDh.setAttribute("colspan", "2")
  createTDh.textContent = seasonDates.high_season_start + " " + "-" + " " + seasonDates.high_season_end;

  var createTR = document.createElement('tr');
  createTHead.appendChild(createTR);
  headings.forEach(data => {
    var createTH = document.createElement('th');
    createTR.appendChild(createTH);
    createTH.textContent = data;
  });
}

const insertSeasonHeadings = () => {
  if (today >= currentHighSeasonStart && today <= currentLowSeasonEnd) {
    return createHeadingsHs()
  } else if (today > currentHighSeasonEnd) {
    return createHeadingsHs()
  } 
} 
insertSeasonHeadings();
const insertBodyHs = () => { 
  if (today >= currentLowSeasonStart && today <= currentHighSeasonEnd) {
    createHeadingsHs()

    camps.forEach(data => {
      const createTBody = document.createElement('tbody');
      
      const dbDateHsE = new Date(data.high_season_end);
      
      if (today < dbDateHsE && dbDateHsE.getFullYear() === today.getFullYear()) {

        if (thisCampName === data.camp_name) {
  
          var div = document.getElementById('highSeason');
          div.appendChild(createTBody);
          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.accommodation_type;
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.sharing_price_ls;
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.single_price_ls;
        }      
      }
    }
  )
} else if (today > currentHighSeasonEnd && today < nextLowSeasonEnd) {
    camps.forEach(data => {
      const createTBody = document.createElement('tbody');
      
      const dbDateHsE = new Date(data.high_season_end);
      
      if (dbDateHsE.getFullYear() === nextYear) {

        if (thisCampName === data.camp_name) {
  
          var div = document.getElementById('highSeason');
          div.appendChild(createTBody);
          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.accommodation_type;
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.sharing_price_ls;
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.single_price_ls;
        }      
      }
    }
  )
} 
}
insertBodyHs();

//Next low season

const createHeadingsNlS = () => {

    seasonDates.low_season_start = "01 November" + " " + today.getFullYear();
    seasonDates.low_season_end = "30 June" + " " + nextYear;

    var div = document.getElementById('lowSeasonNls');
    var createTHead = document.createElement('thead');
    div.appendChild(createTHead);

    var createTRh = document.createElement('tr');
    createTHead.appendChild(createTRh);
    var createTDh = document.createElement('td');
    createTRh.appendChild(createTDh);
    createTDh.textContent = "";

    var createTDh = document.createElement('td');
    createTRh.appendChild(createTDh);
    createTDh.setAttribute("colspan", "2")
    createTDh.textContent = seasonDates.low_season_start + " " + "-" + " " + seasonDates.low_season_end;

    var createTR = document.createElement('tr');
    createTHead.appendChild(createTR);
    headings.forEach(data => {
    var createTH = document.createElement('th');
    createTR.appendChild(createTH);
    createTH.textContent = data;
  });
};

const nextLowSeason = () => {
  if (today >= currentLowSeasonStart && today <= currentLowSeasonEnd || today >= currentLowSeasonEnd && today < nextLowSeasonStart) {

  createHeadingsNlS();

  camps.forEach(data => {
    const createTBody = document.createElement('tbody');

    const dbDateLsE = new Date(data.low_season_end);

    if (dbDateLsE.getFullYear() === nextYear) {

      if (thisCampName === data.camp_name) {

      var div = document.getElementById('lowSeasonNls');
      div.appendChild(createTBody);
      var createTR = document.createElement('tr');
      createTBody.appendChild(createTR);

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = data.accommodation_type;

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = data.sharing_price_ls;

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = data.single_price_ls;
    }}
  })   
  } 
  else {
    let checkIfThereIsDataInNextLowSeason = document.getElementById('lowSeasonNls');
    let content = checkIfThereIsDataInNextLowSeason.firstElementChild;
    
    if (content === null) {
      const estimatedprices = () => {
        for (let i = 0; i < camps.length; i++ ) {
          if (camps[i].low_season_end > checkForNextSeasonRatesLs) {
          checkForNextSeasonRatesLs = camps[i].low_season_end.slice(0, 4);
          }    
        };
        // add the last rates to estimated prices so that the 20% price increase can be calculated
        
        if (nextYear + 1 > checkForNextSeasonRatesLs) { //nextYear + 1 > checkForNextSeasonRatesLs
        let estaccommodation_type = "";
        let estcamp_name = "";
        let estlow_season_end = "";
        let estlow_season_start = "";
        let estsharing_price_ls = 0;
        let estsingle_price_ls = 0;
        let estwarning_messages = "Estimated Prices";
    
        for (let i = 0; i < camps.length; i++ ) {
    
        if (camps[i].low_season_end > estlow_season_end) {
    
          estseason = camps[i].season,
          estaccommodation_type = camps[i].accommodation_type,
          estcamp_name = camps[i].camp_name,
          estlow_season_end = camps[i].low_season_end;
          estlow_season_start = camps[i].low_season_start,
    
          single_price_ls_cost = camps[i].single_price_ls
          single_price_ls_price_increase = camps[i].single_price_ls * 20 / 100
          single_price_ls_total = Number(single_price_ls_cost) + Number(single_price_ls_price_increase)
          estsingle_price_ls = single_price_ls_total
    
          sharing_price_ls_cost = camps[i].sharing_price_ls
          sharing_price_ls_price_increase = camps[i].sharing_price_ls * 20 / 100
          sharing_price_ls_total = Number(sharing_price_ls_cost) + Number(sharing_price_ls_price_increase)
          estsharing_price_ls = sharing_price_ls_total
          }
        }
    
        // check the dates and create new dates for the headings
        let lastYearOfRatesInDbLs = []; 
    
          for (let i = 0; i < camps.length; i++ ) {
            if (camps[i].low_season_end > lastYearOfRatesInDbLs) {
            lastYearOfRatesInDbLs = camps[i].low_season_end.slice(0, 4);
            lastYearOfRatesInDbFullYearLs = nextYear + camps[i].low_season_end.slice(4, 10);
            }
          }
    
          const createEstimatedPricesHeadings = () => {
            if (today >= currentHighSeasonEnd ) { 
            addExtraYear = 1;
            estimatedAddYear = Number(checkForNextSeasonRatesLs) + Number(addExtraYear);
            seasonDates.low_season_start = "01 Nov" + " " + checkForNextSeasonRatesLs;
            seasonDates.low_season_end = "30 June" + " " + estimatedAddYear ;  
    
            // Add the headings
            var div = document.getElementById('lowSeasonNls');
            var createTHead = document.createElement('thead');
            div.appendChild(createTHead);
    
            var createTRh = document.createElement('tr');
            createTHead.appendChild(createTRh);
            var createTDh = document.createElement('td');
            createTRh.appendChild(createTDh);
            createTDh.textContent = "";
    
            var createTDh = document.createElement('td');
            createTRh.appendChild(createTDh);
            createTDh.setAttribute("colspan", "2")
            createTDh.textContent = seasonDates.low_season_start + " " + "-" + " " + seasonDates.low_season_end;
    
            var createTR = document.createElement('tr');
            createTHead.appendChild(createTR);
            headings.forEach(data => {
              var createTH = document.createElement('th');
              createTR.appendChild(createTH);
              createTH.textContent = data;
            });
          }
        }
        createEstimatedPricesHeadings()
          //Add the body
          const createTBody = document.createElement('tbody');
    
          var div = document.getElementById('lowSeasonNls');
          div.appendChild(createTBody);
    
    
          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);
    
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTR.style.color = "red"
          createTR.style.textAlign = "center"
          createTD.textContent = estwarning_messages;
    
          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);               
    
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = estaccommodation_type;
    
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = estsharing_price_ls;
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = estsingle_price_ls;   
        };
    }
    estimatedprices();
  }}
};
nextLowSeason()

const estimatedprices = () => {
    for (let i = 0; i < camps.length; i++ ) {
      if (camps[i].low_season_end > checkForNextSeasonRatesLs) {
      checkForNextSeasonRatesLs = camps[i].low_season_end.slice(0, 4);
      }    
    };
    
    if (nextYear > checkForNextSeasonRatesLs) { //nextYear + 1 > checkForNextSeasonRatesLs
    let estaccommodation_type = "";
    let estcamp_name = "";
    let estlow_season_end = "";
    let estlow_season_start = "";
    let estsharing_price_ls = 0;
    let estsingle_price_ls = 0;
    let estwarning_messages = "Estimated Prices";

    for (let i = 0; i < camps.length; i++ ) {

    if (camps[i].low_season_end > estlow_season_end) {

      estseason = camps[i].season,
      estaccommodation_type = camps[i].accommodation_type,
      estcamp_name = camps[i].camp_name,
      estlow_season_end = camps[i].low_season_end;
      estlow_season_start = camps[i].low_season_start,

      single_price_ls_cost = camps[i].single_price_ls
      single_price_ls_price_increase = camps[i].single_price_ls * 20 / 100
      single_price_ls_total = Number(single_price_ls_cost) + Number(single_price_ls_price_increase)
      estsingle_price_ls = single_price_ls_total

      sharing_price_ls_cost = camps[i].sharing_price_ls
      sharing_price_ls_price_increase = camps[i].sharing_price_ls * 20 / 100
      sharing_price_ls_total = Number(sharing_price_ls_cost) + Number(sharing_price_ls_price_increase)
      estsharing_price_ls = sharing_price_ls_total
      }
    }

    // check the dates and create new dates for the headings
    let lastYearOfRatesInDbLs = []; 

      for (let i = 0; i < camps.length; i++ ) {
        if (camps[i].low_season_end > lastYearOfRatesInDbLs) {
        lastYearOfRatesInDbLs = camps[i].low_season_end.slice(0, 4);
        lastYearOfRatesInDbFullYearLs = nextYear + camps[i].low_season_end.slice(4, 10);
        }
      }

      const createEstimatedPricesHeadings = () => {
        if (today >= currentHighSeasonEnd ) { 
        addExtraYear = 1;
        estimatedAddYear = Number(checkForNextSeasonRatesLs) + Number(addExtraYear);
        seasonDates.low_season_start = "01 Nov" + " " + checkForNextSeasonRatesLs;
        seasonDates.low_season_end = "30 June" + " " + estimatedAddYear ;  

        // Add the headings
        var div = document.getElementById('lowSeasonNls');
        var createTHead = document.createElement('thead');
        div.appendChild(createTHead);

        var createTRh = document.createElement('tr');
        createTHead.appendChild(createTRh);
        var createTDh = document.createElement('td');
        createTRh.appendChild(createTDh);
        createTDh.textContent = "";

        var createTDh = document.createElement('td');
        createTRh.appendChild(createTDh);
        createTDh.setAttribute("colspan", "2")
        createTDh.textContent = seasonDates.low_season_start + " " + "-" + " " + seasonDates.low_season_end;

        var createTR = document.createElement('tr');
        createTHead.appendChild(createTR);
        headings.forEach(data => {
          var createTH = document.createElement('th');
          createTR.appendChild(createTH);
          createTH.textContent = data;
        });
      }
    }
    createEstimatedPricesHeadings()
      //Add the body
      const createTBody = document.createElement('tbody');

      var div = document.getElementById('lowSeasonNls');
      div.appendChild(createTBody);


      var createTR = document.createElement('tr');
      createTBody.appendChild(createTR);

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTR.style.color = "red"
      createTR.style.textAlign = "center"
      createTD.textContent = estwarning_messages;

      var createTR = document.createElement('tr');
      createTBody.appendChild(createTR);               

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = estaccommodation_type;

      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = estsharing_price_ls;
      var createTD = document.createElement('td');
      createTR.appendChild(createTD);
      createTD.textContent = estsingle_price_ls;   
    };
}
estimatedprices();

//Next high season

const nextHighSeason = () => {
  if (today >= currentLowSeasonStart && today <= currentHighSeasonEnd) {

    seasonDates.high_season_start = "01 July" + " " + nextYear;
    seasonDates.high_season_end = "31 October" + " " + nextYear;

    var div = document.getElementById('highSeasonNhs');
    var createTHead = document.createElement('thead');
    div.appendChild(createTHead);

    var createTRh = document.createElement('tr');
    createTHead.appendChild(createTRh);
    var createTDh = document.createElement('td');
    createTRh.appendChild(createTDh);
    createTDh.textContent = "";

    var createTDh = document.createElement('td');
    createTRh.appendChild(createTDh);
    createTDh.setAttribute("colspan", "2")
    createTDh.textContent = seasonDates.high_season_start + " " + "-" + " " + seasonDates.high_season_end;

    var createTR = document.createElement('tr');
    createTHead.appendChild(createTR);
    headings.forEach(data => {
      var createTH = document.createElement('th');
      createTR.appendChild(createTH);
      createTH.textContent = data;
    }
  );
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
          createTD.textContent = data.sharing_price_ls;
  
          var createTD = document.createElement('td');
          createTR.appendChild(createTD);
          createTD.textContent = data.single_price_ls;
        }      
      }
    }
  )} else {
    const estNextYear = nextYear + 1;
    if (today >= nextLowSeasonStart) {

      seasonDates.high_season_start = "01 July" + " " + estNextYear;
      seasonDates.high_season_end = "31 October" + " " + estNextYear;

      var div = document.getElementById('highSeasonNhs');
      var createTHead = document.createElement('thead');
      div.appendChild(createTHead);

      var createTRh = document.createElement('tr');
      createTHead.appendChild(createTRh);
      var createTDh = document.createElement('td');
      createTRh.appendChild(createTDh);
      createTDh.textContent = "";

      var createTDh = document.createElement('td');
      createTRh.appendChild(createTDh);
      createTDh.setAttribute("colspan", "2")
      createTDh.textContent = seasonDates.high_season_start + " " + "-" + " " + seasonDates.high_season_end;

      var createTR = document.createElement('tr');
      createTHead.appendChild(createTR);
      headings.forEach(data => {
        var createTH = document.createElement('th');
        createTR.appendChild(createTH);
        createTH.textContent = data;
      });
      // Add estimated prices
      let checkForNextSeasonRatesHs = [];

      for (let i = 0; i < camps.length; i++ ) {
        if (camps[i].high_season_end > checkForNextSeasonRatesHs) {
          checkForNextSeasonRatesHs = camps[i].high_season_end.slice(0, 4);
        }}
        
        if (nextYear + 1 > checkForNextSeasonRatesHs) {
          let estseason = "";
          let estaccommodation_type = "";
          let estcamp_name = "";
          let esthigh_season_end = "";
          let esthigh_season_start = "";
          let estsharing_price_hs = 0;
          let estsingle_price_hs = 0;
          let estwarning_messages = "Estimated Prices";

        for (let i = 0; i < camps.length; i++ ) {

          if (camps[i].high_season_end > esthigh_season_end) {

            estseason = camps[i].season,
            estaccommodation_type = camps[i].accommodation_type,
            estcamp_name = camps[i].camp_name,
            esthigh_season_end = camps[i].high_season_end;
            esthigh_season_start = camps[i].high_season_start,
            
            single_price_hs_cost = camps[i].single_price_hs
            single_price_hs_price_increase = camps[i].single_price_hs * 20 / 100
            single_price_hs_total = Number(single_price_hs_cost) + Number(single_price_hs_price_increase)
            estsingle_price_hs = single_price_hs_total      
            
            sharing_price_hs_cost = camps[i].sharing_price_hs
            sharing_price_hs_price_increase = camps[i].sharing_price_hs * 20 / 100
            sharing_price_hs_total = Number(sharing_price_hs_cost) + Number(sharing_price_hs_price_increase)
            estsharing_price_hs = sharing_price_hs_total
          }
        }

      const estimatedPrices = () => {  
        for (let i = 0; i < camps.length; i++ ) {
          if (camps[i].high_season_end > lastYearOfRatesInDbHs) {
            lastYearOfRatesInDbHs = camps[i].high_season_end.slice(0, 4);
            lastYearOfRatesInDbFullYearHs = nextYear + camps[i].high_season_end.slice(4, 10);
          }}
          if (today >= nextLowSeasonStart && lastYearOfRatesInDbFullYearHs !== undefined) {
            addExtraYearHs = 1;
            estimatedAddYearHs = Number(checkForNextSeasonRatesHs) + Number(addExtraYearHs);
            seasonDates.high_season_start = "01 July" + " " + checkForNextSeasonRatesHs;
            seasonDates.high_season_end = "31 October" + " " + estimatedAddYearHs ;

            //Add the body
            const createTBody = document.createElement('tbody');
            
            var div = document.getElementById('highSeasonNhs');
            div.appendChild(createTBody);


            var createTR = document.createElement('tr');
            createTBody.appendChild(createTR);

            var createTD = document.createElement('td');
            createTR.appendChild(createTD);
            createTR.style.color = "red"
            createTR.style.textAlign = "center"
            createTD.textContent = estwarning_messages;

            var createTR = document.createElement('tr');
              createTBody.appendChild(createTR);
              
              

              var createTD = document.createElement('td');
              createTR.appendChild(createTD);
              createTD.textContent = estaccommodation_type;
              
              var createTD = document.createElement('td');
              createTR.appendChild(createTD);
              createTD.textContent = estsharing_price_hs;
              
              var createTD = document.createElement('td');
              createTR.appendChild(createTD);
              createTD.textContent = estsingle_price_hs;
          }
        };
        estimatedPrices();        
      };
    }      
  };
}
nextHighSeason()




