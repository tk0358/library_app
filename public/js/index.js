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
    const libraries = Array.from(document.querySelectorAll('.libraries')).map(
      el => el.value
    );
    // 図書館が選択されていない""の要素を削除
    libraries.some((val, i) => {
      if (!val) libraries.splice(i, 1);
    });
    addMaterial({ title, author, publisher, type, libraries });
  });
}

if (plusBtn) {
  plusBtn.addEventListener('click', e => {
    const libraryField = e.target.previousElementSibling;
    if (libraryField.children.length <= 4) {
      console.log(libraryField.children.length);
      const copyNode = libraryField.lastElementChild.cloneNode(true);
      libraryField.appendChild(copyNode);
    }
  });
}

console.log('Hello from front end');
