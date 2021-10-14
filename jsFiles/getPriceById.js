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

//run function to submit the changes

//run function to delete a line
