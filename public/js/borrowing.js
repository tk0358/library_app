import axios from 'axios';
import { showAlert } from './alerts';

export const createBorrow = async (material, library, date) => {
  try {
    await axios({
      method: 'PATCH',
      url: `/api/v1/materials/${material}`,
      data: {
        status: 'be_borrowing',
      },
    });

    const res = await axios({
      method: 'POST',
      url: '/api/v1/borrowings',
      data: {
        material,
        library,
        checkoutDate: date,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'New borrow is created successfully');
      window.setTimeout(() => {
        location.reload(true);
      }, 1500);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
