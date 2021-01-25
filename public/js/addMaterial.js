const axios = require('axios');
import { showAlert } from './alerts';

export const addMaterial = async ({
  title,
  author,
  publisher,
  type,
  libraries,
}) => {
  try {
    console.log(title, author, publisher, type, libraries);
    const res = await axios({
      method: 'POST',
      url: '/api/v1/materials',
      data: {
        title,
        author,
        publisher,
        type,
        libraries,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'You have successfully added a material');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
