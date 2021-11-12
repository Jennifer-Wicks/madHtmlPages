const customerInfo = [];
let customerBookings = [];

function cuptureCustomerInfoAndBooking() {
  const getCustomerInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/postBookingCustomerInformation/customer')
      const jsonData = await response.json()
      for (let i = 0; i < jsonData.length; i++) {
        customerInfo.push(jsonData[i])
      }
    }
    catch (err) {
      console.error(err.message)
    }
  };
  getCustomerInfo();
}
cuptureCustomerInfoAndBooking();


const handleSubmitCustomerInfo = async () => {
  for (var i = 0; i < customerInfo.length; i++) {
    const chechEmail = document.getElementById('email').value;
    if (customerInfo[i].email !== chechEmail) {
      try {
        const date = Date().slice(8, 10) + Date().slice(3, 7) + Date().slice(10, 15);
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const nationality = document.getElementById('nationality').value;
        const tel = document.getElementById('tel').value;
        const email = document.getElementById('email').value;
        const adults = document.getElementById('adults').value;
        const child1_5 = document.getElementById('child1-5').value;
        const child6_12 = document.getElementById('child6-12').value;

        const body = {
          name,
          surname,
          nationality,
          tel,
          email,
          adults,
          child1_5,
          child6_12,
          date
        };
        await fetch('http://localhost:5000/api/postBookingCustomerInformation/customer', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        window.location = '/pages/new-booking-form.html';
      }
      catch (err) {
        console.error(err.message);
      }
    }
  }
}

const handleSubmitCustomerIntennary = async () => {
  try {
    const date = Date().slice(8, 10) + Date().slice(3, 7) + Date().slice(10, 15);
    const email = document.getElementById('email').value;
    const resort1 = document.getElementById('resort1').value;
    const accomtype1 = document.getElementById('accomtype1').value;
    const arriveday1 = document.getElementById('arriveday1').value;
    const departday1 = document.getElementById('departday1').value;
    const resort2 = document.getElementById('resort2').value;
    const accomtype2 = document.getElementById('accomtype2').value;
    const arriveday2 = document.getElementById('arriveday2').value;
    const departday2 = document.getElementById('departday2').value;
    const resort3 = document.getElementById('resort3').value;
    const accomtype3 = document.getElementById('accomtype3').value;
    const arriveday3 = document.getElementById('arriveday3').value;
    const departday13 = document.getElementById('departday3').value;
    const comments = document.getElementById('comments').value;
    let newsletter = document.getElementById('newsletter');
    newsletter.checked == true ? newsletter = "Yes" : newsletter = "No"
    const body = {
      email,
      resort1,
      accomtype1,
      arriveday1,
      departday1,
      resort2,
      accomtype2,
      arriveday2,
      departday2,
      resort3,
      accomtype3,
      arriveday3,
      departday13,
      comments,
      newsletter,
      date
    };
    await fetch('http://localhost:5000/api/postBookingCustomerInformation/booking', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error(err.message);
  }
};


document.getElementById("book").addEventListener("click", function (event) {
  event.preventDefault()
  handleSubmitCustomerInfo(event)
  handleSubmitCustomerIntennary(event)
});

document.getElementById("quote").addEventListener("click", function (event) {
  event.preventDefault()
  handleSubmitCustomerInfo(event)
  handleSubmitCustomerIntennary(event)
});

console.log('customerInfo', customerInfo)
