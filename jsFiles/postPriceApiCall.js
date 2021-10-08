const handleSubmitPriceList = async () => {
  try {
    const date = Date().slice(8, 10) + Date().slice(3, 7) + Date().slice(10, 15);

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

    const body = {
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
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    //  window.location = '/pages/input-new-price-list.html';
  } catch (err) {
    console.error(err.message);
  }
};

handleSubmitPriceList();