const handleSubmitCustomerDetails = async () => {
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
    await fetch('http://localhost:5000/api/*********', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    window.location = '/pages/*********';
  } catch (err) {
    console.error(err.message);
  }
};


const handleSubmitCustomerAntennary = async () => {
  try {
    const email = document.getElementById('email').value;
    const resort1 = document.getElementById('resort1').value;
    const accomtype1 = document.getElementById('accomtype1').value;
    const arriveday1 = document.getElementById('arriveday1').value;
    const departday1 = document.getElementById('departday1').value;
    const resort2 = document.getElementById('resort1').value;
    const accomtype2 = document.getElementById('accomtype1').value;
    const arriveday2 = document.getElementById('arriveday1').value;
    const departday2 = document.getElementById('departday1').value;
    const resort3 = document.getElementById('resort1').value;
    const accomtype3 = document.getElementById('accomtype1').value;
    const arriveday3 = document.getElementById('arriveday1').value;
    const departday13 = document.getElementById('departday1').value;
    const comments = document.getElementById('comments').value;
    const newsletter = document.getElementById('newsletter').value;

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
    await fetch('http://localhost:5000/api/*********', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    window.location = '/pages/*********';
  } catch (err) {
    console.error(err.message);
  }
};

