// import fs from 'fs';
// import fetch from 'node-fetch';
import path from 'path';
import download from'image-downloader';



export const downloadQR = async (url,dni,apellido,nombre) => {
  const options = {
    url,
    dest: `${path.resolve()}\\files\\uploads\\QRPY\\qrpy-${dni}-${apellido} ${nombre}.png`,
    rejectUnauthorized: false
  };

  download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename);
  })
  .catch((err) => console.error(err));
};
