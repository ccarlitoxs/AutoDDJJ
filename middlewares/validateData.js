const validateData = (req, res, next) => {
  //Leer el token del header
  const {empresa,pasajero} = req.body;

  const validateEmpresa = () => {
    return !Object.values(empresa).some(val => val === null || val === '')
  }

  const validatePasajero = () => {
    return !Object.values(pasajero).some(val => val === null || val === '')
  }

  //Revisar si no hay token
  if (validateEmpresa() && validatePasajero()) {
    next();
  } else {
    return res.status(400).json({ msg: 'Datos incorrectos' });
  }
};

export default validateData;
