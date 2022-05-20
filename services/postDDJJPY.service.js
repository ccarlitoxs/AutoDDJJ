import axios from 'axios';
import https from 'https';
import url from 'url';
import headerConfig from '../config/headerConfig.js';

const postDDJJPYService = async (datos) => {
  const dataPY = new url.URLSearchParams(datos);

  console.log(dataPY);

  // const urlPost = `${process.env.AUTORITY_PY_SERVER}/webdgvs/dataserver/ajax/crud/`;
  const urlPost = `${process.env.AUTORITY_PY_SERVER}/webdgvs/dataserver/aja`;

  const headers = headerConfig('PY');

  const response = axios({
    method: 'post',
    url: urlPost,
    headers,
    data: dataPY,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  }).catch((err) => {
    err.origin = '';
    throw err;
  });

  return response;
};

export default postDDJJPYService;
