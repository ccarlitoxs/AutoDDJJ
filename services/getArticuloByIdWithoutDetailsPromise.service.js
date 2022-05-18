import axios from 'axios';
import headerConfig from '../../../config/headerConfig.js';

const getArticuloByIdWithoutDetailsPromise = async (req,articuloId) => {

  const { token } = req.body;

  const url = `${process.env.PALJET_URL}/articulos/${articuloId}`;

  const headers = headerConfig(token);

  const response = axios.get(url, { headers }).catch((err) => {
    err.origin = '';
    throw err;
  });

  return response;
};

export default getArticuloByIdWithoutDetailsPromise;
