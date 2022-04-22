import { renderCards } from './modules/html.js';

const BASE_URL = 'http://localhost:3000/api';
console.log('sevices.js');

const cardContainerEl = document.querySelector('.cards-container');
const addBntEl = document.querySelector('.btn-add');

async function getServices() {
  try {
    const resp = await fetch(`${BASE_URL}/services`);
    console.log('resp ===', resp);
    // fetch nepermeta kodo i catch bloka jei status yra klaidos
    if (resp.ok === false) throw new Error('something is wrong');

    const servicesArr = await resp.json();
    console.log('servicesArr ===', servicesArr);
    console.log('piesiam korteles');
    renderCards(servicesArr, cardContainerEl);
    // createCard(servicesArr[0]);
  } catch (error) {
    console.warn('error ===', error);
    console.log('atvaizduojam klaida');
  }
}

// New membership mygtuko pagalba issiusti
// addBntEl.addEventListener('click', () => {
//   console.log('clicked');
//   deleteService('626260760c71d1abbce9ed0f');
// });
//DELETE http://localhost:3000/api/services/62625f6b749a6d421f5cc4d5

export async function deleteService(idToDelete) {
  try {
    const resp = await fetch(`${BASE_URL}/services/${idToDelete}`, { method: 'DELETE' });
    console.log('resp ===', resp);
    // fetch nepermeta kodo i catch bloka jei status yra klaidos
    if (resp.ok === false) throw new Error('error deleting');
    getServices();
    // createCard(servicesArr[0]);
  } catch (error) {
    console.warn('error ===', error);
    console.log('atvaizduojam klaida');
  }
}

getServices();
