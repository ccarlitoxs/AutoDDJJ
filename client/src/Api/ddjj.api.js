import axios from 'axios';

export const postDDJJ = async (datos) => {
  try {
    const { data } = await axios.post(
      `https://autoddjj.herokuapp.com/api/ddjj`,
      datos
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteQR = async () => {
  try {
    const { data } = await axios.delete(
      `https://autoddjj.herokuapp.com/api/deleteqr`,
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
