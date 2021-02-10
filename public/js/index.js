/* eslint-disable */
import '@babel/polyfill';
import { addMaterial } from './addMaterial';
import { createBorrow } from './borrowing';

const addMaterialForm = document.querySelector('.add-material-form');
const plusBtn = document.querySelector('.plus-btn');
const preBorrowingBtnsPerLibrary = document.querySelectorAll(
  '.pre-borrowing-action-per-lib'
);
// const borrowingBtnsPerLibrary = document.querySelectorAll(
//   '.borrowing-action-per-lib'
// );

const pushDateToArray = (days, objDate) => {
  const year = objDate.getFullYear();
  const month = objDate.getMonth() + 1;
  const day = objDate.getDate();
  days.push(`${year}/${month}/${day}`);
};

const create4DaysArray = () => {
  const days = [];
  let objDate = new Date();
  pushDateToArray(days, objDate);
  objDate.setDate(objDate.getDate() - 1);
  pushDateToArray(days, objDate);
  objDate.setDate(objDate.getDate() - 1);
  pushDateToArray(days, objDate);
  objDate.setDate(objDate.getDate() - 1);
  pushDateToArray(days, objDate);
  return days;
};

if (preBorrowingBtnsPerLibrary) {
  preBorrowingBtnsPerLibrary.forEach(btn =>
    btn.addEventListener('click', e => {
      e.preventDefault();

      const days = create4DaysArray();
      // console.log(days);

      let htmlStr = `
        <select name="days">
        <option value="">借りた日付</option>
      `;
      for (const day of days) {
        htmlStr += `<option value=${day}>${day}</option>`;
      }
      htmlStr += `
        </select>
        <button class="borrowing-action borrowing-action-per-lib">貸出</button>
      `;
      e.target.parentNode.innerHTML = htmlStr;

      // document
      //   .querySelector('.borrowing-action-per-lib')
      //   .addEventListener('click', e => {
      //     e.preventDefault();
      //     console.log('btn is clicked');
      //   });
      document.querySelectorAll('.borrowing-action-per-lib').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          const material = e.target.parentNode.parentNode.id;
          const library =
            e.target.parentNode.parentNode.parentNode.parentNode.dataset
              .library;

          const date = e.target.previousElementSibling.value;

          // const library = await Library.find({ name: libraryName });
          console.log(material, library, date);

          createBorrow(material, library, date);
        });
      });
    })
  );
}

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
