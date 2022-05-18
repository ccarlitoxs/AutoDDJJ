import axios from 'axios';
import headerConfig from '../../../config/headerConfig.js';

const getArticuloByIdWithoutDetails = async (req,articuloId) => {

  const { token } = req.body;

  const url = `${process.env.PALJET_URL}/articulos/${articuloId}`;

  const headers = headerConfig(token);

  const {data} = await axios.get(url, { headers }).catch((err) => {
    err.origin = '';
    throw err;
  });

  return data;
};

export default getArticuloByIdWithoutDetails;
