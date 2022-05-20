import axios from 'axios';
import https from 'https';
import url from 'url';
import headerConfig from '../config/headerConfig.js';

const postDDJJARG1Service = async (datos) => {
  const dataARG = new url.URLSearchParams(datos);

  console.log(dataARG);

  const urlPost = `${process.env.AUTORITY_ARG_SERVER}/app/enviarMail.php`;
  // const urlPost = `${process.env.AUTORITY_ARG_SERVER}/appa`;

  const headers = headerConfig('ARG');

  const response = axios({
    method: 'post',
    url: urlPost,
    headers,
    data: dataARG,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  }).catch((err) => {
    err.origin = '';
    throw err;
  });

  return response;
};

export default postDDJJARG1Service;
