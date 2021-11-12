const camps = [];

const getAllPrices = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/NwrPriceList')
    const jsonData = await response.json()
    for (let i = 0; i < jsonData.length; i++) {
      camps.push(jsonData[i])
    }
  }
  catch (err) {
    console.error(err.message)
  }
};
getAllPrices();

const displayLoad = () => {
  // Insert the loading...
  var div = document.getElementById('loading');
  var loading = document.createElement('h1');
  div.appendChild(loading);
  loading.textContent = "Getting prices.....";
  setTimeout(function () {
    loading.textContent = "";
  }, 2000);
}
displayLoad()

setTimeout(function () {

  const headings = ["Accommodation", "Sharing", "Single"];
  const thisCampName = "Jakkalsputz Camp";
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
  let estwarning_messages = "Estimated Prices";
  let checkForErrorMess = [];

  //global functions
  // Season dates to be used in headings

  for (let i = 0; i < camps.length; i++) {
    if (thisCampName === camps[i].camp_name) {
      checkForErrorMess = camps[i].warning_messages
    }
  }

  const seasonDates = {
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
    var div = document.getElementById('lowSeason');
    var createTHead = document.createElement('thead');
    div.appendChild(createTHead);

    var createTRh = document.createElement('tr');
    createTHead.appendChild(createTRh);

    camps.map(data => {

      const dbDateLsE = new Date(data.low_season_end);

      if (today < dbDateLsE && dbDateLsE.getFullYear() === today.getFullYear()) {

        if (thisCampName === data.camp_name) {
          var createTDh = document.createElement('td');
          createTRh.appendChild(createTDh);
          createTDh.style.color = "red"
          createTDh.style.textAlign = "left"
          createTDh.textContent = data.warning_messages;
        }
      }
    });

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
    createTDh.style.color = "red"
    createTDh.style.textAlign = "left"
    createTDh.textContent = checkForErrorMess;

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

  const insertBody = () => {
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
    }
    else if (today >= currentHighSeasonEnd && today <= nextLowSeasonEnd) {
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

  const createHeadingsHs = () => {
    var div = document.getElementById('highSeason');
    var createTHead = document.createElement('thead');
    div.appendChild(createTHead);

    var createTRh = document.createElement('tr');
    createTHead.appendChild(createTRh);

    camps.map(data => {
      const dbDateHsE = new Date(data.high_season_end);

      if (today < dbDateHsE && dbDateHsE.getFullYear() === today.getFullYear()) {

        if (thisCampName === data.camp_name) {
          if (data.warning_messages !== "") {
            var createTDh = document.createElement('td');
            createTRh.appendChild(createTDh);
            createTDh.style.color = "red"
            createTDh.style.textAlign = "left"
            createTDh.textContent = data.warning_messages;
          }
        }
      }
    })


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
            createTD.textContent = data.sharing_price_hs;

            var createTD = document.createElement('td');
            createTR.appendChild(createTD);
            createTD.textContent = data.single_price_hs;
          }
        }
      }
      )
    } else if (today > currentHighSeasonEnd && today < nextLowSeasonEnd) {

      const createHeadingsNHs = () => {
        var div = document.getElementById('highSeason');
        var createTHead = document.createElement('thead');
        div.appendChild(createTHead);

        var createTRh = document.createElement('tr');
        createTHead.appendChild(createTRh);

        if (today > currentHighSeasonEnd) {
          var createTDh = document.createElement('td');
          createTRh.appendChild(createTDh);
          createTDh.style.color = "red"
          createTDh.style.textAlign = "left"
          createTDh.textContent = checkForErrorMess;
        }

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
      createHeadingsNHs()
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
            createTD.textContent = data.sharing_price_hs;

            var createTD = document.createElement('td');
            createTR.appendChild(createTD);
            createTD.textContent = data.single_price_hs;
          }
        }
      })
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

    camps.map(data => {
      const dbDateHsE = new Date(data.high_season_end);

      if (today < dbDateHsE && dbDateHsE.getFullYear() === today.getFullYear()) {

        if (thisCampName === data.camp_name) {
          if (data.warning_messages !== "") {
            var createTDh = document.createElement('td');
            createTRh.appendChild(createTDh);
            createTDh.style.color = "red"
            createTDh.style.textAlign = "left"
            createTDh.textContent = data.warning_messages;
          }
        }
      }
    })

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
          }
        }
      })
    }
    else {
      let checkIfThereIsDataInNextLowSeason = document.getElementById('lowSeasonNls');
      let content = checkIfThereIsDataInNextLowSeason.firstElementChild;
      let estimatedCamp = [];

      if (content === null) {
        const estimatedprices = () => {
          for (let i = 0; i < camps.length; i++) {
            if (camps[i].low_season_end > checkForNextSeasonRatesLs) {
              checkForNextSeasonRatesLs = camps[i].low_season_end.slice(0, 4);
            }
          };
          // add the last rates to estimated prices so that the 20% price increase can be calculated
          if (nextYear + 1 > checkForNextSeasonRatesLs) {
            let estlow_season_end = "";
            let estwarning_messages = "Estimated Prices";

            for (let i = 0; i < camps.length; i++) {

              if (camps[i].low_season_end >= estlow_season_end) {
                estimatedCamp.push({
                  estaccommodation_type: estaccommodation_type = camps[i].accommodation_type,
                  estcamp_name: estcamp_name = camps[i].camp_name,
                  estlow_season_end: estlow_season_end = camps[i].low_season_end,
                  estlow_season_start: estlow_season_start = camps[i].low_season_start,

                  single_price_ls_cost: single_price_ls_cost = camps[i].single_price_ls,
                  single_price_ls_price_increase: Math.round(single_price_ls_price_increase = camps[i].single_price_ls * 20 / 100),
                  single_price_ls_total: single_price_ls_total = Math.round(Number(single_price_ls_cost)) + Math.round(Number(single_price_ls_price_increase)),
                  estsingle_price_ls: estsingle_price_ls = single_price_ls_total,

                  sharing_price_ls_cost: sharing_price_ls_cost = camps[i].sharing_price_ls,
                  sharing_price_ls_price_increase: sharing_price_ls_price_increase = Math.round(camps[i].sharing_price_ls * 20 / 100),
                  sharing_price_ls_total: sharing_price_ls_total = Math.round(Number(sharing_price_ls_cost)) + Math.round(Number(sharing_price_ls_price_increase)),
                  estsharing_price_ls: estsharing_price_ls = sharing_price_ls_total
                });
              }
            }
            // check the dates and create new dates for the headings
            let lastYearOfRatesInDbLs = [];

            for (let i = 0; i < camps.length; i++) {
              if (camps[i].low_season_end > lastYearOfRatesInDbLs) {
                lastYearOfRatesInDbLs = camps[i].low_season_end.slice(0, 4);
                lastYearOfRatesInDbFullYearLs = nextYear + camps[i].low_season_end.slice(4, 10);
              }
            }

            const createEstimatedPricesHeadings = () => {
              if (today >= currentHighSeasonEnd) {
                addExtraYear = 1;
                estimatedAddYear = Number(checkForNextSeasonRatesLs) + Number(addExtraYear);
                seasonDates.low_season_start = "01 Nov" + " " + checkForNextSeasonRatesLs;
                seasonDates.low_season_end = "30 June" + " " + estimatedAddYear;

                // Add the headings
                var div = document.getElementById('lowSeasonNls');
                var createTHead = document.createElement('thead');
                div.appendChild(createTHead);

                var createTRh = document.createElement('tr');
                createTHead.appendChild(createTRh);

                if (today >= currentHighSeasonEnd) {
                  var createTDh = document.createElement('td');
                  createTRh.appendChild(createTDh);
                  createTDh.style.color = "red"
                  createTDh.style.textAlign = "left"
                  createTDh.textContent = checkForErrorMess;
                }

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
            createTR.style.textAlign = "left"
            createTD.textContent = estwarning_messages;

            estimatedCamp.forEach(data => {

              var createTR = document.createElement('tr');
              createTBody.appendChild(createTR);

              if (thisCampName === data.estcamp_name) {

                var createTD = document.createElement('td');
                createTR.appendChild(createTD);
                createTD.textContent = data.estaccommodation_type;

                var createTD = document.createElement('td');
                createTR.appendChild(createTD);
                createTD.textContent = data.estsharing_price_ls;

                if (data.estsingle_price_ls > 0) {
                  var createTD = document.createElement('td');
                  createTR.appendChild(createTD);
                  createTD.textContent = data.estsingle_price_ls;
                }
              }
            })
          };
        }
        estimatedprices();
      }
    }
  };
  nextLowSeason()

  const nextHighSeason = () => {
    if (today >= currentLowSeasonStart && today <= currentHighSeasonEnd) {

      seasonDates.high_season_start = "01 July" + " " + nextYear;
      seasonDates.high_season_end = "31 October" + " " + nextYear;

      var div = document.getElementById('highSeasonNhs');
      var createTHead = document.createElement('thead');
      div.appendChild(createTHead);

      var createTRh = document.createElement('tr');
      createTHead.appendChild(createTRh);


      if (today >= currentLowSeasonStart && today <= currentHighSeasonEnd) {
        var createTDh = document.createElement('td');
        createTRh.appendChild(createTDh);
        createTDh.style.color = "red"
        createTDh.style.textAlign = "left"
        createTDh.textContent = checkForErrorMess;
      }

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
            createTD.textContent = data.sharing_price_hs;

            var createTD = document.createElement('td');
            createTR.appendChild(createTD);
            createTD.textContent = data.single_price_hs;
          }
        }
      })
    } else {
      const estNextYear = nextYear + 1;
      if (today >= nextLowSeasonStart) {

        seasonDates.high_season_start = "01 July" + " " + estNextYear;
        seasonDates.high_season_end = "31 October" + " " + estNextYear;

        var div = document.getElementById('highSeasonNhs');
        var createTHead = document.createElement('thead');
        div.appendChild(createTHead);

        var createTRh = document.createElement('tr');
        createTHead.appendChild(createTRh);

        if (today >= nextLowSeasonStart) {
          var createTDh = document.createElement('td');
          createTRh.appendChild(createTDh);
          createTDh.style.color = "red"
          createTDh.style.textAlign = "left"
          createTDh.textContent = checkForErrorMess;
        }

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

        for (let i = 0; i < camps.length; i++) {
          if (camps[i].high_season_end > checkForNextSeasonRatesHs) {
            checkForNextSeasonRatesHs = camps[i].high_season_end.slice(0, 4);
          }
        }

        if (nextYear + 1 > checkForNextSeasonRatesHs) {
          let esthigh_season_end = "";
          let estimatedCamp = [];
          for (let i = 0; i < camps.length; i++) {

            if (camps[i].high_season_end >= esthigh_season_end) {
              estimatedCamp.push({
                estaccommodation_type: estaccommodation_type = camps[i].accommodation_type,
                estcamp_name: estcamp_name = camps[i].camp_name,
                esthigh_season_end: esthigh_season_end = camps[i].high_season_end,
                esthigh_season_start: esthigh_season_start = camps[i].high_season_start,

                estsingle_price_hs_cost: single_price_hs_cost = camps[i].single_price_hs,
                single_price_hs_price_increase: single_price_hs_price_increase = Math.round(camps[i].single_price_hs * 20 / 100),
                single_price_hs_total: single_price_hs_total = Math.round(Number(single_price_hs_cost)) + Math.round(Number(single_price_hs_price_increase)),
                estsingle_price_hs: estsingle_price_hs = single_price_hs_total,

                sharing_price_hs_cost: sharing_price_hs_cost = camps[i].sharing_price_hs,
                sharing_price_hs_price_increase: sharing_price_hs_price_increase = Math.round(camps[i].sharing_price_hs * 20 / 100),
                sharing_price_hs_total: sharing_price_hs_total = Math.round(Number(sharing_price_hs_cost)) + Math.round(Number(sharing_price_hs_price_increase)),
                estsharing_price_hs: estsharing_price_hs = sharing_price_hs_total,
              });
            }
          }

          const estimatedPrices = () => {
            for (let i = 0; i < camps.length; i++) {
              if (camps[i].high_season_end > lastYearOfRatesInDbHs) {
                lastYearOfRatesInDbHs = camps[i].high_season_end.slice(0, 4);
                lastYearOfRatesInDbFullYearHs = nextYear + camps[i].high_season_end.slice(4, 10);
              }
            }
            if (today >= nextLowSeasonStart && lastYearOfRatesInDbFullYearHs !== undefined) {
              addExtraYearHs = 1;
              estimatedAddYearHs = Number(checkForNextSeasonRatesHs) + Number(addExtraYearHs);
              seasonDates.high_season_start = "01 July" + " " + checkForNextSeasonRatesHs;
              seasonDates.high_season_end = "31 October" + " " + estimatedAddYearHs;

              //Add the body
              const createTBody = document.createElement('tbody');

              var div = document.getElementById('highSeasonNhs');
              div.appendChild(createTBody);

              var createTR = document.createElement('tr');
              createTBody.appendChild(createTR);

              var createTD = document.createElement('td');
              createTR.appendChild(createTD);
              createTR.style.color = "red"
              createTR.style.textAlign = "left"
              createTD.textContent = estwarning_messages;

              estimatedCamp.forEach(data => {
                var createTR = document.createElement('tr');
                createTBody.appendChild(createTR);

                if (thisCampName === data.estcamp_name) {

                  var createTD = document.createElement('td');
                  createTR.appendChild(createTD);
                  createTD.textContent = data.estaccommodation_type;

                  var createTD = document.createElement('td');
                  createTR.appendChild(createTD);
                  createTD.textContent = data.estsharing_price_hs;

                  if (data.estsingle_price_hs > 0) {
                    var createTD = document.createElement('td');
                    createTR.appendChild(createTD);
                    createTD.textContent = data.estsingle_price_hs;
                  }
                }
              });
            }
          };
          estimatedPrices();
        };
      }
    };
  }
  nextHighSeason()

  function estLowSeasonNls() {

    let estimatedCamp = [];

    const estimatedprices = () => {
      for (let i = 0; i < camps.length; i++) {
        if (camps[i].low_season_end > checkForNextSeasonRatesLs) {
          checkForNextSeasonRatesLs = camps[i].low_season_end.slice(0, 4);
        }
      };
      // add the last rates to estimated prices so that the 20% price increase can be calculated
      if (nextYear > checkForNextSeasonRatesLs) {
        let estlow_season_end = "";
        let estwarning_messages = "Estimated Prices";

        for (let i = 0; i < camps.length; i++) {

          if (camps[i].low_season_end >= estlow_season_end) {
            estimatedCamp.push({
              estaccommodation_type: estaccommodation_type = camps[i].accommodation_type,
              estcamp_name: estcamp_name = camps[i].camp_name,
              estlow_season_end: estlow_season_end = camps[i].low_season_end,
              estlow_season_start: estlow_season_start = camps[i].low_season_start,

              single_price_ls_cost: single_price_ls_cost = camps[i].single_price_ls,
              single_price_ls_price_increase: Math.round(single_price_ls_price_increase = camps[i].single_price_ls * 20 / 100),
              single_price_ls_total: single_price_ls_total = Math.round(Number(single_price_ls_cost)) + Math.round(Number(single_price_ls_price_increase)),
              estsingle_price_ls: estsingle_price_ls = single_price_ls_total,

              sharing_price_ls_cost: sharing_price_ls_cost = camps[i].sharing_price_ls,
              sharing_price_ls_price_increase: sharing_price_ls_price_increase = Math.round(camps[i].sharing_price_ls * 20 / 100),
              sharing_price_ls_total: sharing_price_ls_total = Math.round(Number(sharing_price_ls_cost)) + Math.round(Number(sharing_price_ls_price_increase)),
              estsharing_price_ls: estsharing_price_ls = sharing_price_ls_total
            });
          }
        }
        // check the dates and create new dates for the headings
        let lastYearOfRatesInDbLs = [];

        for (let i = 0; i < camps.length; i++) {
          if (camps[i].low_season_end > lastYearOfRatesInDbLs) {
            lastYearOfRatesInDbLs = camps[i].low_season_end.slice(0, 4);
            lastYearOfRatesInDbFullYearLs = nextYear + camps[i].low_season_end.slice(4, 10);
          }
        }

        const createTBody = document.createElement('tbody');

        var div = document.getElementById('lowSeasonNls');
        div.appendChild(createTBody);

        var createTR = document.createElement('tr');
        createTBody.appendChild(createTR);

        var createTD = document.createElement('td');
        createTR.appendChild(createTD);
        createTR.style.color = "red"
        createTR.style.textAlign = "left"
        createTD.textContent = estwarning_messages;

        estimatedCamp.forEach(data => {

          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);

          if (thisCampName === data.estcamp_name) {

            var createTD = document.createElement('td');
            createTR.appendChild(createTD);
            createTD.textContent = data.estaccommodation_type;

            var createTD = document.createElement('td');
            createTR.appendChild(createTD);
            createTD.textContent = data.estsharing_price_ls;

            if (data.estsingle_price_ls > 0) {
              var createTD = document.createElement('td');
              createTR.appendChild(createTD);
              createTD.textContent = data.estsingle_price_ls;
            }
          }
        })
      };
    }
    estimatedprices();
  }
  estLowSeasonNls()

  function estHighSeasonNhs() {
    const estNextYear = nextYear + 1;

    // Add estimated prices
    let checkForNextSeasonRatesHs = [];

    for (let i = 0; i < camps.length; i++) {
      if (camps[i].high_season_end > checkForNextSeasonRatesHs) {
        checkForNextSeasonRatesHs = camps[i].high_season_end.slice(0, 4);
      }
    }

    if (nextYear > checkForNextSeasonRatesHs) {
      let esthigh_season_end = "";
      let estimatedCamp = [];

      for (let i = 0; i < camps.length; i++) {

        if (camps[i].high_season_end >= esthigh_season_end) {
          estimatedCamp.push({
            estaccommodation_type: estaccommodation_type = camps[i].accommodation_type,
            estcamp_name: estcamp_name = camps[i].camp_name,
            esthigh_season_end: esthigh_season_end = camps[i].high_season_end,
            esthigh_season_start: esthigh_season_start = camps[i].high_season_start,

            estsingle_price_hs_cost: single_price_hs_cost = camps[i].single_price_hs,
            single_price_hs_price_increase: single_price_hs_price_increase = Math.round(camps[i].single_price_hs * 20 / 100),
            single_price_hs_total: single_price_hs_total = Math.round(Number(single_price_hs_cost)) + Math.round(Number(single_price_hs_price_increase)),
            estsingle_price_hs: estsingle_price_hs = single_price_hs_total,

            sharing_price_hs_cost: sharing_price_hs_cost = camps[i].sharing_price_hs,
            sharing_price_hs_price_increase: sharing_price_hs_price_increase = Math.round(camps[i].sharing_price_hs * 20 / 100),
            sharing_price_hs_total: sharing_price_hs_total = Math.round(Number(sharing_price_hs_cost)) + Math.round(Number(sharing_price_hs_price_increase)),
            estsharing_price_hs: estsharing_price_hs = sharing_price_hs_total,
          });
        }
      }
      const estimatedPrices = () => {
        for (let i = 0; i < camps.length; i++) {
          if (camps[i].high_season_end > lastYearOfRatesInDbHs) {
            lastYearOfRatesInDbHs = camps[i].high_season_end.slice(0, 4);
            lastYearOfRatesInDbFullYearHs = nextYear + camps[i].high_season_end.slice(4, 10);
          }
        }

        addExtraYearHs = 1;
        estimatedAddYearHs = Number(checkForNextSeasonRatesHs) + Number(addExtraYearHs);
        seasonDates.high_season_start = "01 July" + " " + checkForNextSeasonRatesHs;
        seasonDates.high_season_end = "31 October" + " " + estimatedAddYearHs;

        //Add the body
        const createTBody = document.createElement('tbody');

        var div = document.getElementById('highSeasonNhs');
        div.appendChild(createTBody);

        var createTR = document.createElement('tr');
        createTBody.appendChild(createTR);

        var createTD = document.createElement('td');
        createTR.appendChild(createTD);
        createTR.style.color = "red"
        createTR.style.textAlign = "left"
        createTD.textContent = estwarning_messages;

        estimatedCamp.forEach(data => {
          var createTR = document.createElement('tr');
          createTBody.appendChild(createTR);

          if (thisCampName === data.estcamp_name) {

            var createTD = document.createElement('td');
            createTR.appendChild(createTD);
            createTD.textContent = data.estaccommodation_type;

            var createTD = document.createElement('td');
            createTR.appendChild(createTD);
            createTD.textContent = data.estsharing_price_hs;

            if (data.estsingle_price_hs > 0) {
              var createTD = document.createElement('td');
              createTR.appendChild(createTD);
              createTD.textContent = data.estsingle_price_hs;
            }
          }
        });
      };
      estimatedPrices();
    };
  }
  estHighSeasonNhs()

  console.log('today', today)
}, 2000);
