import axios from 'axios';
import https from 'https';
import url from 'url';
import headerConfig from '../config/headerConfig.js';

const postDDJJPYService = async (datos) => {
  const dataPY = new url.URLSearchParams(datos);

  const urlPost = `${process.env.AUTORITY_PY_SERVER}/webdgvs/dataserver/ajax/crud/`;

  const headers = headerConfig('PY');

  const { data } = await axios({
    method: 'post',
    url: urlPost,
    headers,
    data: dataPY,
    httpsAgent: new https.Agent({
      keepAlive: true,
      rejectUnauthorized: false,
    }),
  }).catch((err) => {
    err.origin = '';
    throw err;
  });

  return data;
};

export default postDDJJPYService;
