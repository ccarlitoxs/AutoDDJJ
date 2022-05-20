import axios from 'axios';

export const postDDJJ = async (datos) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_SERVER}/ddjj`,
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
      `${process.env.REACT_APP_BACKEND_SERVER}/deleteqr`,
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
