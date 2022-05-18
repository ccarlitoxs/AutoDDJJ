import axios from 'axios';
import { stringify } from 'query-string';
import headerConfig from '../../../config/headerConfig.js';

const getArticulos = async (req,querys) => {

  const { token } = req.body;

  const url = `${process.env.PALJET_URL}/articulos?${stringify(querys)}`;

  const headers = headerConfig(token);

  const { data } = await axios.get(url, { headers }).catch((err) => {
    err.origin = '';
    throw err;
  });

  return data;
};

export default getArticulos;
