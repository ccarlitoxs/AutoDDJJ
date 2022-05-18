import multer from 'multer';
import moment from 'moment';
import path from 'path';

const excelFilter = (req, file, cb) => {
  if (
    file.mimetype.includes('excel') ||
    file.mimetype.includes('spreadsheetml')
  ) {
    cb(null, true);
  } else {
    cb('Por favor, sube un archivo tipo imagen.', false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve() + '\\files\\uploads\\ClientesB2B');
  },
  filename: (req, file, cb) => {
    cb(null, `${moment().format('YYYY-MM-DDTHH-mm-ss--SS')}-clientesB2B-${file.originalname}`);
  },
});

const uploadFile = multer({ storage: storage, fileFilter: excelFilter });

export default uploadFile;