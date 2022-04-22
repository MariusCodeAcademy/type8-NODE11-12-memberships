/* <article class="card">
    <h3>Price Title</h3>
    <p>Desctip</p>
    <div class="hr"></div>
    <button class="btn btn-delete">delete</button>
  </article> */
// eslint-disable-next-line import/prefer-default-export
export function createCard(newCardObj) {
  const articleEl = document.createElement('article');
  articleEl.className = 'card';
  makeEl('h3', `${newCardObj.price}eur ${newCardObj.name}`, articleEl);
  makeEl('p', newCardObj.description, articleEl);
  makeEl('div', '', articleEl, 'hr');
  makeEl('button', 'delete', articleEl, 'btn btn-delete');
  // console.log('articleEl ===', articleEl);
  return articleEl;
}

function makeEl(tagName, text, dest, elClass = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  dest.appendChild(el);
}
