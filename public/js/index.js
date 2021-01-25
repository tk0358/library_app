/* eslint-disable */
import '@babel/polyfill';
import { addMaterial } from './addMaterial';

const addMaterialForm = document.querySelector('.add-material-form');
const plusBtn = document.querySelector('.plus-btn');

if (addMaterialForm) {
  addMaterialForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publisher = document.getElementById('publisher').value;
    const type = document.getElementById('type').value;
    const libraries = document.getElementById('libraries').value;
    addMaterial({ title, author, publisher, type, libraries });
  });
}

if (plusBtn) {
  plusBtn.addEventListener('click', e => {
    console.log(e.target.parentNode.children);
  });
}

console.log('Hello from front end');
