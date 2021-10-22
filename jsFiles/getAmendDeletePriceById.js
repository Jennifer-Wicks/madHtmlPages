//Get prices by Id to be used for change and delete functions
let price_id = 0;
let campById = [];

function reply_click(clicked_id) {
  price_id = clicked_id;
  getPricesById(price_id);
  campById = [];
}

const getPricesById = async (priceId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/priceListGetById/${priceId}`)
    const jsonData = await response.json()
    for (let i = 0; i < jsonData.length; i++) {
      campById.push(jsonData[i])
    }
  }
  catch (err) {
    console.error(err.message)
  }
  document.getElementById("supplier_name").setAttribute("value", campById[0].supplier_name)
  document.getElementById("area").setAttribute("value", campById[0].area)
  document.getElementById("national_park").setAttribute("value", campById[0].national_park)
  document.getElementById("camp_name").setAttribute("value", campById[0].camp_name)
  document.getElementById("accommodation_type").setAttribute("value", campById[0].accommodation_type)
  document.getElementById("low_season_start").setAttribute("value", campById[0].low_season_start)
  document.getElementById("low_season_end").setAttribute("value", campById[0].low_season_end)
  document.getElementById("high_season_start").setAttribute("value", campById[0].high_season_start)
  document.getElementById("high_season_end").setAttribute("value", campById[0].high_season_end)
  document.getElementById("accommodation_type").setAttribute("value", campById[0].accommodation_type)
  document.getElementById("sharing_price_ls").setAttribute("value", campById[0].sharing_price_ls)
  document.getElementById("single_price_ls").setAttribute("value", campById[0].single_price_ls)
  document.getElementById("sharing_price_hs").setAttribute("value", campById[0].sharing_price_hs)
  document.getElementById("single_price_hs").setAttribute("value", campById[0].single_price_hs)
  document.getElementById("warning_messages").setAttribute("value", campById[0].warning_messages)
};

//run function to delete a line

let price_id_del = 0;

function reply_click_del(clicked_id) {
  price_id_del = clicked_id;
  handleDeleteItemFromPriceList(price_id_del)
}

const handleDeleteItemFromPriceList = async (delId) => {
  try {
    fetch(`http://localhost:5000/api/NwrPriceList/${delId}`, {
      method: 'DELETE'
    })
  } catch (err) {
    console.error(err.message)
  }
  window.location = '/pages/displayAllPrices.html';
};

//run function to submit the changes
const handleAmendPriceList = async (priceId) => {
  try {
    const date = Date();
    const supplier_name = document.getElementById("supplier_name").value;
    const area = document.getElementById("area").value;
    const national_park = document.getElementById("national_park").value;
    const camp_name = document.getElementById("camp_name").value;
    const low_season_start = document.getElementById("low_season_start").value;
    const low_season_end = document.getElementById("low_season_end").value;
    const high_season_start = document.getElementById("high_season_start").value;
    const high_season_end = document.getElementById("high_season_end").value;
    const accommodation_type = document.getElementById("accommodation_type").value;
    const sharing_price_ls = document.getElementById("sharing_price_ls").value;
    const single_price_ls = document.getElementById("single_price_ls").value;
    const sharing_price_hs = document.getElementById("sharing_price_hs").value;
    const single_price_hs = document.getElementById("single_price_hs").value;
    const warning_messages = document.getElementById("warning_messages").value;
    price_id = priceId

    const body = {
      price_id,
      supplier_name,
      area,
      national_park,
      camp_name,
      low_season_start,
      low_season_end,
      high_season_start,
      high_season_end,
      accommodation_type,
      sharing_price_ls,
      single_price_ls,
      sharing_price_hs,
      single_price_hs,
      warning_messages,
      date
    };
    await fetch('http://localhost:5000/api/NwrPriceList', {
      method: 'PUT',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    window.location = '/pages/displayAllPrices.html';
  } catch (err) {
    console.error(err.message);
  }
};