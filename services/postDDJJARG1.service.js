import axios from 'axios';
// import https from 'https';
import url from 'url';
import headerConfig from '../config/headerConfig.js';

const postDDJJARG1Service = async (datos) => {
  const dataARG = new url.URLSearchParams(datos);
  
  const urlPost = `${process.env.AUTORITY_ARG_SERVER}/app/enviarMail.php`;

  const headers = headerConfig('ARG');

  const response = await axios({
    method: 'post',
    url: urlPost,
    headers,
    data: dataARG,
  }).catch((err) => {
    err.origin = '';
    throw err;
  });

  return response.data;
};

export default postDDJJARG1Service;
