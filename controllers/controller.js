import jimp from 'jimp';
import qrCode from 'qrcode-reader';
import fs from 'fs';
import path from 'path';

export const readDNIQR = async (req, res) => {
  // const filePath = path.resolve() + '\\files\\uploads\\DNIs\\prueba.jpeg';
  const filePath = path.resolve() + '\\files\\uploads\\DNIs\\prueba1.jpg';
  try {
    if (fs.existsSync(filePath)) {
      const img = await jimp.read(fs.readFileSync(filePath));
      console.log(img);
      const qr = new qrCode();
      const value = await new Promise((resolve, reject) => {
        // qr.callback = (err, result) => (err !== null ? reject(err) : resolve(result));
        qr.callback = (err, result) => console.log(err,result);
        console.log(qr.callback)
        qr.decode(img.bitmap);
        console.log('QR',qr.decode(img.bitmap));
      });
      console.log('value',value.result);
      res.json(value.result);
    }
  } catch (error) {
    return error.message;
  }
};
