import { BASE_URL } from './modules/config.js';

console.log('add user');

// pasigauti visus input el
const nameEl = document.getElementById('name');
const surnameEl = document.getElementById('surname');
const emailEl = document.getElementById('email');
const service_idEl = document.getElementById('service_id');

// nusitaikyti i forma
const formEl = document.forms[0];

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUserObj = {
    name: nameEl.value,
    surname: surnameEl.value,
    email: emailEl.value,
    service_id: service_idEl.value,
  };
  console.log('newUserObj ===', newUserObj);
  createUser(newUserObj);
});

async function createUser(userObj) {
  const resp = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  });
  console.log('resp ===', resp);

  if (resp.status === 201) {
    // sukurta sekmingai
    // window.location.href = 'index.html';
  } else {
    console.error('something went wrong');
  }
}

// parsisiusti services
async function getServices() {
  const resp = await fetch(`${BASE_URL}/services`);
  const serArr = await resp.json();
  console.log('serArr ===', serArr);
  renderOptions(serArr, 'service_id');
}
getServices();
// sugeneruoti options su createElement

// <option value="1">Trial</option>
function renderOptions(arr, destId) {
  const selectEl = document.getElementById(destId);
  selectEl.innerHTML = '';
  arr.forEach((serObj) => {
    const optionEl = document.createElement('option');
    optionEl.value = serObj._id;
    optionEl.textContent = serObj.name;
    selectEl.appendChild(optionEl);
  });
}
